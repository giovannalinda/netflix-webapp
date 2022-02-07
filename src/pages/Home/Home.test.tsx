import { render, screen, userEvent } from 'src/../__helpers__/app-tests'
import { Home } from '.'

describe('Home page', () => {
  it('Checks if the page header loads correctly', () => {
    render(<Home />)

    expect(screen.getByText(/Dashboard/)).toBeInTheDocument()
  })
  it('Checks if the watch button loads correctly', () => {
    render(<Home />)

    const button = screen.getByText(/Watch/)

    expect(button).toBeInTheDocument()

    userEvent.click(button)
  })
})
