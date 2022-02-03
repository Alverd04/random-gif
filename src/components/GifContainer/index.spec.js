// Create a test for GiftContainer component

import { render, screen } from '@testing-library/react'
import GifContainer from '.'

describe('GifContainer', () => {
  it('renders without crashing', () => {
    render(
      <GifContainer gifUrl='https://user-images.githubusercontent.com/59662722/152339294-15ae3954-5357-4197-b567-5f5470318c7f.gif' />
    )
    expect(screen.getByAltText('gif')).toBeInTheDocument()
  })

  it('renders a gif', () => {
    render(
      <GifContainer gifUrl='https://user-images.githubusercontent.com/59662722/152339294-15ae3954-5357-4197-b567-5f5470318c7f.gif' />
    )
    expect(screen.getByAltText('gif')).toHaveAttribute(
      'src',
      'https://user-images.githubusercontent.com/59662722/152339294-15ae3954-5357-4197-b567-5f5470318c7f.gif'
    )
  })
})
