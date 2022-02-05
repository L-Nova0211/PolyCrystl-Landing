import React from 'react'
import styled from 'styled-components'
import { Text, Image, ArrowForwardIcon, useMatchBreakpoints, Link, Flex } from '@crystals/uikit'

export interface ChooseCrystlProps {
  image?: string
  title?: string
  content?: string
  pLeft?: string
  pBottom?: string
  link?: string
}

const Community = styled.div`
  width: 100%;
`

const CommunityLink = styled(Link)`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  color: #444bd3;
  cursor: pointer;
  font-family: 'Nexa Bold';
`

const LargeText = styled(Text)`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  width: 100%;
  margin-bottom: 1rem;
  color: #000000;
  font-family: 'Nexa Bold';
`
const SmallText = styled(Text)`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  width: 100%;
  color: #000000;
`

const ChooseCrystl: React.FC<ChooseCrystlProps> = ({ image, title, content, pLeft, pBottom, link }) => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  return (
    <Community style={{ paddingLeft: pLeft }}>
      <Flex justifyContent={isMobile ? 'center' : 'left'}>
        <Image src={`/images/landing/${image}.svg`} alt={image} width={54} height={54} mb="16px" />
      </Flex>
      <LargeText textAlign={isMobile ? 'center' : 'left'}>{title}</LargeText>
      <SmallText style={{ paddingBottom: pBottom, fontFamily: 'Nexa Light' }} textAlign={isMobile ? 'center' : 'left'}>
        {content}
      </SmallText>
      <Flex justifyContent={isMobile ? 'center' : 'left'}>
        <CommunityLink
          onClick={() => {
            window.open(`${link}`, '_blank')
          }}
        >
          Learn More
          <ArrowForwardIcon ml="3px" color="#444BD3" />
        </CommunityLink>
      </Flex>
    </Community>
  )
}

export default ChooseCrystl
