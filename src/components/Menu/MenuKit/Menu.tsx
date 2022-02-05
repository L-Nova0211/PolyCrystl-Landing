import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import throttle from 'lodash/throttle'
import { Flex, useMatchBreakpoints, Button, Link, Grid, Text } from '@crystals/uikit'
import { scroller } from 'react-scroll'
import Logo from './components/Logo'
import Panel from './components/Panel'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledNav = styled.nav<{ showMenu: boolean; opacity: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-80px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  height: 80px;
  background: ${({ opacity }) =>
    opacity ? '#F8CEEC' : 'linear-gradient(180deg, rgba(245, 211, 250, 0) 20.41%, rgba(175, 213, 245, 0) 100%)'};
  z-index: 20;
  transform: translate3d(0, 0, 0);
`

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`

const Inner = styled.div<{
  isPushed: boolean
  showMenu: boolean
  isMobile: boolean
}>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: 0px;
`

const MenuButton = styled(Button)`
  height: 40px;
  width: 145px;
  left: 0px;
  top: 0px;
  border-radius: 7px;
  background: #b07efa;
  text-align: center;
  padding: 10px;
  box-shadow: 1px 1px 5px 1px rgb(14 14 44 / 19%);
  &:hover {
    opacity: 0.7;
  }
`

const MenuText = styled(Text)`
  font-size: 19.2px;
  font-style: normal;
  font-weight: 700;
  line-height: 8px;
  letter-spacing: 0.2px;
  text-align: left;
  color: #2f3f80;
  cursor: pointer;
  margin: 0 -6px;
  @media only screen and (max-width: 1075px) {
    margin: 0 -20px;
  }
  @media only screen and (min-width: 1232px) {
    margin: 0 10px;
  }
`

const MenuLink = styled(Link)`
  text-decoration: none !important;
  .link:hover {
    color: #3c64b1;
  }
`

const Menu: React.FC = ({ children }) => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = isXl === false
  const [isPushed, setIsPushed] = useState(!isMobile ? false : !isMobile)
  const [showMenu, setShowMenu] = useState(true)
  const [opacity, setOpacity] = useState(false)
  const refPrevOffset = useRef(window.pageYOffset)

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight
      const isTopOfPage = currentOffset === 0
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true)
        setOpacity(false)
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true)
          setOpacity(true)
        } else {
          // Has scroll down
          setShowMenu(false)
          setOpacity(false)
        }
      }
      refPrevOffset.current = currentOffset
    }
    const throttledHandleScroll = throttle(handleScroll, 200)

    window.addEventListener('scroll', throttledHandleScroll)
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])

  // Find the home link if provided

  const scrollToCommunity = () =>
    scroller.scrollTo('community', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 50,
    })

  const scrollToFeatures = () =>
    scroller.scrollTo('features', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 50,
    })

  const scrollToAboutUs = () =>
    scroller.scrollTo('aboutUs', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 50,
    })

  const scrollToBuyCrystl = () =>
    scroller.scrollTo('buyCrystl', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 50,
    })

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu} opacity={opacity}>
        <Flex mr={35} mt={-2}>
          <Logo
            isPushed={isMobile ? isPushed : false}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            href="/"
            isMobile={isMobile}
          />
        </Flex>
        <Flex>
          {!isMobile && (
            <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gridColumnGap="6vw">
              <MenuLink>
                <MenuText className="link" onClick={scrollToFeatures}>
                  Features
                </MenuText>
              </MenuLink>
              <MenuLink>
                <MenuText className="link" onClick={scrollToAboutUs}>
                  About Us
                </MenuText>
              </MenuLink>
              <MenuLink>
                <MenuText className="link" onClick={scrollToBuyCrystl}>
                  Buy CRYSTL
                </MenuText>
              </MenuLink>
              <MenuLink>
                <MenuText className="link" onClick={scrollToCommunity}>
                  Community
                </MenuText>
              </MenuLink>
            </Grid>
          )}
        </Flex>
        <Flex flexDirection="row" alignItems="center" ml={35} mr={45}>
          {isMobile ? (
            ''
          ) : (
            <MenuButton as="a" href="https://cronos.crystl.finance/vaults">
              <span
                style={{
                  fontSize: '17px',
                  fontStyle: 'normal',
                  color: '#FFFFFF',
                  lineHeight: '18px',
                  letterSpacing: '0.3px',
                }}
              >
                Enter App
              </span>
            </MenuButton>
          )}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        {isMobile && (
          <Panel
            isPushed={isMobile ? isPushed : true}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isMobile={isMobile}
            showMenu={isMobile ? showMenu : false}
            pushNav={setIsPushed}
          />
        )}
        <Inner isPushed={isPushed} showMenu={showMenu} isMobile={isMobile}>
          {children}
        </Inner>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Menu
