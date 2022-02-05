import React from 'react'
import styled from 'styled-components'
import DiscoverSection from './components/DiscoverSection'
import ChooseSection from './components/ChooseSection'
import CommunitySection from './components/CommunitySection'
import OfferSection from './components/OfferSection'
import ShareSection from './components/ShareSection'

const LandingContainer = styled.div`
  margin-top: -4px;
  overflow-x: hidden;
`

const Home: React.FC = () => {
  return (
    <LandingContainer>
      <DiscoverSection />
      <OfferSection />
      <ChooseSection />
      <ShareSection />
      <CommunitySection />
    </LandingContainer>
  )
}

export default Home
