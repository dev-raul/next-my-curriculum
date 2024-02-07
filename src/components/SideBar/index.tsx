import React from 'react'
import * as S from './styles'
export const SideBar: React.FC<{ avatarUrl: string }> = ({ avatarUrl }) => {
  return (
    <S.Container>
      <S.Avatar>
        <img src={avatarUrl} />
      </S.Avatar>
    </S.Container>
  )
}
