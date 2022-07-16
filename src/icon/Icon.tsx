import React, { forwardRef, LegacyRef, memo, ReactElement } from 'react'
import { Color } from '../_types'
import { IconPath, IconProps } from './Icon.types'

/******************************************************************************
 * @returns Icon as a circle with dots inside, symbol of dashboard. See:
 * https://www.figma.com/file/JW13Am6sy8XY5ADpVEMRk6/crypto-accounting?node-id=38%3A405
 *****************************************************************************/
const DashboardIcon = memo(({
  color = '#8F95B2'
}: IconPath) => {
  return <path fillRule="evenodd" clipRule="evenodd" d="M5 4C4.45 4 4 4.45 4 5C4 5.55 4.45 6 5 6C5.55 6 6 5.55 6 5C6 4.45 5.55 4 5 4ZM4 7C3.45 7 3 7.45 3 8C3 8.55 3.45 9 4 9C4.55 9 5 8.55 5 8C5 7.45 4.55 7 4 7ZM8 5C8.55 5 9 4.55 9 4C9 3.45 8.55 3 8 3C7.45 3 7 3.45 7 4C7 4.55 7.45 5 8 5ZM6 11C6 12.1 6.9 13 8 13C9.1 13 10 12.1 10 11C10 10.47 8 6 8 6C8 6 6 10.47 6 11ZM8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14ZM12 5C12 4.45 11.55 4 11 4C10.45 4 10 4.45 10 5C10 5.55 10.45 6 11 6C11.55 6 12 5.55 12 5ZM12 7C11.45 7 11 7.45 11 8C11 8.55 11.45 9 12 9C12.55 9 13 8.55 13 8C13 7.45 12.55 7 12 7Z" fill={color}/>
})

/******************************************************************************
 * @returns Icon as clock symbol, symbol of time. See:
 * https://www.figma.com/file/JW13Am6sy8XY5ADpVEMRk6/crypto-accounting?node-id=38%3A399
 *****************************************************************************/
const TimeIcon = memo(({
  color = '#8F95B2'
}: IconPath) => {
  return <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14ZM9 7.59V4C9 3.45 8.55 3 8 3C7.45 3 7 3.45 7 4V8C7 8.28 7.11 8.53 7.29 8.71L9.29 10.71C9.47 10.89 9.72 11 10 11C10.55 11 11 10.55 11 10C11 9.72 10.89 9.47 10.71 9.29L9 7.59Z" fill={color}/>
})

/******************************************************************************
 * @returns Icon as a wallet, symbol of wallet. See:
 * https://www.figma.com/file/JW13Am6sy8XY5ADpVEMRk6/crypto-accounting?node-id=38%3A402
 *****************************************************************************/
const WalletIcon = memo(({
  color = '#8F95B2'
}: IconPath) => {
  return <path fillRule="evenodd" clipRule="evenodd" d="M15.0493 3.24707H1.87282C1.35517 3.24707 0.931641 3.6706 0.931641 4.18825V5.12942H15.9905V4.18825C15.9905 3.6706 15.5669 3.24707 15.0493 3.24707ZM0.931641 12.6588C0.931641 13.1765 1.35517 13.6 1.87282 13.6H15.0493C15.5669 13.6 15.9905 13.1765 15.9905 12.6588V7.01178H0.931641C0.931641 7.01178 0.931641 12.6588 0.931641 12.6588ZM6.10811 10.7765H10.814C11.0775 10.7765 11.2846 10.9835 11.2846 11.2471C11.2846 11.5106 11.0775 11.7177 10.814 11.7177H6.10811C5.84458 11.7177 5.63752 11.5106 5.63752 11.2471C5.63752 10.9835 5.85399 10.7765 6.10811 10.7765ZM3.28458 10.7765H4.22576C4.48929 10.7765 4.69635 10.9835 4.69635 11.2471C4.69635 11.5106 4.48929 11.7177 4.22576 11.7177H3.28458C3.02105 11.7177 2.81399 11.5106 2.81399 11.2471C2.81399 10.9835 3.03046 10.7765 3.28458 10.7765Z" fill={color}/>
})

/******************************************************************************
 * @returns Icon as a wallet, symbol of wallet. See:
 * https://www.figma.com/file/JW13Am6sy8XY5ADpVEMRk6/crypto-accounting?node-id=38%3A402
 *****************************************************************************/
