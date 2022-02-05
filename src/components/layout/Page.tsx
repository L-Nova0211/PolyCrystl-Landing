import React from 'react'
import styled from 'styled-components'
import Container from './Container'

const StyledPage = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-top: 16px;
  padding-bottom: 64px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
  }
`

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <>
      <StyledPage {...props}>{children}</StyledPage>
    </>
  )
}

export default Page
