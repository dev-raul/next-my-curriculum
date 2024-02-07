'use client'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 3;
  background-color: ${({ theme }) => theme.colors.base.weak};
  padding: 20px 10px;
`

export const Avatar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 75px;
    border: 5px solid ${({ theme }) => theme.colors.base.minimum};
  }
`
