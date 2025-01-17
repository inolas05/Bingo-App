import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for matchers like .toBeInTheDocument()
import { describe, it, expect, vi } from 'vitest';
import BingoCell from '../components/BingoCell';

describe('BingoCell Component', () => {
  it('renders the phrase passed as a prop', () => {
    const testPhrase = 'Test Phrase';
    render(<BingoCell phrase={testPhrase} isSelected={false} onClick={() => {}} />);

    // Check that the phrase appears
    expect(screen.getByText(testPhrase)).toBeInTheDocument();
  });

  it('does not trigger onClick when the cell is FREE SLOT', () => {
    const mockOnClick = vi.fn();
    render(<BingoCell phrase="FREE SLOT" isSelected={false} onClick={mockOnClick} />);

    // Attempt clicking FREE SLOT
    fireEvent.click(screen.getByText('FREE SLOT'));

    // onClick should NOT be called
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
