import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@crystals/uikit'
import Page from 'components/layout/Page'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  return (
    <Page>
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        <Heading scale="xxl">404</Heading>
        <Text mb="16px">Oops, page not found.</Text>
        <Button as="a" href="/" scale="sm">
          Back Home
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
