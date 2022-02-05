import React from 'react'
import styled from 'styled-components'
import { Flex, Link, Image } from '@crystals/uikit'
import { scroller } from 'react-scroll'
import { HamburgerIcon, HamburgerCloseIcon } from '../icons'
import MenuButton from './MenuButton'

interface Props {
  isPushed: boolean
  togglePush: () => void
  href: string
  isMobile: boolean
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none !important;
  &:hover {
    color: #3c64b1;
  }
  .logo {
    width: 100px;
    margin-left: 40px;
    margin-right: 5px;
  }
`

const LogoText = styled.div`
  padding-top: 13px;
  color: #2f3f80;
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 0.5px;
  margin-left: 3px;
`

const Logo: React.FC<Props> = ({ isPushed, togglePush, href, isMobile }) => {
  const isAbsoluteUrl = href.startsWith('http')
  const innerLogo = <Image src="/images/landing/crystl.svg" alt="choose" width={45} height={45} className="logo" />
  const brand = <LogoText>CRYSTL.FINANCE</LogoText>

  const scrollToTop = () =>
    scroller.scrollTo('top', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 50,
    })

  return (
    <Flex justifyContent="space-between" width={isMobile ? '95vw' : 'auto'}>
      {isAbsoluteUrl ? (
        <StyledLink className="brand" aria-label="CRYSTL.FINANCE">
          <Flex justifyContent="center" onClick={scrollToTop}>
            {innerLogo}
            {brand}
          </Flex>
        </StyledLink>
      ) : (
        <StyledLink className="brand" aria-label="CRYSTL.FINANCE">
          <Flex justifyContent="center" onClick={scrollToTop}>
            {innerLogo}
            {brand}
          </Flex>
        </StyledLink>
      )}
      {isMobile && (
        <Flex alignItems="center">
          <MenuButton
            aria-label="Toggle menu"
            onClick={togglePush}
            mr="20px"
            style={{ borderRadius: '50%', backgroundColor: '#FFFFFF', width: '45px', height: '45px' }}
          >
            {isPushed ? (
              <HamburgerCloseIcon width="24px" color="#000000" />
            ) : (
              <HamburgerIcon width="24px" color="#000000" />
            )}
          </MenuButton>
        </Flex>
      )}
    </Flex>
  )
}

export default Logo
