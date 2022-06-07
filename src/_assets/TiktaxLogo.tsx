import React from 'react'
import { LogoProps } from '../_types'

const TiktaxLogo = ({
  size = 'm'
}: LogoProps) => {
  /******************************************************************************
   * @returns {string} the width of the svg container
   *****************************************************************************/
  const width = size === 'm' ? '90px'
    : size === 'l' ? '110px'
    : size === 'sm' ? '70px'
    : size === 'xl' ? '130px' : '90px'

  return(
    <span style={{ width: width }}>
      <svg width="90" height="31" viewBox="0 0 90 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect y="0.25" width="90" height="30.5" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_749_715" transform="translate(-0.111111 -1.38631) scale(0.0110672 0.0326573)"/>
        </pattern>
        <image id="image0_749_715" width="113" height="110" xlinkHref="data:image/png;base64,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"/>
        </defs>
      </svg>
    </span>
  )
}

export default TiktaxLogo