const IntegrationsIcon = memo(({
  color = '#8F95B2'
}: IconPath) => {
  return <path fillRule="evenodd" clipRule="evenodd" d="M13 3H15C15.5523 3 16 3.44772 16 4C16 4.55228 15.5523 5 15 5H13V7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7V5H9C8.44771 5 8 4.55228 8 4C8 3.44772 8.44771 3 9 3H11V1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V3ZM10 1.0167V2H9C7.89543 2 7 2.89543 7 4C7 5.10457 7.89543 6 9 6H10V7C10 7.27866 10.057 7.54401 10.1599 7.78503L8.45 8.64C8.31 8.71 8.16 8.75 8 8.75C7.84 8.75 7.69 8.71 7.55 8.64L0.55 5.14C0.23 4.98 0 4.64 0 4.25C0 3.84 0.25 3.48 0.62 3.33L7.61 0.33C7.73 0.28 7.86 0.25 8 0.25C8.14 0.25 8.27 0.28 8.4 0.33L10 1.0167ZM10.9101 8.67719C11.2236 8.88136 11.5979 9 12 9C13.0586 9 13.925 8.17761 13.9954 7.13688L14.55 6.86C14.69 6.79 14.84 6.75 15 6.75C15.55 6.75 16 7.2 16 7.75C16 8.14 15.77 8.48 15.45 8.64L8.45 12.14C8.31 12.21 8.16 12.25 8 12.25C7.84 12.25 7.69 12.21 7.55 12.14L0.55 8.64C0.23 8.48 0 8.14 0 7.75C0 7.2 0.45 6.75 1 6.75C1.16 6.75 1.31 6.79 1.45 6.86L8 10.13L10.9101 8.67719ZM15 10.25C15.55 10.25 16 10.7 16 11.25C16 11.64 15.77 11.98 15.45 12.14L8.45 15.64C8.31 15.71 8.16 15.75 8 15.75C7.84 15.75 7.69 15.71 7.55 15.64L0.55 12.14C0.23 11.98 0 11.64 0 11.25C0 10.7 0.45 10.25 1 10.25C1.16 10.25 1.31 10.29 1.45 10.35L8 13.63L14.55 10.36C14.69 10.29 14.84 10.25 15 10.25Z" fill={color}/>
})

/******************************************************************************
 * @returns Icon as a wallet, symbol of wallet. See:
 * https://www.figma.com/file/JW13Am6sy8XY5ADpVEMRk6/crypto-accounting?node-id=38%3A402
 *****************************************************************************/
const SettingsIcon = memo(({
  color = '#8F95B2'
}: IconPath) => {
  return <path fillRule="evenodd" clipRule="evenodd" d="M15.2375 6.95529H13.4963C13.3928 6.60706 13.2422 6.28706 13.0728 5.97647L14.3528 4.69647C14.6446 4.4047 14.6446 3.9247 14.3528 3.63294L13.2893 2.56941C12.9975 2.27764 12.5175 2.27764 12.2258 2.56941L10.9458 3.84941C10.6352 3.68941 10.3152 3.53882 9.96694 3.43529V1.6847C9.96694 1.27059 9.62811 0.931763 9.21399 0.931763H7.70811C7.29399 0.931763 6.95517 1.27059 6.95517 1.6847V3.43529C6.58811 3.54823 6.24929 3.69882 5.91988 3.87765L4.69635 2.65412C4.41399 2.37176 3.95282 2.37176 3.67046 2.65412L2.65399 3.68C2.37164 3.96235 2.37164 4.42353 2.65399 4.70588L3.87752 5.92941C3.68929 6.24941 3.5387 6.58823 3.42576 6.95529H1.68458C1.27046 6.95529 0.931641 7.29412 0.931641 7.70823V9.21412C0.931641 9.62823 1.27046 9.96706 1.68458 9.96706H3.42576C3.52929 10.3153 3.67988 10.6353 3.84929 10.9459L2.56929 12.2259C2.27752 12.5176 2.27752 12.9976 2.56929 13.2894L3.63282 14.3529C3.92458 14.6447 4.40458 14.6447 4.69635 14.3529L5.97635 13.0729C6.28693 13.2424 6.60694 13.3835 6.95517 13.4871V15.2376C6.95517 15.6518 7.29399 15.9906 7.70811 15.9906H9.21399C9.62811 15.9906 9.96694 15.6518 9.96694 15.2376V13.4871C10.334 13.3741 10.6728 13.2235 11.0022 13.0447L12.2258 14.2682C12.5081 14.5506 12.9693 14.5506 13.2516 14.2682L14.2775 13.2424C14.5599 12.96 14.5599 12.4988 14.2775 12.2165L13.054 10.9929C13.2328 10.6635 13.3928 10.3247 13.5058 9.95765H15.2469C15.6611 9.95765 15.9999 9.61882 15.9999 9.2047V7.69882C15.9905 7.29412 15.6516 6.95529 15.2375 6.95529ZM8.46105 11.2847C6.8987 11.2847 5.63752 10.0235 5.63752 8.46117C5.63752 6.89882 6.8987 5.63765 8.46105 5.63765C10.0234 5.63765 11.2846 6.89882 11.2846 8.46117C11.2846 10.0235 10.0234 11.2847 8.46105 11.2847Z" fill={color}/>
})

/******************************************************************************
 * @returns Icon as a wallet, symbol of wallet. See:
 * https://www.figma.com/file/JW13Am6sy8XY5ADpVEMRk6/crypto-accounting?node-id=38%3A402
 *****************************************************************************/
