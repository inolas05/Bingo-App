import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import BingoWonModal from '../components/BingoWonModal';

describe('BingoWonModal Component', () => {
  it('does not render anything when isVisible is false', () => {
    render(<BingoWonModal isVisible={false} onClose={() => {}} />);
    
    // Modal text should not appear
    expect(screen.queryByText(/bingo!/i)).not.toBeInTheDocument();
  });

  it('renders and calls onClose when "Continue" is clicked', () => {
    const mockOnClose = vi.fn();
    render(<BingoWonModal isVisible={true} onClose={mockOnClose} />);

    // The Bingo text should appear
    expect(screen.getByText('🎉 Bingo! 🎉')).toBeInTheDocument();

    // Click the "Continue" button
    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    // onClose should be called
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
