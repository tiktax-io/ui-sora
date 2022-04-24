const baseStyle = {
  borderRadius: 'radii.1',
  fontFamily: 'fontFamilies.ui',
  lineHeight: 'lineHeights.0',
  fontSize: 'fontSizes.2',
  border: '1px solid transparent',
  color: 'colors.default',
  paddingX: 12,
  transition: 'box-shadow 80ms ease-in-out',

  _placeholder: {
    color: 'colors.gray600'
  },

  _disabled: {
    cursor: 'not-allowed',
    backgroundColor: 'colors.gray100',
    color: 'colors.muted'
  }
}

const appearances = {
  default: {
    backgroundColor: 'white',
    borderColor: 'colors.gray400',

    _focus: {
      zIndex: 'zIndices.focused',
      boxShadow: 'shadows.focusRing',
      borderColor: 'colors.blue200'
    },

    _invalid: {
      borderColor: 'colors.red500'
    }
  },
  none: {
    backgroundColor: 'transparent'
  }
}

const sizes = {
  small: {
    height: 32
  },
  medium: {
    height: 40
  },
  large: {
    height: 48,
    lineHeight: 'lineHeights.1'
  }
}

export default {
  baseStyle,
  appearances,
  sizes
}
