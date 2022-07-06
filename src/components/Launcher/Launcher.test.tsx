import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

import Launcher from './index'

describe('<Launcher />', () => {
  it('should be renders correctly with required props', () => {
    const profileUrl = 'https://github.com/trindadematheus'
    const avatarUrl = 'https://github.com/trindadematheus.png'

    render(<Launcher profileUrl={profileUrl} avatarUrl={avatarUrl} />)

    expect(screen.getByRole('link')).toHaveAttribute('href', profileUrl)
    expect(screen.getByRole('img')).toHaveAttribute('src', avatarUrl)
  })
})
