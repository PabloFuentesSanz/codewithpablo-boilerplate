import { render, screen } from '@testing-library/react'
import App from '../App'

it('renders the main heading', () => {
  render(<App />)
  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading).toBeInTheDocument()
})
