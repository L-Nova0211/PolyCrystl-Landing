import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useMatchBreakpoints } from '@crystals/uikit'
import { useFetchHeadersHome } from 'state/fetchstrapi'

const Header = styled.div<{ image: string }>`
  position: relative;
  width: 100%;
  height: 350px;
  padding-top: 36px;
  padding-bottom: 15px;
  margin-bottom: 30px;
  background: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  margin-top: 10px;
  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`
const CurrentHeaderHolder = styled.div`
  display: flex;
  width: auto;
  height: 22px;
  margin-top: 235px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 11px;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
`

const HeaderBubble = styled.div<{ live?: boolean }>`
  height: 14px;
  width: 14px;
  border-radius: 10px;
  margin-left: 7.5px;
  margin-right: 7.5px;
  cursor: pointer;
  z-index: 1;
  background: ${(props) => (props.live ? 'white' : 'rgba(255, 255, 255, 0.38)')};
`

const LinkArea = styled.a`
  position: absolute;
  height: 350px;
  width: 98%;
  top: 0;
  align-self: center;
  cursor: pointer;
  z-index: 1;
`
const SLIDETIME = 6000

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const chainId = 137
  const { headersData } = useFetchHeadersHome()
  const filteredBanners = headersData.filter(() => true)
  const { isXl, isLg, isMd } = useMatchBreakpoints()
  const timeoutRef = useRef(null)

  const getImageSize = (image: any) => {
    if (isXl) return image?.desktop
    if (isMd || isLg) return image?.mobile
    return image?.mobile
  }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }
  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () => setActiveIndex((prevIndex) => (prevIndex === filteredBanners.length - 1 ? 0 : prevIndex + 1)),
      SLIDETIME,
    )
    return () => {
      resetTimeout()
    }
  }, [activeIndex, filteredBanners])

  useEffect(() => {
    setActiveIndex(0)
  }, [chainId])

  return (
    <>
      <Header image={getImageSize(filteredBanners[activeIndex])}>
        {filteredBanners[activeIndex] && filteredBanners[activeIndex].link === 'ape' ? (
          <LinkArea
            href="https://polygon.crystl.finance/vaults-v2/apeswap/"
            target="_blank"
            rel="noopener noreferrer"
          />
        ) : (
          ''
        )}
        <CurrentHeaderHolder>
          {[...Array(filteredBanners?.length)].map((e, i) => (
            <HeaderBubble live={i === activeIndex} onClick={() => setActiveIndex(i)} key={filteredBanners[i]?.link} />
          ))}
        </CurrentHeaderHolder>
      </Header>
    </>
  )
}

export default Banner
