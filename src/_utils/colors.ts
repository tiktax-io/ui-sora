import { Color } from '../_types'

/******************************************************************************
 * Similar to SASS mix function. Mixes 2 colors and returns the color created
 * @param {string} color
 * @param {number} decimal
 * @returns {Color} Hex color
 *****************************************************************************/
export const shadeColor = (color: string, decimal: number): string => {
  const base = color.startsWith('#') ? 1 : 0

  let r = parseInt(color.substring(base, 3), 16)
  let g = parseInt(color.substring(base + 2, 5), 16)
  let b = parseInt(color.substring(base + 4, 7), 16)

  r = Math.round(r / decimal)
  g = Math.round(g / decimal)
  b = Math.round(b / decimal)

  r = (r < 255)? r : 255
  g = (g < 255)? g : 255
  b = (b < 255)? b : 255

  const rr = ((r.toString(16).length === 1)? `0${r.toString(16)}` : r.toString(16))
  const gg = ((g.toString(16).length === 1)? `0${g.toString(16)}` : g.toString(16))
  const bb = ((b.toString(16).length === 1)? `0${b.toString(16)}` : b.toString(16))

  return `#${rr}${gg}${bb}`
}

/******************************************************************************
 * Takes a string of a hex formatted color and returns the rgb/rgba equivalent.
 * @param {Color} hex color to transform to rgba.
 * @param {number} opacity last value on rgba string, in scale 0 to 1.
 * @returns {sgring} string containing rgba value.
 *****************************************************************************/
export const hexToRGB = (hex: string, opacity: number): string => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  if (opacity) {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }
  return `rgb(${r}, ${g}, ${b})`
}

const colors = {
  shadeColor: (color: string, decimal: number): string =>
    shadeColor(color, decimal),
  hexToRGB: (hex: string, opacity: number) => hexToRGB(hex, opacity)
}

export default colors
