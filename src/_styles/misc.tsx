const base_spacing = 10
const spacing_ratio = 1.25

export const spacing_scale: Array<number> = [
  base_spacing,
  base_spacing * Math.pow(spacing_ratio, 1),
  base_spacing * Math.pow(spacing_ratio, 2),
  base_spacing * Math.pow(spacing_ratio, 3),
  base_spacing * Math.pow(spacing_ratio, 4),
  base_spacing * Math.pow(spacing_ratio, 5)
]
