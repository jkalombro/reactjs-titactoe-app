import React from 'react';
import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import render from '../utils/jest-redux-helper';
import PlayerScores from './PlayerScores';

describe("PlayerScores Component", () => {
  it('renders without crashing', () => {
    render(<PlayerScores />);
  });

  it('should have player 1 score', () => {
    render(<PlayerScores />);
    expect(screen.getByText(/player 1/i)).toBeInTheDocument();
  });

  it('should have player 2 score', () => {
    render(<PlayerScores />);
    expect(screen.getByText(/player 2/i)).toBeInTheDocument();
  });
});

