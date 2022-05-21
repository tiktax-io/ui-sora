import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import { Strong } from '../../typography'
import Box from 'ui-box/dist/src/box'
import { CrossIcon } from '../../icons'
import { IconButton } from '../../buttons'

const pseudoSelectors = {}

const internalStyles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  verticalAlign: 'middle',
}

const hoverClassName = css({
  '&:hover': {
    opacity: 0.8,
  },
  cursor: 'pointer',
})

const Badge = memo(
  forwardRef(function Badge(props, ref) {
    const {
      appearance = 'subtle',
      className,
      color = 'neutral',
      hasCloseButton = false,
      isInteractive = false,
      onRemove,
      ...restProps
    } = props

    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Badge',
      { appearance, color },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Box
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '30px',
          justifyContent: 'center',
        }}
        ref={ref}
        size={300}
        className={cx(className, themedClassName, isInteractive && hoverClassName)}
        {...styleProps}
        {...restProps}
      >
        <Strong ref={ref} size={300} {...restProps} />
        {hasCloseButton && (
          <IconButton
            icon={CrossIcon}
            appearance="minimal"
            height={20}
            onClick={onRemove}
            data-testid="badge-close-button"
          />
        )}
      </Box>
    )
  })
)

Badge.propTypes = {
  ...Strong.propTypes,

  /**
   * The color used for the badge.
   */
  color: PropTypes.string,

  /**
   * Whether or not to apply hover/focus/active styles
   */
  isInteractive: PropTypes.bool,
}

export default Badge
