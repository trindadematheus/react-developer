import React from 'react'

import * as S from './Launcher.styles'

export type LauncherProps = {
  profileUrl: string
  avatarUrl: string
}

function Launcher({ profileUrl, avatarUrl }: LauncherProps) {
  return (
    <React.Fragment>
      <S.Wrapper
        href={profileUrl}
        target='_blank'
        aria-label='open developer profile'
      >
        <img
          src={avatarUrl}
          alt='developer profile'
          className='launcher-avatar'
        />
      </S.Wrapper>
    </React.Fragment>
  )
}

export default Launcher
