import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M5.474 7.971A5.31 5.31 0 006.66 8.9l.007.019.018.056c.015.038.038.06.045.098l1.5 5.999a.75.75 0 01-1.455.36l-.42-1.68h-.704l-.42 1.68a.746.746 0 01-.907.547.746.746 0 01-.547-.907l1.5-6c.007-.037.03-.06.044-.097.015-.037.015-.075.038-.112a.722.722 0 01-.105-.36c0-.207.084-.394.22-.53zM2.795 5.277a.763.763 0 00-.015-1.065.756.756 0 00-1.065.015c-2.286 2.34-2.286 6.21 0 8.549a.747.747 0 101.072-1.042c-1.709-1.763-1.709-4.702.008-6.457zM7.808 9.388a5.318 5.318 0 001.58.211 2.236 2.236 0 01-.656.98.756.756 0 01-1.057-.098.756.756 0 01.097-1.057l.036-.036zM11.544 9.105l.378.378a6.02 6.02 0 01-1.638 3.285c-.285.3-.757.3-1.057.015a.74.74 0 01-.015-1.057 4.52 4.52 0 001.185-2.24c.4-.083.785-.212 1.147-.381z',
  'M4.054 9.424c-.427-.352-.352-1.582-.03-1.822a.752.752 0 00.15-1.05.752.752 0 00-1.05-.15c-1.079.802-1.221 3.18-.03 4.177a.75.75 0 10.96-1.155zM9.318 0a4.318 4.318 0 014.317 4.318c0 .206-.02.402-.049.598-.01.05-.01.088-.02.138-.039.196-.078.382-.137.569v.01c-.059.186-.137.363-.216.54l-.039.087a5.285 5.285 0 01-.294.51l2.884 2.886a.878.878 0 01.236.559.787.787 0 01-.785.785.785.785 0 01-.56-.226L11.772 7.89a5.285 5.285 0 01-.51.295l-.089.039c-.176.079-.353.157-.54.216h-.01a3.701 3.701 0 01-.568.137c-.05.01-.099.02-.138.02-.196.03-.392.049-.598.049A4.318 4.318 0 015 4.327 4.332 4.332 0 019.318 0zm-.02 1.1A3.195 3.195 0 006.1 4.298a3.195 3.195 0 003.198 3.198 3.195 3.195 0 003.198-3.198A3.195 3.195 0 009.298 1.1z',
]
const svgPaths20 = [
  'M7.15 10.33c.888.8 1.999 1.36 3.228 1.574l2.326 6.98a.846.846 0 01-.535 1.07.844.844 0 01-1.072-.535l-1.225-3.671H7.125L5.9 19.419a.85.85 0 01-1.072.536.85.85 0 01-.536-1.071l2.857-8.555zm1.353 1.305l-.808 2.413h1.607l-.8-2.413zM5 5.5c0 .76.13 1.49.37 2.17-.496 1.056-.313 2.356.704 3.29.385.353.404.94.038 1.311a.982.982 0 01-1.356.038c-2.183-2.01-2-5.125.01-6.94a.95.95 0 01.24-.156A6.421 6.421 0 005 5.5z',
  'M3.874 13.185c-1.346-.918-2.187-2.67-2.187-4.34 0-1.752.757-3.254 2.187-4.339.42-.25.42-.834.168-1.168-.252-.418-.84-.418-1.177-.167C1.014 4.59-.08 6.509.005 8.846c.084 2.253 1.177 4.423 2.86 5.675.168.083.336.166.504.166.253 0 .505-.083.673-.333.337-.418.253-.918-.168-1.169zM12.246 12.309a.98.98 0 01-1.354-.037.917.917 0 01-.206-.324 6.54 6.54 0 001.959-.049 5.125 5.125 0 01-.399.41zM14.631 11.476l1.228 1.229a6.6 6.6 0 01-1.723 1.816c-.169.083-.337.166-.505.166-.253 0-.505-.083-.673-.333-.337-.418-.253-.918.168-1.169.62-.422 1.133-1.022 1.505-1.709z',
  'M11.5 0C14.54 0 17 2.46 17 5.5c0 .26-.02.51-.06.75l-.03.17c-.04.25-.1.49-.17.73v.01c-.08.24-.17.47-.28.69-.01.04-.03.07-.05.11-.11.23-.24.44-.38.65l3.68 3.68A1.003 1.003 0 0119 14c-.28 0-.53-.11-.7-.29l-3.68-3.68c-.21.14-.42.27-.65.38-.04.01-.07.03-.11.05-.22.11-.45.2-.69.28h-.01c-.24.07-.48.13-.73.17l-.17.03c-.25.04-.5.06-.76.06C8.46 11 6 8.54 6 5.5S8.46 0 11.5 0zm0 1.5c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z',
]

export const SignalSearchIcon = memo(
  forwardRef(function SignalSearchIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="signal-search" {...props} />
  })
)
