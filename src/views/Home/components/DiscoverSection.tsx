import React from 'react'
import styled from 'styled-components'
import { useMatchBreakpoints, Box, Button, ButtonMenuItem, Heading, Text } from '@crystals/uikit'
import Container from '../../../components/layout/Container'
import Banner from './Banner'

const HeaderContainer = styled.div<{ isMobile: boolean }>`
  justify-content: center;
  text-align: center;
  display: flex;
  font-size: 18.5px;
  height: ${({ isMobile }) => (isMobile ? '100%' : 'auto')};
  min-height: 100.5vh;
  width: 100%;
  background: linear-gradient(180.04deg, #f8ceec 31.63%, rgba(168, 139, 235, 0.74) 99.97%);
`

const BannerContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: ${({ isMobile }) => (isMobile ? '5px' : '45px')};
  padding-left: ${({ isMobile }) => (isMobile ? '0px' : '45px')};
  padding-top: ${({ isMobile }) => (isMobile ? '0px' : '8px')};
  @media screen and (max-width: 350px) {
    width: 300px;
    padding-right: 0px;
  }
`

const CardContainer = styled.div<{ isMobile: boolean }>`
  width: 100%;
  text-align: center;
  margin-top: ${({ isMobile }) => (isMobile ? '1rem' : '3.5rem')};
  overflow: auto;
  display: inline-flex;
  margin-bottom: ${({ isMobile }) => (isMobile ? '20px' : '30px')};
  padding-right: ${({ isMobile }) => (isMobile ? '0px' : '45px')};
  padding-left: ${({ isMobile }) => (isMobile ? '0px' : '45px')};
`

const InfoCard = styled(Box)`
  width: 16.66%;
  min-width: 161px;
  font-family: Nexa Bold !important;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
  background: white;
  border-radius: 16px;
  padding: 1rem;
  margin: 0.5rem 0.5rem;
  box-shadow: 2px 2px 2px rgb(14 14 44 / 19%);
`

const GradientButton = styled(Button)`
  background: #b07efa;
  cursor: pointer;
  border-radius: 10px;
  font-size: 17px;
  box-shadow: 1px 1px 6px 1px rgb(14 14 44 / 19%);
`

const DiscoverSection: React.FC = () => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  const CronosIcon: any = (
    <img src={`${process.env.PUBLIC_URL}/images/tokens/wcronos.svg`} alt="cronosicon" width="20px" />
  )
  const PolymaticIcon: any = (
    <img src={`${process.env.PUBLIC_URL}/images/tokens/wwmatic.svg`} alt="polymaticicon" width="20px" />
  )
  const infos = [
    {
      header: '$12.5M',
      subHeader: 'Liquidity staked across all chains',
      assetImage: `${process.env.PUBLIC_URL}/images/assets/Asset1.svg`,
    },
    {
      header: '$1.2M',
      subHeader: 'Profit distributed to $Crystl holders',
      assetImage: `${process.env.PUBLIC_URL}/images/assets/Asset2.svg`,
    },
    {
      header: '71000',
      subHeader: 'Active users',
      assetImage: `${process.env.PUBLIC_URL}/images/assets/Asset4.svg`,
    },
    {
      header: '42000',
      subHeader: 'Community members',
      assetImage: `${process.env.PUBLIC_URL}/images/assets/Asset5.svg`,
    },
    {
      header: '120+',
      subHeader: 'Vaults and Pools',
      assetImage: `${process.env.PUBLIC_URL}/images/assets/Asset3.svg`,
    },
    {
      header: '50+',
      subHeader: 'Partners in the Crystl Ecosystem',
      assetImage: `${process.env.PUBLIC_URL}/images/assets/Asset6.svg`,
    },
  ]

  return (
    <HeaderContainer id="top" isMobile={isMobile}>
      <Container style={{ width: '100%', marginTop: '112px' }}>
        <BannerContainer isMobile={isMobile}>
          <Banner />
        </BannerContainer>
        <div style={{ marginTop: isMobile ? '0rem' : '2.4rem', marginBottom: isMobile ? '14px' : '0px' }}>
          <ButtonMenuItem as="a" target="_blank" href="https://cronos.crystl.finance/" marginY=".5rem" paddingX="0">
            <GradientButton endIcon={CronosIcon}>
              <p style={{ padding: '.5rem' }}>Earn on Cronos</p>
            </GradientButton>
          </ButtonMenuItem>
          <ButtonMenuItem as="a" target="_blank" href="https://polygon.crystl.finance/" marginY=".5rem">
            <GradientButton endIcon={PolymaticIcon}>
              <p style={{ padding: '.5rem' }}>Earn on Polygon</p>
            </GradientButton>
          </ButtonMenuItem>
        </div>
        <CardContainer isMobile={isMobile}>
          {infos.map((info, index) => (
            <InfoCard key={`index${index + 1}`} style={{ marginBottom: isMobile ? '20px' : '' }} id="hvr-float">
              <Heading color="black" scale="lg" fontFamily="Nexa Bold">
                {info.header} <img src={info.assetImage} alt="assetImage" width="22px" />
              </Heading>
              <hr style={{ height: '2.1px', color: 'red', backgroundColor: 'rgba(0, 0, 0, 0.05)', border: 'none' }} />
              <Text
                marginTop="1rem"
                fontSize="16px"
                fontWeight="normal"
                textAlign="center"
                fontFamily="Nexa Light"
                style={{ color: 'black' }}
              >
                {info.subHeader}
              </Text>
            </InfoCard>
          ))}
        </CardContainer>
      </Container>
    </HeaderContainer>
  )
}

export default DiscoverSection
