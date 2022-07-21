const base_spacing = 10
const spacing_ratio = 1.25

/******************************************************************************
 * @type {Array<Number>} Each item is an integer number that represents a
 * lenght in pixels.
 *****************************************************************************/
export const spacing_scale: Array<number> = [
  base_spacing,
  base_spacing * Math.pow(spacing_ratio, 1),
  base_spacing * Math.pow(spacing_ratio, 2),
  base_spacing * Math.pow(spacing_ratio, 3),
  base_spacing * Math.pow(spacing_ratio, 4),
  base_spacing * Math.pow(spacing_ratio, 5)
]

/******************************************************************************
 * @type {Array<Number>} integer number for each breakpoint of the screen
 * width in pixels.
 *****************************************************************************/
export const widthBreakpoints = [
  // Mobile: 360 x 640 or 360 x .
  360,
  // Mobile: 375 x 667 or iPhone X: 375 x 812.
  375,
  // Pixel 2: 411 x 731.
  411,
  // Tablet (portrait): 768 x 1024.
  768,
  // Tablet (landscape): 768 x 1024.
  1024,
  // Laptop: 1366 x 768.
  1366,
  // High-res laptop or desktop: 1920 x 1080.
  1920
]
