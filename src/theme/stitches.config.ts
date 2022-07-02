import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import { baseTheme } from './theme';
import 'react-multi-carousel/lib/styles.css'

const { styled, getCssText, globalCss, css, config, theme, keyframes } = createStitches({
  theme: baseTheme,
  media: {
    mobile: '(max-width: 641px)',
    sm: '(min-width: 641px)',
    md: '(min-width: 961px)',
    lg: '(min-width: 1025px)',
    xl: '(min-width: 1281px)',
    ultra: '(min-width: 1681px)',
  },
});

export const defaults = {
  borderRadius: '$sm',
  border: {
    hairline: '$borderWidths$hairline solid'
  },
  opacity: {
    preHover: 0.7,
    hover: 1
  },
  spacing:{
    squish: {
      quarck: '$quarck $nano',
      nano: '$nano $xxxs',
      xs: '$xxxs $xxs',
      sm: '$xxxs $xs'
    },
    left: {
      sm: {
        marginLeft: '-$sm',
        '& > div': {
          marginLeft: '$sm'
        }
      }
    },
    right: {
      sm: {
        marginLeft: '-$sm',
        '& > div': {
          marginLeft: '$sm'
        }
      }
    }
  },
  flex: {
    spaceBetween: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    centerBetween: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    center:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    right:{
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'center'
    },
    left:{
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center'
    },
    bottom:{
      display: 'flex',
      alignItems: 'flex-end'
    },
    end:{
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center'
    }
  },
  sizes:{
    coverWidth: 201
  },
  variants:{
    margin: {
      left: {
        sm: {
          marginLeft: '-$sm',
          '& > div': {
            marginLeft: '$sm'
          }
        }
      },
    },
    withGradient: {
      bottom: {
        '&::after':{
          content: '',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.70) 50%, rgba(0,0,0,0.45) 95%)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transition: '$basic'
        }
      },
      left: {
        '&::after':{
          content: '',
          background: 'linear-gradient(90deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0) 95%)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transition: '$basic'
        }
      }
    }
  },
  DESKTOP: {
    GUTTER: '$sizes$12',
    LATERAL_PADDING: '$spaces$xl',
    MENU_HEIGHT: '$sizes$18',
  },
  MOBILE: {
    GUTTER: '$sizes$12',
    LATERAL_PADDING: '$spaces$md',
    MENU_HEIGHT: '$sizes$18',
  }
}


/**
 * GLOBAL
 */
