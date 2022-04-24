import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M11 10a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42L12.59 8 11.3 9.29c-.19.18-.3.43-.3.71zM1 5c.55 0 1-.45 1-1V2h2c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v3c0 .55.45 1 1 1zm4 1a1.003 1.003 0 00-1.71-.71l-2 2C1.11 7.47 1 7.72 1 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L3.41 8 4.7 6.71c.19-.18.3-.43.3-.71zm1-1c.28 0 .53-.11.71-.29L8 3.41 9.29 4.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2C8.53 1.11 8.28 1 8 1s-.53.11-.71.29l-2 2A1.003 1.003 0 006 5zm9 6c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-11h-3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zM4 14H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm6-3c-.28 0-.53.11-.71.29L8 12.59 6.71 11.3A.965.965 0 006 11a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 0010 11z',
]
const svgPaths20 = [
  'M1 7c.55 0 1-.45 1-1V2h4c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1zm5 1a1.003 1.003 0 00-1.71-.71l-2 2c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L4.41 10 5.7 8.71c.19-.18.3-.43.3-.71zm2-2c.28 0 .53-.11.71-.29L10 4.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2C10.53 2.11 10.28 2 10 2s-.53.11-.71.29l-2 2A1.003 1.003 0 008 6zM6 18H2v-4c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm8-6a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l1.3 1.29-1.29 1.29c-.19.18-.3.43-.3.71zm5-12h-5c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-7 14c-.28 0-.53.11-.71.29L10 15.59 8.71 14.3A.965.965 0 008 14a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 0012 14zm7-1c-.55 0-1 .45-1 1v4h-4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z',
]

export const ZoomToFitIcon = memo(
  forwardRef(function ZoomToFitIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="zoom-to-fit" {...props} />
  })
)
