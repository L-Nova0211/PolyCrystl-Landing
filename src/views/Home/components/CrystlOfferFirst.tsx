import React from 'react'
import styled from 'styled-components'
import { Text, Button, Flex, useMatchBreakpoints, Grid } from '@crystals/uikit'

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

const OfferButton = styled(Button)<{ marginTop: string }>`
  border-radius: 7px;
  height: 42px;
  width: auto;
  font-size: 14px;
  background: #b07efa;
  padding: 11px 5px;
  font-weight: inherit;
  box-shadow: 1px 1px 5px 1px rgb(14 14 44 / 19%);
  margin-top: ${({ marginTop }) => marginTop};
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

const CrystlOfferFirst: React.FC<ChooseCrystlProps> = ({
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
  const CronosIcon: any = (
    <img src="/images/tokens/wcronos.svg" alt="cronosicon" width="18px" style={{ paddingLeft: '3px' }} />
  )
  const PolymaticIcon: any = (
    <img src="/images/tokens/wwmatic.svg" alt="polymaticicon" width="20px" style={{ paddingLeft: '3px' }} />
  )
  return (
    <Offer>
      <Text
        fontSize={titleFontSize}
        style={{ lineHeight: titleLineHeight }}
        color={color}
        fontWeight={titleFontWeight}
        fontFamily="Nexa Bold"
      >
        {title}
      </Text>
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
        <Grid
          gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'}
          gridColumnGap={isMobile ? '0' : '15px'}
          gridRowGap="14px"
        >
          <OfferButton
            endIcon={PolymaticIcon}
            onClick={() => {
              window.open('https://polygon.crystl.finance/vaults-v2', '_blank')
            }}
            marginTop={isMobile ? '35px' : '35px'}
          >
            Deposit on Polygon
          </OfferButton>
          <OfferButton
            endIcon={CronosIcon}
            onClick={() => {
              window.open('https://cronos.crystl.finance/vaults', '_blank')
            }}
            marginTop={isMobile ? '0px' : '35px'}
          >
            Deposit on Cronos
          </OfferButton>
        </Grid>
      </Flex>
    </Offer>
  )
}

export default CrystlOfferFirst
