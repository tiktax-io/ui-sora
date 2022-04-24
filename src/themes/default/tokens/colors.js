const colorScales = {
  // Grays / neutrals
  gray900: '#101840',
  gray800: '#474d66',
  gray700: '#696f8c',
  gray600: '#8f95b2',
  gray500: '#c1c4d6',
  gray400: '#d8dae5',
  gray300: '#E6E8F0',
  gray200: '#edeff5',
  gray100: '#F4F5F9',
  gray90: '#F4F6FA',
  gray75: '#F9FAFC',
  gray50: '#FAFBFF',
  white: '#FFFFFF',

  // Blues
  blue900: '#001622',
  blue800: '#002d45',
  blue700: '#004367',
  blue600: '#005a8a',
  blue500: '#0070AC',
  blue400: '#009cf0',
  blue300: '#34b8ff',
  blue200: '#78d0ff',
  blue100: '#bbe7ff',
  blue50: '#cfeeff',
  blue25: '#ebf8ff',

  // Reds
  red700: '#690710',
  red600: '#d10e20',
  red500: '#F45B69',
  red300: '#f7848f',
  red100: '#faadb4',
  red25: '#fcd6d9',

  // Greens
  green900: '#0a3e19',
  green800: '#147b32',
  green700: '#1eb94b',
  green600: '#3ee06d',
  green500: '#7CEA9C',
  green400: '#96eeb0',
  green300: '#b0f2c4',
  green200: '#cbf7d7',
  green100: '#e5fbeb',
  green25: '#f2fdf5',

  // Oranges
  orange700: '#996A13',
  orange500: '#FA8600',
  orange100: '#F8E3DA',
  orange25: '#FFFAF2',

  // Purple
  purple600: '#C2AFF0', // 500 C2AFF0
  purple100: '#E7E4F9',

  // Teals
  teal800: '#028090', // 500 028090
  teal100: '#D3F5F7',

  // Yellows
  yellow800: '#F9DC5C', // 500 F9DC5C
  yellow100: '#FFEFD2'
}

const colors = {
  ...colorScales,

  muted: colorScales.gray700,
  default: colorScales.gray800,
  dark: colorScales.gray900,
  selected: colorScales.blue500,

  tint1: colorScales.gray50,
  tint2: colorScales.gray75,
  overlay: 'rgba(67, 90, 111, 0.7)',

  yellowTint: colorScales.yellow100,
  greenTint: colorScales.green25,
  orangeTint: colorScales.orange25,
  redTint: colorScales.red25,
  blueTint: colorScales.blue25,
  purpleTint: colorScales.purple100,
  tealTint: colorScales.teal100,

  border: {
    default: colorScales.gray300,
    muted: colorScales.gray200
  },

  icon: {
    default: colorScales.gray700,
    muted: colorScales.gray600,
    disabled: colorScales.gray400,
    selected: colorScales.blue500
  },

  text: {
    danger: colorScales.red500,
    success: colorScales.green500,
    info: colorScales.blue500
  }
}

export default colors
