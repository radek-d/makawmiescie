import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    // The logo or some text should be present
    const elements = screen.getAllByText(/Maka/i)
    expect(elements.length).toBeGreaterThan(0)
  })

  it('contains the "O nas" link in navigation', () => {
    render(<App />)
    const aboutLink = screen.getAllByText(/O nas/i)
    expect(aboutLink.length).toBeGreaterThan(0)
  })
})
