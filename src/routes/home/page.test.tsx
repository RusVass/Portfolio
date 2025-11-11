import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home page', () => {
  it('отображает имя разработчика', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Ruslan Vasiliev/i })).toBeInTheDocument();
  });
});
