import { type IconName, KOBOYO_ICONS } from './koboyo.ts'

const FATTEN_PX = 0.9

interface IconProps {
  name: IconName
  size?: number
  color?: string
  className?: string
}

export type { IconName }

export default function Icon({ name, size = 16, color = 'currentColor', className }: IconProps) {
  const { vb, body } = KOBOYO_ICONS[name]
  const [vw, vh] = vb
  const strokeWidth = (FATTEN_PX * Math.max(vw, vh)) / size

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${vw} ${vh}`}
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth.toFixed(3)}
      strokeLinejoin="round"
      className={className}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  )
}
