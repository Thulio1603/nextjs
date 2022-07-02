import { gray } from './gray';
import { yellow } from './yellow';
import { red } from './red';

type Colors = 'yellow' | 'neutral'

export const primaryColor: Colors = 'yellow'

export const defaultColors = {
  // generic colors
  white: '#ffffff',
  black: '#000000',

  hiContrast: '$white',
  hiContrastText: '$black',
  hiContrastHover: '$gray800',
  loContrast: '$gray800',
  loContrastText: '$white',
  loContrastHover: '$gray400',
  danger: '$red200',
  dangerText: '$white',
  dangerHover: '$red300',
  
  background: '$gray500',
  foreground: '$white',
  backgroundContrast: '$accents0',

  //semantic colors
  ...yellow,
  ...gray,
  ...red,

  // brand colors
  primaryLight: `$${primaryColor}200`,
  primaryLightHover: `$${primaryColor}300`,
  primaryLightActive: `$${primaryColor}400`,
  primaryLightContrast: `$white`,
  primary: `$${primaryColor}600`,
  primaryBorder: `$${primaryColor}500`,
  primaryBorderHover: `$${primaryColor}600`,
  primarySolidHover: `$${primaryColor}500`,
  primarySolidContrast: `$white`,
  primaryShadow: `$${primaryColor}500`,

  secondaryLight: '$purple200',
  secondaryLightHover: '$purple300',
  secondaryLightActive: '$purple400',
  secondaryLightContrast: '$purple600',
  secondary: '$purple600',
  secondaryBorder: '$purple500',
  secondaryBorderHover: '$purple600',
  secondarySolidHover: '$purple700',
  secondarySolidContrast: '$white',
  secondaryShadow: '$purple500',

  successLight: '$green200',
  successLightHover: '$green300',
  successLightActive: '$green400',
  successLightContrast: '$green700',
  success: '$green600',
  successBorder: '$green500',
  successBorderHover: '$green600',
  successSolidHover: '$green700',
  successSolidContrast: '$white',
  successShadow: '$green500',

  warningLight: '$yellow200',
  warningLightHover: '$yellow300',
  warningLightActive: '$yellow400',
  warningLightContrast: '$yellow700',
  warning: '$yellow600',
  warningBorder: '$yellow500',
  warningBorderHover: '$yellow600',
  warningSolidHover: '$yellow700',
  warningSolidContrast: '$white',
  warningShadow: '$yellow500',

  errorLight: '$red200',
  errorLightHover: '$red300',
  errorLightActive: '$red400',
  errorLightContrast: '$red600',
  error: '$red600',
  errorBorder: '$red500',
  errorBorderHover: '$red600',
  errorSolidHover: '$red700',
  errorSolidContrast: '$white',
  errorShadow: '$red500',

  neutralLight: '$gray200',
  neutralLightHover: '$gray300',
  neutralLightActive: '$gray400',
  neutralLightContrast: '$gray600',
  neutral: '$gray600',
  neutralBorder: '$gray500',
  neutralBorderHover: '$gray600',
  neutralSolidHover: '$gray700',
  neutralSolidContrast: '$white',
  neutralShadow: '$gray500',

  gradient:
    'linear-gradient(112deg, $cyan600 -63.59%, $pink600 -20.3%, $blue600 70.46%)',

  // accents
  accents0: '$gray50',
  accents1: '$gray100',
  accents2: '$gray200',
  accents3: '$gray300',
  accents4: '$gray400',
  accents5: '$gray500',
  accents6: '$gray600',
  accents7: '$gray700',
  accents8: '$gray800',
  accents9: '$gray900',

  // misc
  border: '$gray300',

  text: '$gray900',
  link: '$blue700',
  codeLight: '$cyan50',
  code: '$cyan600',
  selection: '$pink800'
};