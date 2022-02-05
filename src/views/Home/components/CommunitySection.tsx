import React from 'react'
import styled from 'styled-components'
import { Text, useMatchBreakpoints, Grid, Image } from '@crystals/uikit'
import Twitter from '../icons/Twitter'
import Discord from '../icons/Discord'
import Reddit from '../icons/Reddit'
import Github from '../icons/Github'
import CommunityCrystl from './CommunityCrystl'
import LandingContainer from './LandingContainer'

const Community = styled.div`
  background: linear-gradient(90deg, rgb(183, 159, 239) 0%, rgb(174, 204, 244) 100%);
  @media screen and (min-width: 1200px) and (min-height: 865px) {
    height: 73vh;
  }
  @media screen and (max-width: 1200px) {
    height: auto;
  }
`

const Description = styled.div`
  width: 100%;
`

const SocialButton = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`
const LargeText = styled(Text)`
  font-size: 41px;
  font-style: normal;
  font-weight: 700;
  line-height: 68px;
  letter-spacing: 0em;
  width: 100%;
  margin-bottom: 9px;
  color: #27262c;
`
const SmallText = styled(Text)`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0px;
  width: 100%;
  margin-bottom: 23px;
  color: #27262c;
`

const CommunityBody = styled.div`
  background-color: #ffffff;
`

const CommunitySection: React.FC = () => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  return (
    <Community id="community" style={{ padding: isMobile ? '96px 0' : '96px 0' }}>
      <CommunityBody>
        <LandingContainer>
          <Grid
            gridTemplateColumns={isMobile ? '1fr' : '1.1fr 1fr 0.9fr'}
            gridColumnGap={isMobile ? '0' : '30px'}
            gridRowGap={isMobile ? '45px' : '0'}
            pt={isMobile ? '77px' : '96px'}
            pb={isMobile ? '77px' : '96px'}
          >
            <div data-aos="fade-up" data-aos-duration="800">
              <Description>
                <LargeText style={{ textAlign: isMobile ? 'center' : 'left', fontFamily: 'Nexa Bold' }}>
                  Join The Crystl Crew
                </LargeText>
                <SmallText style={{ textAlign: isMobile ? 'center' : 'justify', fontFamily: 'Nexa Light' }}>
                  You don&apos;t have to invest alone! Everyone is welcome to join our vibrant Crystl Crew! You can ask
                  questions, talk about strategies, and be the first to hear about any upcoming news by joining our
                  community.
                </SmallText>
                <SocialButton style={{ justifyContent: isMobile ? 'center' : 'left' }}>
                  <Twitter
                    onClick={() => {
                      window.open('https://twitter.com/CrystlFinance', '_blank')
                    }}
                    style={{ width: '60px', cursor: 'pointer', marginBottom: '20px' }}
                  />
                  <Image
                    src="/images/landing/medium.svg"
                    alt="choose"
                    width={37}
                    height={37}
                    style={{ cursor: 'pointer' }}
                    mt="2px"
                    mr="20px"
                    onClick={() => {
                      window.open('https://crystlfinance.medium.com/', '_blank')
                    }}
                  />
                  <Github
                    onClick={() => {
                      window.open('https://github.com/polycrystal', '_blank')
                    }}
                    style={{ width: '60px', cursor: 'pointer', marginBottom: '20px' }}
                  />
                  <Image
                    src="/images/landing/tg.svg"
                    alt="choose"
                    width={40}
                    height={40}
                    style={{ cursor: 'pointer' }}
                    mt="2px"
                    mr="20px"
                    onClick={() => {
                      window.open('https://t.me/CrystlFinance', '_blank')
                    }}
                  />
                  <Discord
                    onClick={() => {
                      window.open('https://discord.com/invite/ZD8WW49ZbB', '_blank')
                    }}
                    style={{ width: '60px', cursor: 'pointer', marginBottom: '20px' }}
                  />
                  <Reddit
                    onClick={() => {
                      window.open('https://www.reddit.com/r/crystlfinance/', '_blank')
                    }}
                    style={{ width: '60px', cursor: 'pointer', marginBottom: '20px' }}
                  />
                  <Image
                    src="/images/landing/gitbook.svg"
                    alt="choose"
                    width={45}
                    height={45}
                    style={{ cursor: 'pointer' }}
                    mr="20px"
                    onClick={() => {
                      window.open('https://polycrystal.gitbook.io/polycrystal-finance/', '_blank')
                    }}
                  />
                </SocialButton>
              </Description>
            </div>
            <div data-aos="zoom-in" data-aos-duration="800">
              <CommunityCrystl
                image="community_1"
                title="Want More Information on Crystl Finance?"
                content="Make sure to check out our official documentation."
                pLeft={isMobile ? '0' : '120px'}
                pBottom={isMobile ? '14' : '56px'}
                link="https://polycrystal.gitbook.io/polycrystal-finance/"
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="800">
              <CommunityCrystl
                image="community_2"
                title="Want More Information on DeFi & Crypto?"
                content="Then our Crystl Clear Series is perfect for you! See below to learn all about the wonderful world of Decentralized Finance."
                pLeft={isMobile ? '0' : '10px'}
                pBottom={isMobile ? '14' : '56px'}
                link="https://polycrystal.gitbook.io/polycrystal-finance/crystal-clear-education/welcome-to-crystl-clear-education"
              />
            </div>
          </Grid>
        </LandingContainer>
      </CommunityBody>
    </Community>
  )
}

export default CommunitySection
