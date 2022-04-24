const fontSizes = ['8.96px', '11.2px', '14px', '17.5px', '21.88px', '27.34px', '34.18px', '42.72px']

fontSizes.body = '14px'
fontSizes.heading = '17.5px'
fontSizes.caption = '8.96px'

const typography = {
  fontFamilies: {
    display: `"Inter", sans-serif;`,
    ui: `"Inter", sans-serif;`,
    mono: `"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`
  },
  fontSizes,
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600
  },
  letterSpacings: {
    tightest: '-0.2px',
    tighter: '-0.07px',
    tight: '-0.05px',
    normal: '0',
    wide: '0.6px'
  },
  lineHeights: ['16px', '19px', '23px', '28px', '34px', '41px', '49px']
}

export default typography
