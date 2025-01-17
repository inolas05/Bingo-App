import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import BingoCard from '../components/BingoCard';

// Optional: mock phrases to ensure consistent test data
vi.mock('../utils/Phrases', () => ({
  phrases: [
    'Phrase1', 'Phrase2', 'Phrase3', 'Phrase4', 'Phrase5',
    'Phrase6', 'Phrase7', 'Phrase8', 'Phrase9', 'Phrase10',
  ]
}));

describe('BingoCard Integration Tests', () => {
  it('clicking a cell toggles its selected state', () => {
    render(<BingoCard />);

    // The board is 5x5. FREE SLOT is at row=2,col=2.
    // We pick row=0, col=0 (the first cell) to test toggling.

    // If needed, add data-testid to your BingoCell. 
    // Or if you know the text of the first cell, you can find it by text:
    const firstCell = screen.getByText('Phrase1'); 
    // If your phrase distribution is different, adjust accordingly.

    // Initially, not selected => we expect a "bg-white" class (or something similar)
    // Simulate click
    fireEvent.click(firstCell);
    // Now it should be selected => "bg-green-500" or your selected class
    expect(firstCell).toHaveClass('bg-green-500');

    // Click again => it should unselect
    fireEvent.click(firstCell);
    expect(firstCell).toHaveClass('bg-white');
  });
});

it('selecting all cells in a row triggers Bingo and opens BingoWonModal', () => {
    render(<BingoCard />);
  
    // We'll fill row 0 (col 0..4). FREE SLOT is in row=2, so it doesn't affect row 0.
    // If you added data-testid, for instance:
    //   data-testid={`${rowIndex}-${colIndex}`}
    // you can select each cell in row 0:
  
    const row0Cells = [
      screen.getByTestId('0-0'),
      screen.getByTestId('0-1'),
      screen.getByTestId('0-2'),
      screen.getByTestId('0-3'),
      screen.getByTestId('0-4'),
    ];
  
    // Click each cell in row 0
    row0Cells.forEach(cell => {
      fireEvent.click(cell);
    });
  
    // Once row 0 is fully selected, "Bingo!" should appear
    expect(screen.getByText('🎉 Bingo! 🎉')).toBeInTheDocument();
  });
  
