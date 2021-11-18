export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      'Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
    light: 300,
    normal: 400,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    base: '#1a1a1a',
    contrast: '#fff',
    brand: {
      primary: '#fff059',
      secundary: '#343677',
      tertiary: '#ffffff'
    },
    primary: {
      default: '#3483FA',
      darkest: '#245399',
      active: '#3270CC',
      action: '#4988E8',
      lightest: '#C5DCFF'
    },
    feedback: {
      info: {
        default: '#3C75FB',
        darkest: '#204B65',
        active: '#4382D1',
        action: '#BAD8FD',
        lightest: '#EFF6FF'
      },
      success: {
        default: '#4FBB72',
        darkest: '#1F522F',
        action: '#3F995D',
        active: '#B8E3CA',
        lightest: '#EEF9F3'
      },
      warning: {
        default: '#F7C51A',
        darkest: '#6F5606',
        action: '#CDA513',
        active: '#FCE8A8',
        lightest: '#FDFAEA'
      },
      error: {
        default: '#DA421B',
        darkest: '#60190A',
        action: '#B33616',
        active: '#EFB5AC',
        lightest: '#FCEDEC'
      }
    }
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  }
} as const
