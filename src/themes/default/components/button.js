const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  border: '1px solid transparent',
  borderRadius: 'radii.1',
  color: (theme, { color }) => theme.colors[color] || color || 'colors.default',
  transition: 'box-shadow 80ms ease-in-out',

  _focus: {
    boxShadow: 'shadows.focusRing',
  },

  _hover: {
    boxShadow: 'shadows.focusRing',
  },

  _disabled: {
    boxShadow: 'none',
    // cursor: 'not-allowed',
    pointerEvents: 'none',
  },
}

const colorKeyForAppearanceOrIntent = (appearance, intent) => {
  if (appearance === 'destructive') {
    return 'red'
  }

  switch (intent) {
    case 'success':
      return 'green'
    case 'danger':
      return 'red'
    default:
      return 'blue'
  }
}

const colorKeyForIntent = (intent) => {
  if (intent === 'danger') {
    return `red500`
  } else if (intent === 'success') {
    return `green500`
  } else {
    return `gray800`
  }
}

const borderColorForIntent = (intent, isHover) => {
  if (intent === 'danger') {
    return `red${isHover ? 500 : 300}`
  } else if (intent === 'success') {
    return `green${isHover ? 400 : 300}`
  } else {
    return `gray${isHover ? 600 : 500}`
  }
}

const getPrimaryButtonAppearance = (appearance, intent, textColor, theme) => {
  const color = colorKeyForAppearanceOrIntent(appearance, intent)
  return {
    backgroundColor: `colors.${color}500`,
    borderColor: `colors.${color}500`,
    boxShadow: 'rgb(0 112 172 / 24%) 0px 8px 16px 0px', // 'shadows.focusRing',
    color: textColor || 'white',
    _hover: {
      backgroundColor: `colors.${color}600`,
      borderColor: `colors.${color}600`,
      boxShadow: 'rgb(0 112 172 / 12%) 0px 8px 16px 0px', // 'shadows.focusRing'
    },
    _disabled: {
      backgroundColor: `colors.${color}100`,
      borderColor: `colors.${color}100`,
    },
    _focus: {
      backgroundColor: `colors.${color}500`,
      boxShadow: 'rgb(0 112 172 / 12%) 0px 8px 16px 0px', // 'shadows.focusRing'
      borderColor: `colors.${color}500`,
    },
    _active: {
      backgroundColor: `colors.${color}700`,
      borderColor: `colors.${color}700`,
      boxShadow: 'rgb(0 112 172 / 12%) 0px 8px 16px 0px', // 'shadows.focusRing'
    },
  }
}

const appearances = {
  primary: (theme, { appearance, color, intent }) => getPrimaryButtonAppearance(appearance, intent, color, theme),
  default: {
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px 3px rgba(1, 167, 255, 0.25)',
    // border: (theme, props) => `1px solid ${theme.colors[borderColorForIntent(props.intent)]}`,
    color: (theme, props) => props.color || theme.colors[colorKeyForIntent(props.intent)],

    _disabled: {
      color: 'colors.gray500',
      borderColor: 'colors.gray300',
    },

    _hover: {
      border: (theme, props) => `1px solid ${theme.colors[borderColorForIntent(props.intent, true)]}`,
      backgroundColor: 'colors.gray50',
    },

    _active: {
      backgroundColor: 'colors.gray100',
    },
  },
  minimal: {
    backgroundColor: 'transparent',
    color: (theme, props) => props.color || theme.colors[colorKeyForIntent(props.intent)],

    _disabled: {
      color: 'colors.gray500',
      opacity: 0.6,
    },

    _hover: {
      backgroundColor: 'colors.gray100',
    },

    _active: {
      backgroundColor: 'colors.gray200',
    },
  },
  destructive: getPrimaryButtonAppearance('destructive'),
}

const sizes = {
  small: {
    height: 24,
    minWidth: 24,
    fontSize: 'fontSizes.2',
    lineHeight: '24px',
    paddingLeft: 16,
    paddingRight: 16,
  },
  medium: {
    height: 40,
    minWidth: 40,
    fontSize: 'fontSizes.2',
    lineHeight: '32px',
    paddingLeft: 20,
    paddingRight: 20,
  },
  large: {
    height: 48,
    minWidth: 48,
    fontSize: 'fontSizes.3',
    lineHeight: '48px',
    paddingLeft: 24,
    paddingRight: 24,
  },
}

export default {
  baseStyle,
  appearances,
  sizes,
}
