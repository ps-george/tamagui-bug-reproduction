import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Rect width="4" height="4" x="2" y="9" stroke={color} />
      <Rect width="4" height="10" x="10" y="9" stroke={color} />
      <Path
        d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"
        stroke={color}
      />
      <_Circle cx="8" cy="19" r="2" stroke={color} />
      <Path d="M10 19h12v-2" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Caravan'

export const Caravan = memo<IconProps>(themed(Icon))