globalCss({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    textRendering: 'geometricPrecision',
    WebkitTapHighlightColor: 'transparent'
  },
  html: {
    fontFamily: '$regular',
    fontSize: '$base',

  },
  body: {
    margin: 0,
    padding: 0,
    minHeight: '100%',
    position: 'relative',
    overflowX: 'hidden',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
    fontSize: '$base',
    lineHeight: '$md',
    fontFamily: '$sans'
  },
  'html, body': {
    backgroundColor: '$background',
    color: '$text'
  },
  'p, small': {
    color: 'inherit',
    // letterSpacing: '$normal',
    fontWeight: '$normal',
    fontFamily: '$sans',
    margin: 0,
  },
  p: {
    fontSize: '$base',
    lineHeight: '$sm'
  },
  small: {
    margin: 0,
    lineHeight: '$xs',
    fontSize: '$xs'
  },
  b: {
    fontWeight: '$semibold'
  },
  span: {
    fontSize: 'inherit',
    color: 'inherit',
    fontWeight: 'inherit'
  },
  img: {
    maxWidth: '100%'
  },
  a: {
    cursor: 'pointer',
    fontSize: 'inherit',
    WebkitTouchCallout: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    color: '$link',
    textDecoration: 'none'
  },
  'a:hover': {
    textDecoration: 'none'
  },
  'ul,ol': {
    padding: 0,
    listStyleType: 'none',
    margin: '$sm $sm $sm $lg',
    color: '$foreground'
  },
  ol: {
    listStyleType: 'decimal'
  },
  li: {
    marginBottom: '$5',
    fontSize: '$base',
    lineHeight: '$lg'
  },
  'h1,h2,h3,h4,h5,h6': {
    color: 'inherit',
    margin: '0 0 $5 0'
  },
  h1: {
    letterSpacing: '$normal',
    fontSize: '$xl3',
    lineHeight: '$xs',
    fontWeight: '$bold',
    '@md':{
      fontSize: '3vw',
      lineHeight: '$xs',
    },
    '@ultra':{
      fontSize: '2vw',
      lineHeight: '$xs',
    }
  },
  h2: {
    letterSpacing: '$tight',
    fontSize: '$xl3',
    fontWeight: '$semibold'
  },
  h3: {
    letterSpacing: '$tight',
    fontSize: '$xl',
    fontWeight: '$semibold'
  },
  h4: {
    letterSpacing: '$tight',
    fontSize: '$xl2',
    fontWeight: '$light',
    fontFamily: '$light'
  },
  h5: {
    fontSize: '$md',
    fontWeight: '$semibold'
  },
  h6: {
    
    fontSize: '$sm',
    fontWeight: '$semibold'
  },
  'button, input, select,textarea': {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit',
    margin: 0,
  },
  'button': { 
    cursor: 'pointer',
  },
  'button:focus, input:focus, select:focus, textarea:focus': {
    outline: 'none'
  },
  code: {
    color: '$code',
    padding: '$1 $2',
    borderRadius: '$xs',
    bg: '$codeLight',
    fontFamily: '$mono',
    fontSize: '$sm',
    whiteSpace: 'pre-wrap',
    transition: 'opacity 0.25s ease 0s'
  },
  'code:hover': {
    opacity: 0.8
  },
  pre: {
    overflow: 'auto',
    whiteSpace: 'pre',
    textAlign: 'left',
    fontSize: '$sm',
    borderRadius: '$lg',
    padding: '$md $lg',
    margin: '$lg 0 ',
    fontFamily: '$mono',
    lineHeight: '$md',
    webkitOverflowScrolling: 'touch'
  },
  'pre code': {
    color: '$foreground',
    fontSize: '$sm',
    lineHeight: '$sm',
    whiteSpace: 'pre'
  },
  'pre code:before,pre code:after': {
    display: 'none'
  },
  'pre p': {
    margin: 0
  },
  'pre::-webkit-scrollbar': {
    display: 'none',
    width: 0,
    height: 0,
    background: 'transparent'
  },
  hr: {
    background: '$border',
    borderColor: 'transparent',
    borderWidth: '0px',
    borderStyle: 'none',
    height: '1px'
  },
  details: {
    backgroundColor: '$accents1',
    border: 'none'
  },
  'details:focus, details:hover, details:active': {
    outline: 'none'
  },
  summary: {
    cursor: 'pointer',
    userSelect: 'none',
    listStyle: 'none',
    outline: 'none'
  },
  'summary::-webkit-details-marker, summary::before': {
    display: 'none'
  },
  'summary::-moz-list-bullet': {
    fontSize: 0
  },
  'summary:focus, summary:hover, summary:active': {
    outline: 'none',
    listStyle: 'none'
  },
  '::selection': {
    backgroundColor: '$selection'
  },
  blockquote: {
    padding: '$md $lg',
    color: '$accents7',
    backgroundColor: '$accents0',
    borderRadius: '$lg',
    margin: '$10 0'
  },
  'blockquote *:first-child': {
    marginTop: 0
  },
  'blockquote *:last-child': {
    marginBottom: 0
  },
  kbd: {
    width: 'fit-content',
    textAlign: 'center',
    display: 'inline-block',
    color: '$accents8',
    bg: '$accents0',
    border: '1px solid $border',
    boxShadow: '0 0 1px 0 rgb(0 0 0 / 14%)',
    fontFamily: '$sans',
    borderRadius: '5px',
    padding: '$1 $3',
    mx: '$1',
    lineHeight: '$sm',
    fontSize: '$sm'
  },
  'kbd + kbd': {
    ml: '$2'
  }
})()

export type CSS = Stitches.CSS<typeof config>;
export { styled, getCssText, css, theme, keyframes }