import React from "react"
import { View, StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle, useColorScheme, ColorValue } from "react-native"
import { colors, spacing, typography } from "../theme"

type Sizes = keyof typeof $sizeStyles
type Weights = keyof typeof typography.primary
export type Presets = keyof typeof $presets

export interface TextProps extends RNTextProps {
  text?: string
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * One of the different types of text presets.
   */
  preset?: Presets
  /**
   * Text weight modifier.
   */
  weight?: Weights
  /**
   * Text size modifier.
   */
  size?: Sizes
  /**
   * Children components.
   */
  children?: React.ReactNode

  color?: ColorValue

}
export function Text(props: TextProps) {

  const { weight, size, text, children, style: $styleOverride, preset = "default", color,  ...rest } = props
  const $styles = [
    // $rtlStyle,
    $presets[preset],
    $fontWeightStyles[weight],
    $sizeStyles[size],
    {color},
    $styleOverride
  ]

  return (
    <RNText {...rest} style={$styles}>
      {text}
    </RNText>
  )
}

const $sizeStyles = {
  xxxl: { fontSize: 40, lineHeight: 54 } satisfies TextStyle,
  xxl: { fontSize: 28, lineHeight: 44 } satisfies TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } satisfies TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
  md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,
  xxxs: { fontSize: 10, lineHeight: 16 } satisfies TextStyle,
}

const $fontHeaderWeightStyles = Object.entries(typography.headers).reduce((acc, [weight, fontFamily]) => {
  return { ...acc, [weight]: { fontFamily } }
}, {}) as Record<Weights, TextStyle>

const $fontWeightStyles = Object.entries(typography.primary).reduce((acc, [weight, fontFamily]) => {
  return { ...acc, [weight]: { fontFamily } }
}, {}) as Record<Weights, TextStyle>

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.text},
]

const $presets = {
  default: $baseStyle,
  // New Presets
  H1: [$baseStyle, $sizeStyles.xxl, $fontHeaderWeightStyles.bold] as StyleProp<TextStyle>,
  H2: [$baseStyle, $sizeStyles.lg, $fontHeaderWeightStyles.bold] as StyleProp<TextStyle>,
  H3: [$baseStyle, $sizeStyles.sm, $fontHeaderWeightStyles.bold] as StyleProp<TextStyle>,
  H4: [$baseStyle, $sizeStyles.xs, $fontHeaderWeightStyles.medium] as StyleProp<TextStyle>,

  //Subtitles. Referred to as labels in figma: 
  Subtitle1: [$baseStyle, $sizeStyles.sm, $fontHeaderWeightStyles.medium] as StyleProp<TextStyle>,
  Subtitle2: [$baseStyle, $sizeStyles.xs, $fontHeaderWeightStyles.medium] as StyleProp<TextStyle>,
  Subtitle3: [$baseStyle, $sizeStyles.xxs, $fontHeaderWeightStyles.medium] as StyleProp<TextStyle>,
  Subtitle4: [$baseStyle, $sizeStyles.xxxs, $fontHeaderWeightStyles.medium] as StyleProp<TextStyle>,

  //Body
  BodyRegular: [$baseStyle, $sizeStyles.xs, $fontWeightStyles.normal] as StyleProp<TextStyle>,
  BodyLarge: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.normal] as StyleProp<TextStyle>,
  BodySmall: [$baseStyle, $sizeStyles.xxs, $fontWeightStyles.normal] as StyleProp<TextStyle>,
  BodyRegularBold: [$baseStyle, $sizeStyles.xs, $fontWeightStyles.medium] as StyleProp<TextStyle>,
  BodySmallBold: [$baseStyle, $sizeStyles.xxs, $fontWeightStyles.medium] as StyleProp<TextStyle>,

  //buttons
  ButtonRegular: [$baseStyle, $sizeStyles.xs, $fontHeaderWeightStyles.medium] as StyleProp<TextStyle>,
  ButtonSmall: [$baseStyle, $sizeStyles.xxs, $fontHeaderWeightStyles.medium] as StyleProp<TextStyle>,

}

export type TextPresets = keyof typeof $presets

