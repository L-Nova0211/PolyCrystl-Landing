import React from 'react'
import styled from 'styled-components'
import PanelBody from './PanelBody'
import { PushedProps } from '../types'

interface Props extends PushedProps {
  showMenu: boolean
  isMobile: boolean
  togglePush: () => void
}

const SIDEBAR_WIDTH_REDUCED = 56
const SIDEBAR_WIDTH_FULL = 240

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? '0' : 0)};
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: 10px;
  flex-shrink: 0;
  background-color: #fbfbfb;
  width: ${({ isPushed }) => (isPushed ? `320px` : 0)};
  height: 100%;
  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${({ isPushed }) => (isPushed ? '20px' : 0)};
  z-index: 21;
  overflow: ${({ isPushed }) => (isPushed ? 'initial' : 'hidden')};
  transform: translate3d(0, 0, 0);
  ${({ isPushed }) => !isPushed && 'white-space: nowrap;'};

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <PanelBody {...props} />
    </StyledPanel>
  )
}

export default Panel
