import React from 'react'
import styled from 'styled-components'
import { Link, Grid, Flex, Button, Image, ChevronRightIcon } from '@crystals/uikit'
import { scroller } from 'react-scroll'
import { PushedProps } from '../types'

interface Props extends PushedProps {
  isMobile: boolean
  togglePush: () => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`

const MenuButton = styled(Button)`
  height: 40px;
  width: 220px;
  left: 0px;
  top: 0px;
  border-radius: 7px;
  background: #b07efa;
  text-align: center;
  padding: 10px;
  box-shadow: 1px 1px 5px 1px rgb(14 14 44 / 19%);
`

const SideLink = styled(Link)`
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 8px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: #373f41;
  margin-top: 3px;
  text-decoration: none !important;
  display: inline-block;
`

const SideList = styled(Button)`
  height: 54px;
  width: 267px;
  border-radius: 30px;
  background-color: #fbfbfb;
  box-shadow: none;
  justify-content: left;
  padding: 17px;
  img {
    opacity: 0.5;
  }
  &.list_click:active {
    background-color: #efefef;
    img {
      opacity: 1;
    }
    a {
      color: #3c64b1 !important;
    }
  }
`

const Nav = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 0px 10px 20px 0px #0000001a;
  background: #ffffff;
  margin-top: 16px;
  margin-right: 19px;
  padding: 6px;
`

const PanelBody: React.FC<Props> = ({ pushNav, isMobile, togglePush }) => {
  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined
  const innerLogo = <Image src="/images/landing/logoTitle.svg" alt="choose" width={140} height={140} />

  const scrollToTop = () =>
    scroller.scrollTo('top', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 50,
    })

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
    <Container>
      <Flex justifyContent="right">
        <Nav aria-label="Toggle menu" onClick={togglePush}>
          <ChevronRightIcon width="40px" color="#707070" />
        </Nav>
      </Flex>
      <Flex
        justifyContent="center"
        onClick={() => {
          handleClick()
          scrollToTop()
        }}
      >
        {innerLogo}
      </Flex>
      <Grid gridTemplateColumns="1fr" gridRowGap="20px" pt={60} pb={80}>
        <Flex justifyContent="center" alignItems="center">
          <SideList
            className="list_click"
            onClick={() => {
              handleClick()
              scrollToFeatures()
            }}
          >
            <Image
              src="/images/landing/features.svg"
              alt="features"
              width={20}
              height={20}
              mr={16}
              style={{ display: 'inline-block' }}
            />
            <SideLink>Features</SideLink>
          </SideList>
        </Flex>
        <Flex justifyContent="center">
          <SideList
            className="list_click"
            onClick={() => {
              handleClick()
              scrollToAboutUs()
            }}
          >
            <Image
              src="/images/landing/aboutUs.svg"
              alt="aboutUs"
              width={20}
              height={20}
              mr={16}
              style={{ display: 'inline-block' }}
            />
            <SideLink>About Us</SideLink>
          </SideList>
        </Flex>
        <Flex justifyContent="center">
          <SideList
            className="list_click"
            onClick={() => {
              handleClick()
              scrollToBuyCrystl()
            }}
          >
            <Image
              src="/images/landing/buyCrystl.svg"
              alt="buyCrystl"
              width={20}
              height={20}
              mr={16}
              style={{ display: 'inline-block' }}
            />
            <SideLink>Buy CRYSTL</SideLink>
          </SideList>
        </Flex>
        <Flex justifyContent="center">
          <SideList
            className="list_click"
            onClick={() => {
              handleClick()
              scrollToCommunity()
            }}
          >
            <Image
              src="/images/landing/community.svg"
              alt="community"
              width={20}
              height={20}
              mr={16}
              style={{ display: 'inline-block' }}
            />
            <SideLink>Community</SideLink>
          </SideList>
        </Flex>
      </Grid>
      <Flex justifyContent="center" flexDirection="row" alignItems="center" pb={50}>
        {isMobile ? (
          <MenuButton as="a" href="https://cronos.crystl.finance/vaults">
            <span
              style={{
                fontSize: '18px',
                fontStyle: 'normal',
                color: '#FFFFFF',
                lineHeight: '18px',
                letterSpacing: '0.3px',
              }}
            >
              Enter App
            </span>
          </MenuButton>
        ) : (
          ''
        )}
      </Flex>
    </Container>
  )
}

export default PanelBody
