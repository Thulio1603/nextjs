import { defaultColors } from './colors/default';

export const baseTheme = {
  colors: {

    colorText: '#fff',

    green: '#4b8b3b',
    red: '#ff0000',
    yellow: '#ffeb00',
    blue: '#004eff',

    ...defaultColors,
  },
  fonts: {
    light: '',
    regular: '',
    bold: '',
  },
  sizes:{
    1: '2px',
    2: '4px',
    4: '8px',
    5: '10px',
    6: '12px',
    7: '14px',
    8: '16px',
    9: '20px',
    10: '24px',
    12: '32px',
    13: '40px',
    14: '48px',
    15: '56px',
    16: '64px',
    17: '72px',
    18: '80px',
    
    maxWindowSize: '1160px',
    maxWindowProfile: '1024px',
    buttonMinWidth: '173px',
    inputMinWidth: '173px',
    desktopMenuHeight: '$17',
    mobileMenuHeight: '$17',

    portraitCover: '201px',
    landscapeCover: '252px',

    dropDownWidth: '250px',
    dropDownItemHeight: '$13',
    searchFocusWidth: '240px',

    avatarLarge: '140px',

    widthProfile: '220px',

    widthPageProfile: '550px',
  },
  space: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '40px',
    xxxl: '48px',
    giant: '64px',
    huge: '80px',
    base: '$md',

    stackDefault: '$xl',
    outerSpaceDesktop: '$xxxl',
    outerSpaceMobile: '$xl',

    dropDownPadding: '$xs',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xl2: '1.5rem',
    xl3: '1.875rem',
    xl4: '2.25rem',
    xl5: '3rem',
    xl6: '3.75rem',
    xl7: '4.5rem',
    xl8: '6rem',
    xl9: '8rem'
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  letterSpacings: {
    tighter: '-0.05rem',
    tight: '-0.025rem',
    normal: '-0.125rem',
    wide: '0.025rem',
    wider: '0.05rem',
    widest: '0.1rem'
  },
  lineHeights: {
    xs: 1,
    sm: 1.25,
    base: 1.5,
    md: 1.5,
    lg: 1.75,
    xl: 1.75,
    xl2: 2,
    xl3: 2.25,
    xl4: 2.5,
    xl5: 1,
    xl6: 1,
    xl7: 1,
    xl8: 1,
    xl9: 1
  },
  borderWidths: {
    1: '1px',
    2: '2px',
    3: '4px',
    4: '8px',
    hairline: '$1',
    thin: '$2',
    thick: '$3',
    heavy: '$4'
  },
  radii: {
    none: '0',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    pill: '500px',
    circular: '50%',
    base: '$sm',
  },
  zIndices: {
    high: 40,
    highest: 100
  },
  transitions: {
    basic: 'all cubic-bezier(0.4, 0, 0.2, 1) 150ms',
    button: 'all ease-in 300ms'
  }
}