import { START_MATCH, UPDATE_ROUND_STATUS, UPDATE_TABLE, UPDATE_MODALS } from '../actions/types';

const initialState = {
    game_mode: "PvAI",
    players: [
        { id: "P1", name: "Player 1", score: 0 },
        { id: "P2", name: "Player 2", score: 0 }
    ],
    round: {
        current_round: 0,
        current_round_first_turn: "P1",
        round_current_turn: "P1",
        round_state: "STANDBY", //Statuses: STANDBY, INGAME, ENDROUND, ENDMATCH
        round_message: "Click Start Match to start!"
    },
    gameboard: [
        { cellid: 1, current_mark: "", tdclass: "" },
        { cellid: 2, current_mark: "", tdclass: "" },
        { cellid: 3, current_mark: "", tdclass: "" },
        { cellid: 4, current_mark: "", tdclass: "" },
        { cellid: 5, current_mark: "", tdclass: "" },
        { cellid: 6, current_mark: "", tdclass: "" },
        { cellid: 7, current_mark: "", tdclass: "" },
        { cellid: 8, current_mark: "", tdclass: "" },
        { cellid: 9, current_mark: "", tdclass: "" }
    ],
    game_modals: {
        winner_name: "",
        winnermodal_isShow: false
    }
}

export default function(state = initialState, action) {
    
    switch(action.type) {
        case START_MATCH:
            return {
                ...state,
                round: action.payload.newround,
                gameboard: action.payload.newgameboard,
                players: action.payload.newplayers
            };
        case UPDATE_ROUND_STATUS:
            return {
                ...state,
                round: action.payload.newround,
                gameboard: action.payload.newgameboard,
                players: action.payload.newplayers,
                game_modals: action.payload.newgame_modals
            };
        case UPDATE_TABLE:
            return {
                ...state,
                gameboard: action.payload
            };
        case UPDATE_MODALS:
            return {
                ...state,
                game_modals: action.payload
            };
        default:
            return state;
    }
}