const BellIcon = memo(({
  color = '#8F95B2'
}: IconPath) => {
  return <path fillRule="evenodd" clipRule="evenodd" d="M7 16C8.1 16 9 15.1 9 14H5C5 15.1 5.9 16 7 16ZM13 11C12.45 11 12 10.55 12 10V6C12 3.57 10.27 1.55 7.98 1.1C7.98 1.06 8 1.04 8 1C8 0.45 7.55 0 7 0C6.45 0 6 0.45 6 1C6 1.04 6.02 1.06 6.02 1.1C3.73 1.55 2 3.57 2 6V10C2 10.55 1.55 11 1 11C0.45 11 0 11.45 0 12C0 12.55 0.45 13 1 13H13C13.55 13 14 12.55 14 12C14 11.45 13.55 11 13 11Z" fill={color}/>
})

/******************************************************************************
 * @returns Icon as a danger exclamation symbol. See:
 * https://fontawesome.com/icons/circle-exclamation?s=solid
 *****************************************************************************/
 const DangerIcon = memo(({
  color = '#8F95B2'
}: IconPath) => {
  return <path d="M8 0C3.58125 0 0 3.58125 0 8C0 12.4187 3.58125 16 8 16C12.4187 16 16 12.4187 16 8C16 3.58125 12.4187 0 8 0ZM7.25 4.75C7.25 4.3375 7.5875 4 8 4C8.4125 4 8.75 4.33594 8.75 4.75V8.75C8.75 9.16406 8.41406 9.5 8 9.5C7.58594 9.5 7.25 9.16563 7.25 8.75V4.75ZM8 12.5C7.4575 12.5 7.0175 12.06 7.0175 11.5175C7.0175 10.975 7.45719 10.535 8 10.535C8.54281 10.535 8.9825 10.975 8.9825 11.5175C8.98125 12.0594 8.54375 12.5 8 12.5Z" fill={color} />
})

/******************************************************************************
 * @returns Icon as a success check symbol. See:
 * https://fontawesome.com/icons/circle-exclamation?s=solid
 *****************************************************************************/
 const SuccessIcon = memo(({
  color = '#8F95B2'
}: IconPath) => {
  return <path d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM11.6187 6.61875C11.9594 6.27813 11.9594 5.72187 11.6187 5.38125C11.2781 5.04062 10.7219 5.04062 10.3813 5.38125L7 8.7625L5.61875 7.38125C5.27813 7.04062 4.72187 7.04062 4.38125 7.38125C4.04062 7.72187 4.04062 8.27812 4.38125 8.61875L6.38125 10.6187C6.72187 10.9594 7.27813 10.9594 7.61875 10.6187L11.6187 6.61875Z" fill={color} />
})

/******************************************************************************
 * Functional component that renders an SVG icon.
 * @param {Color} color icon color in #hex or rgba format.
 * @param {string} dataTestId string to identify by id on tests. "data-testid".
 * @param {Color} fill icon background in #hex or rgba format.
 * @param {number} height height of the svg container as an integer.
 * @param {IconName} icon a string identifying the specific icon to render.
 * @param {string} viewBox svg viewbox properties formated as "0 0 16 16".
 * @param {number} width width of the svg container as an integer.
 * @returns ReactElement. SVG icon
 *****************************************************************************/
const Icon = memo(forwardRef(({
  color = '#8F95B2',
  dataTestId,
  fill = 'none',
  height,
  icon,
  size = 16,
  title,
  viewBox = '0 0 16 16',
  width
}: IconProps, ref: LegacyRef<SVGSVGElement> | undefined): ReactElement | null => {
  const iconAttributes = {
    color,
    fill
  }
  const svgAttributes = {
    'data-testid': dataTestId,
    fill,
    height: Number(height) > 0 ? height : size,
    ref,
    viewBox: viewBox ? viewBox : `0 0 ${size} ${size}`,
    xmlns: 'http://www.w3.org/2000/svg',
    width: Number(width) > 0 ? width : size
  }

  switch (icon) {
    case 'dashboard':
      return (
        <svg {...svgAttributes}>
          {title && <title>{title}</title>}<DashboardIcon {...iconAttributes} />
        </svg>
      )
    case 'time':
      return (
        <svg {...svgAttributes}>
          {title && <title>{title}</title>}<TimeIcon {...iconAttributes} />
        </svg>
      )
    case 'wallet':
      return (
        <svg {...svgAttributes}>
          {title && <title>{title}</title>}<WalletIcon {...iconAttributes} />
        </svg>
      )
    case 'integrations':
      return (
        <svg {...svgAttributes}>
          {title && <title>{title}</title>}<IntegrationsIcon {...iconAttributes} />
        </svg>
      )
    case 'settings':
      return (
        <svg {...svgAttributes}>
          {title && <title>{title}</title>}<SettingsIcon {...iconAttributes} />
        </svg>
      )
    case 'bell':
      return (
        <svg {...svgAttributes}>
          {title && <title>{title}</title>}<BellIcon {...iconAttributes} />
        </svg>
      )
    case 'danger':
      return (
        <svg {...svgAttributes}>
          {title && <title>{title}</title>}<DangerIcon {...iconAttributes} />
        </svg>
      )
    case 'success':
      return (
        <svg {...svgAttributes}>
          {title && <title>{title}</title>}<SuccessIcon {...iconAttributes} />
        </svg>
      )
    default:
      return null
  }
}))

export default Icon
