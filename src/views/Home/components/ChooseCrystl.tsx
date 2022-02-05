import React from 'react'
import styled from 'styled-components'
import { Text, Image, Flex, Grid, useMatchBreakpoints } from '@crystals/uikit'

export interface ChooseCrystlProps {
  image?: string
  titleFontSize?: string
  titleLineHeight?: string
  contentFontSize?: string
  contentLineHeight?: string
  titleFontWeight?: string
  contentFontWeight?: string
  color?: string
  colorDescription?: string
  fontStyle?: string
  title?: string
  content?: string
}

const Choose = styled.div`
  margin-bottom: 43px;
`

const ChooseCrystl: React.FC<ChooseCrystlProps> = ({
  image,
  titleFontSize = '24px',
  titleLineHeight = '32px',
  contentFontSize = '18px',
  contentLineHeight = '30px',
  titleFontWeight = '600',
  contentFontWeight = '500',
  color = '#2F3F80',
  colorDescription = 'black',
  fontStyle = 'Regular',
  title,
  content,
}) => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  return (
    <Choose>
      <Grid gridTemplateColumns={isMobile ? '1fr' : '0.4fr 1.6fr'} gridColumnGap={isMobile ? '0' : '10px'}>
        <Flex justifyContent="center" alignItems="center">
          <Image src={`/images/landing/${image}.svg`} alt={image} width={85} height={110} />
        </Flex>
        <div>
          <Text
            fontSize={titleFontSize}
            style={{ lineHeight: titleLineHeight, textAlign: isMobile ? 'center' : 'left', fontStyle }}
            color={color}
            fontWeight={titleFontWeight}
            mb="12px"
            fontFamily="Nexa Bold"
          >
            {title}
          </Text>
          <Text
            fontSize={contentFontSize}
            style={{ lineHeight: contentLineHeight, textAlign: isMobile ? 'center' : 'left', fontStyle }}
            color={colorDescription}
            fontWeight={contentFontWeight}
            fontFamily="Nexa Light"
          >
            {content}
          </Text>
        </div>
      </Grid>
    </Choose>
  )
}

export default ChooseCrystl
