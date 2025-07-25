import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '.';

jest.mock('../Modal', () => ({
  __esModule: true,
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return isOpen ? (
      <div data-testid="modal">
        <button onClick={onClose}>Fechar</button>
        <p>Modal aberto</p>
      </div>
    ) : null;
  },
}));

describe('Footer component', () => {
  it('renders the button correctly', () => {
    render(<Footer />);
    const button = screen.getByRole('button', { name: /add new task/i });
    expect(button).toBeInTheDocument();
  });

  it('opens the modal when clicking the button', () => {
    render(<Footer />);
    const button = screen.getByRole('button', { name: /add new task/i });

    fireEvent.click(button);

    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
    expect(screen.getByText(/modal aberto/i)).toBeInTheDocument();
  });

  it('closes the modal when clicking "Close"', () => {
    render(<Footer />);
    const button = screen.getByRole('button', { name: /add new task/i });

    fireEvent.click(button);
    const closeBtn = screen.getByText(/fechar/i);
    fireEvent.click(closeBtn);

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
