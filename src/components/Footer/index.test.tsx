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
  it('renderiza o botão corretamente', () => {
    render(<Footer />);
    const button = screen.getByRole('button', { name: /add new task/i });
    expect(button).toBeInTheDocument();
  });

  it('abre o modal ao clicar no botão', () => {
    render(<Footer />);
    const button = screen.getByRole('button', { name: /add new task/i });

    fireEvent.click(button);

    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
    expect(screen.getByText(/modal aberto/i)).toBeInTheDocument();
  });

  it('fecha o modal ao clicar em "Fechar"', () => {
    render(<Footer />);
    const button = screen.getByRole('button', { name: /add new task/i });

    fireEvent.click(button);
    const closeBtn = screen.getByText(/fechar/i);
    fireEvent.click(closeBtn);

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
