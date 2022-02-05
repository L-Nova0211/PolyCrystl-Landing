import React from 'react'
import styled from 'styled-components'
import { Text, Button, Flex, useMatchBreakpoints, Link } from '@crystals/uikit'

export interface ChooseCrystlProps {
  titleFontSize?: string
  titleLineHeight?: string
  titleFontWeight?: string
  contentFontSize?: string
  contentLineHeight?: string
  contentFontWeight?: string
  headerFontSize?: string
  headerLineHeight?: string
  headerFontWeight?: string
  headerColor?: string
  color?: string
  paddingBottom?: string
  title?: string
  header?: string
  content?: string
  link?: string
}

const Offer = styled.div`
  background: #f3f3f3;
  border-radius: 8px;
  width: auto;
  padding: 78px 23px 65px 34px;
  z-index: 1;
  height: 376px;
  box-shadow: rgb(14 14 44 / 35%) 8px 8px 10px;
  @media screen and (max-width: 1200px) {
    height: auto;
  }
`

const OfferButton = styled(Button)`
  height: 41px;
  width: 117px;
  border-radius: 7px;
  border: 1px solid #b07efa;
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
  justify-content: center;
  color: #b07efa;
  cursor: not-allowed;
  font-weight: inherit;
  margin-top: 35px;
  text-decoration: none !important;
`

const TitleText = styled(Text)`
  @media screen and (max-width: 1196px) {
    height: 76px;
  }
  @media screen and (max-width: 968px) {
    height: auto;
  }
`

const ContentText = styled(Text)`
  font-family: Nexa Light;
  @media screen and (max-width: 1216px) {
    height: 97px;
  }
  @media screen and (max-width: 968px) {
    height: auto;
  }
`

const CrystlOfferSecond: React.FC<ChooseCrystlProps> = ({
  titleFontSize = '22px',
  titleLineHeight = '38px',
  titleFontWeight = '600',
  contentFontSize = '14px',
  contentLineHeight = '24px',
  contentFontWeight = '400',
  headerFontSize = '16px',
  headerLineHeight = '38px',
  headerFontWeight = '700',
  headerColor = '#9F97F7',
  color = '#000000',
  paddingBottom,
  title,
  header,
  content,
}) => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  return (
    <Offer>
      <TitleText
        fontSize={titleFontSize}
        style={{ lineHeight: titleLineHeight }}
        color={color}
        fontWeight={titleFontWeight}
        fontFamily="Nexa Bold"
      >
        {title}
      </TitleText>
      <Text
        fontSize={headerFontSize}
        style={{ lineHeight: headerLineHeight }}
        color={headerColor}
        fontWeight={headerFontWeight}
        mt={isMobile ? '10px' : '-5px'}
      >
        {header}
      </Text>
      <ContentText
        fontSize={contentFontSize}
        style={{ lineHeight: contentLineHeight, textAlign: 'justify' }}
        color={color}
        fontWeight={contentFontWeight}
        pb={paddingBottom}
      >
        {content}
      </ContentText>
      <Flex justifyContent="left" alignItems="center">
        <OfferButton as={Link} variant="secondary">
          Coming Soon
        </OfferButton>
      </Flex>
    </Offer>
  )
}

export default CrystlOfferSecond
