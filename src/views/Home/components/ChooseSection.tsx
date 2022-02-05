import React from 'react'
import styled from 'styled-components'
import { Text, Flex, useMatchBreakpoints, Grid, Image } from '@crystals/uikit'
import ChooseCrystl from './ChooseCrystl'
import LandingContainer from './LandingContainer'

const LargeText = styled(Text)`
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 68px;
  color: #2f3f80;
  text-align: center;
`

const Choose = styled.div`
  background: linear-gradient(180deg, #f8ceec 0%, rgba(168, 139, 235, 0.74) 100%);
  height: auto;
`

const ChooseImage = styled.div`
  justify-content: right;
  animation: floating 3.4s infinite normal ease;
  @keyframes floating {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(0px, 24px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`

const ChooseSection: React.FC = () => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  return (
    <Choose id="aboutUs">
      <LandingContainer>
        <Flex justifyContent="center" alignItems="center">
          <div data-aos="fade-up" data-aos-duration="800">
            <LargeText style={{ margin: isMobile ? '128px 0 62px 0' : '94px 0 64px 0' }} fontFamily="Nexa Bold">
              Why Choose Crystl?
            </LargeText>
          </div>
        </Flex>
        <Grid gridTemplateColumns={isMobile ? '1fr' : '1.3fr 0.7fr'} gridColumnGap={isMobile ? '0' : '149px'}>
          <Flex justifyContent="left">
            <Grid gridTemplateColumns="1fr" gridRowGap={isMobile ? '53px' : '38px'} pb={isMobile ? 122 : 188}>
              <div data-aos="fade-right" data-aos-duration="800">
                <ChooseCrystl
                  image="innovation"
                  title="INNOVATION"
                  content="Crystl Finance prioritizes creating original features for Passive Income Maximization & building strong partnerships with leading projects to build a thriving ecosystem."
                />
              </div>
              <div data-aos="fade-left" data-aos-duration="800">
                <ChooseCrystl
                  image="limitedSupplyCap"
                  title="LIMITED SUPPLY CAP"
                  content="CRYSTL has a limited supply of 12.5M tokens making CRYSTL a non-inflationary, scarce, & revenue generating asset designed to appreciate overtime."
                />
              </div>
              <div data-aos="fade-right" data-aos-duration="800">
                <ChooseCrystl
                  image="governance"
                  title="GOVERNANCE"
                  content="CRYSTL holders have the power to directly vote on the future decisions of the protocol."
                />
              </div>
            </Grid>
          </Flex>
          <ChooseImage style={{ display: isMobile ? 'none' : 'block' }}>
            <div data-aos="fade-left" data-aos-duration="800">
              <Image src="/images/landing/choose.svg" alt="choose" width={450} height={1000} mt="-165px" />
            </div>
          </ChooseImage>
        </Grid>
      </LandingContainer>
    </Choose>
  )
}

export default ChooseSection
