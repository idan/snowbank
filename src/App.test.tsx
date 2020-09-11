import { render } from '@testing-library/react'
import * as React from 'react'
import App from './App'

test('renders It Works link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/It Works!/i)
  expect(linkElement).toBeInTheDocument()
})
