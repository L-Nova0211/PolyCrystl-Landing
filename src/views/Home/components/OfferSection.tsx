import React from 'react'
import styled from 'styled-components'
import { Text, Flex, Image, useMatchBreakpoints, Grid } from '@crystals/uikit'
import CrystlOfferFirst from './CrystlOfferFirst'
import CrystlOfferSecond from './CrystlOfferSecond'
import LandingContainer from './LandingContainer'

const OfferContainer = styled(LandingContainer)`
  div {
    z-index: 1;
  }
`

const LargeText = styled(Text)`
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 68px;
  color: black;
`

const SmallText = styled(Text)`
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  width: 100%;
  margin-top: 11px;
  margin-bottom: 68px;
  color: black;
  font-family: Nexa Light;
`

const Offer = styled.div`
  background: white;
  overflow: hidden;
  height: auto;
`

const OfferHeader = styled.div`
  text-align: center;
`

const OfferSection: React.FC = () => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  return (
    <Offer id="features">
      <OfferContainer>
        <Flex justifyContent="center" alignItems="center">
          <OfferHeader style={{ width: isMobile ? '100%' : '70%' }}>
            <div data-aos="fade-up" data-aos-duration="800">
              <LargeText mt={isMobile ? '56px' : '95px'} fontFamily="Nexa Bold">
                What Does <span style={{ color: '#9F97F7', fontWeight: 'bold' }}>Crystl</span> Offer?
              </LargeText>
            </div>
          </OfferHeader>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <OfferHeader style={{ width: isMobile ? '90%' : '70%' }}>
            <div data-aos="fade-up" data-aos-duration="800">
              <SmallText>
                Make use of our decentralized smart contracts to put your capital and earn, <br />a maximized income 24
                hours a day!
              </SmallText>
            </div>
          </OfferHeader>
        </Flex>
        <Flex justifyContent="space-between" style={{ opacity: '0.2' }}>
          <span />
          <Image
            src="/images/landing/mineCart.svg"
            alt="offer"
            width={291}
            height={291}
            mb="-250px"
            mt="-320px"
            mr="-60px"
            style={{ transform: 'rotate(14.73deg)' }}
          />
        </Flex>
        <Grid
          gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr 1fr'}
          gridColumnGap={isMobile ? '0' : '41px'}
          gridRowGap={isMobile ? '40px' : '0'}
        >
          <div data-aos="fade-right" data-aos-duration="800">
            <CrystlOfferFirst
              title="Maximize Your Passive Income"
              header="CRYSTL VAULTS"
              content="Holding idle crypto is a thing of the past. Deposit crypto in a Vault today and enjoy maximized passive income on your capital while you sleep!"
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="800">
            <CrystlOfferSecond
              title="Start Earning Dividends"
              header="CRYSTL REVENUE SHARING"
              content="Provide CRYSTL Liquidity to join the Mining Guild & earn consistent Dividends from Crystl Finance’s Revenue on multiple blockchains."
            />
          </div>
          <div data-aos="fade-right" data-aos-duration="800">
            <CrystlOfferSecond
              title="Buy Discounted CRYSTL"
              header="CRYSTL BONDS"
              content="Exchange CRYSTL liquidity provider (LP) tokens directly with the protocol to receive CRYSTL for lower than market price."
            />
          </div>
        </Grid>
        <Flex justifyContent="left" style={{ opacity: '0.2' }}>
          <Image
            src="/images/landing/spike.svg"
            alt="offer"
            width={isMobile ? 350 : 450}
            height={isMobile ? 350 : 450}
            style={{ transform: 'rotate(25.49deg)' }}
            mt={isMobile ? '-120px' : '-150px'}
            ml={isMobile ? '-150px' : '-220px'}
            mb={isMobile ? '-80px' : '-120px'}
          />
        </Flex>
      </OfferContainer>
    </Offer>
  )
}

export default OfferSection
