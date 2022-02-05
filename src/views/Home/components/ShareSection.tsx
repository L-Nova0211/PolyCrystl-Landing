import React from 'react'
import styled from 'styled-components'
import { Text, Flex, Image, useMatchBreakpoints, Grid, Button } from '@crystals/uikit'
import LandingContainer from './LandingContainer'
import CronosChain from '../icons/CronosIcon'
import PolygonChain from '../icons/PolygonIcon'

const Share = styled.div`
  background-color: #ffffff;
  overflow: hidden;
`

const LargeText = styled(Text)`
  font-weight: 700;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 44px;
  line-height: 68px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: black;
  text-align: center;
`

const CardText = styled(Text)`
  font-size: 44px;
  font-style: normal;
  line-height: 68px;
  text-align: center;
  font-family: Nexa Bold;
`

const ShareHeader = styled.div`
  justify-content: center;
`

const ShareButton = styled(Button)`
  height: 42px;
  width: 170px;
  border-radius: 7px;
  box-shadow: 2px 2px 2px rgb(14 14 44 / 19%);
  background: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  color: #b07efa;
  font-family: Nexa Bold;
`

const ShareCard = styled.div`
  height: auto;
  width: auto;
  border-radius: 8px;
  background: #b07efa;
  padding: 25px;
  box-shadow: 7px 7px 3px rgb(14 14 44 / 12%);
  z-index: 1;
`

const CardBody = styled.div`
  z-index: 1;
`

const ShareSection: React.FC = () => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  return (
    <Share id="buyCrystl" style={{ height: isMobile ? 'auto' : '856px' }}>
      <LandingContainer>
        <Flex justifyContent="center" alignItems="center">
          <ShareHeader>
            <div data-aos="fade-down" data-aos-duration="900">
              <LargeText pt={isMobile ? '138px' : '111px'} fontFamily="Nexa Bold">
                Ready to be a <span style={{ color: 'rgb( 176, 126, 250 )', fontFamily: 'Nexa Bold' }}>$CRYSTL</span>{' '}
                shareholder?
              </LargeText>
            </div>
          </ShareHeader>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          mt={isMobile ? '22px' : '63px'}
          mb={isMobile ? '128px' : '156px'}
        >
          <CardBody data-aos="fade-up" data-aos-duration="900">
            <ShareCard>
              <Flex justifyContent="center" alignItems="center" pt={isMobile ? '0' : '20px'}>
                <Image src="/images/landing/crystl.svg" alt="crystl" width={185} height={185} />
              </Flex>
              <Flex justifyContent="center" alignItems="center" pt={20} pb={30}>
                <CardText>Buy $CRYSTL</CardText>
              </Flex>
              <Flex justifyContent="center" alignItems="center" pb={isMobile ? '0' : '53px'}>
                <Grid
                  gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'}
                  gridColumnGap={isMobile ? '0' : '26px'}
                  gridRowGap="25px"
                >
                  <ShareButton
                    endIcon={<CronosChain />}
                    onClick={() => {
                      window.open(
                        'https://vvs.finance/swap?outputCurrency=0xCbDE0E17d14F49e10a10302a32d17AE88a7Ecb8B',
                        '_blank',
                      )
                    }}
                  >
                    Cronos
                  </ShareButton>
                  <ShareButton
                    endIcon={<PolygonChain />}
                    onClick={() => {
                      window.open(
                        'https://app.apeswap.finance/swap?outputCurrency=0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64',
                        '_blank',
                      )
                    }}
                  >
                    Polygon
                  </ShareButton>
                </Grid>
              </Flex>
            </ShareCard>
          </CardBody>
        </Flex>
        <Flex justifyContent="left" style={{ opacity: '0.2' }}>
          <Image
            src="/images/landing/bond.svg"
            alt="offer"
            width={isMobile ? 475 : 525}
            height={isMobile ? 475 : 525}
            mt={isMobile ? '-420px' : '-450px'}
            ml="-308px"
            mb={isMobile ? '-30px' : 0}
          />
        </Flex>
      </LandingContainer>
    </Share>
  )
}

export default ShareSection
