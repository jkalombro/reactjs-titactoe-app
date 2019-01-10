import { START_MATCH, UPDATE_ROUND_STATUS, UPDATE_TABLE, UPDATE_MODALS, UPDATE_PLAYER_SCORE } from './types';

//this holds the value of all posible combinations to win a round
const combinationContainer = [
    { id: 1, combinations: [[2,3], [4,7], [5,9]] },
    { id: 2, combinations: [[1,3], [5,8]] },
    { id: 3, combinations: [[1,2], [5,7], [6,9]] },
    { id: 4, combinations: [[1,7], [5,6]] },
    { id: 5, combinations: [[1,9], [2,8], [3,7], [4,6]] },
    { id: 6, combinations: [[4,5], [3,9]] },
    { id: 7, combinations: [[1,4], [3,5], [8,9]] },
    { id: 8, combinations: [[2,5], [7,9]] },
    { id: 9, combinations: [[1,5], [3,6], [7,8]] },
]

export const updateCellMark = (round, gameboard, cellid) => dispatch => {
    
    var plyrmark = "";
    var vgameboard = gameboard;

    if(round.round_current_turn === "P1") {
        plyrmark = "x"
    }else{
        plyrmark = "o"
    }

    //update cellmark
    vgameboard[cellid-1].current_mark = plyrmark;

    dispatch({
        type: UPDATE_TABLE,
        payload: vgameboard
    });
}


export const updateRoundStatus = (round, gameboard, players, cellid) => dispatch => {
    
    var new_turn, new_first_turn, new_message, new_state;
    var newgameboard = gameboard;
    var p1_score = players[0].score;
    var p2_score = players[1].score;
    var move_result = evaluateGameboard(gameboard, players, round.round_current_turn, cellid);

    if(move_result.main === "NEXT"){
        if(round.round_current_turn === "P1") {
            new_turn = "P2";
            new_message = players[0].name + " marked cell#" + cellid + ", " + players[1].name + "'s turn!";
        }else{
            new_turn = "P1";
            new_message = players[1].name + " marked cell#" + cellid + ", " + players[0].name + "'s turn!";
        }

        new_first_turn = round.current_round_first_turn;
        new_state = round.round_state;
    }else{
        if(move_result.main === "P1") {
            p1_score += 1;
            new_message = players[0].name + " WON THIS ROUND!";
        }else if(move_result.main === "P2"){
            p2_score += 1;
            new_message = players[1].name + " WON THIS ROUND!";
        }else{
            new_message = "Round is over. This round is a DRAW!";
        }

        //update new 1st turn
        if(round.current_round_first_turn==="P1"){
            new_first_turn = "P2";
        }else{
            new_first_turn = "P1";
        }

        new_state = "ENDROUND";
        new_turn = "P1";
    }

    if(move_result.winning_cells.length>0) {
        console.log("THERES WINNING CELLS");
        //update winning cells
        move_result.winning_cells.forEach(function(item){
            newgameboard[item-1].tdclass = "winning_cell";
        });
    }

    const newpayload = {
        newround : {
            current_round: round.current_round,
            current_round_first_turn: new_first_turn,
            round_current_turn: new_turn,
            round_state: new_state,
            round_message: new_message
        },
        newgameboard : newgameboard,
        newplayers : [
            { id: players[0].id, name: players[0].name, score: p1_score},
            { id: players[1].id, name: players[1].name, score: p2_score}
        ]
    }

    dispatch({
        type: UPDATE_ROUND_STATUS,
        payload: newpayload
    });
}


export const startGame = (round, gameboard, gtype) => dispatch => {

    var new_message = "";
    var first_turn = "";
    var current_round = round.current_round;
    var newgameboard = gameboard;

    if(gtype==='ROUND') {
        first_turn = round.current_round_first_turn
        current_round = current_round + 1;
    }else{
        first_turn = "P1";
        current_round = 1;
    }

    if(first_turn === "P1") {
        new_message = "GAME STARTED, Player 1's turn!";
    }else{
        new_message = "GAME STARTED, Player 2's turn!";
    }

    gameboard.forEach(function(item){
        newgameboard[item.cellid-1].current_mark = "";
        newgameboard[item.cellid-1].tdclass = "";
    });

    const newpayload = {
        newround : {
            current_round: current_round,
            current_round_first_turn: round.current_round_first_turn,
            round_current_turn: first_turn,
            round_state: "INGAME",
            round_message: new_message
        },
        newgameboard: gameboard
    }

    dispatch({
        type: START_MATCH,
        payload: newpayload
    });
}

export const showHideModals = (isShow) => dispatch => {

    const newgamemodals = {
        winnermodal_isShow: isShow
    }

    dispatch({
        type: UPDATE_MODALS,
        payload: newgamemodals
    });
}

//evaluates round result
function evaluateGameboard(gameboard, players, current_turn, cellid) {
    var result = {main: "NEXT", winning_cells: []}; //this means player didnt win or round is draw
    var winning_cells = [];
    var current_mark;
    var combinations = combinationContainer[cellid-1].combinations;
    if(current_turn==="P1"){
        current_mark = "x";
    }else{
        current_mark = "o";
    }

    combinations.forEach(function(item){
        if(result.main==="NEXT"){
            item.forEach(function(item2) {
                if(gameboard[item2-1].current_mark===current_mark){
                    winning_cells.push(item2);
                }
            });

            // console.log("Winning Cells");
            // console.log(winning_cells);
            if(winning_cells.length===2) {
                result.main = current_turn;
                winning_cells.push(cellid);
                console.log(current_turn + " WON THE ROUND!");
                updatePlayerScore(players, current_turn);
            }else{
                winning_cells = [];
            }
        }
    });

    //if there's still no winner, check if gameboard is already filled
    if(result.main==="NEXT") {
        if(!(gameboard.some(function(item){ return item.current_mark === "" }))){
            result.main = "DRAW";
            console.log("ITS A DRAW");
        }
    }

    //assign winning cells
    result.winning_cells = winning_cells;

    return result;
}

const updatePlayerScore = (players, playerid) => dispatch => {
    var newplayers = players;
    console.log(playerid + " should be updated!");

    if(playerid==="P1") {
        newplayers[0].score += 1; 
    }else{
        newplayers[1].score += 1;
    }

    dispatch({
        type: UPDATE_PLAYER_SCORE,
        payload: newplayers
    });
}