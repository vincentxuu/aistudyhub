export interface PixelSceneProps {
  variant?: 'camp' | 'battle'
  enemyHp?: number
}

export function PixelScene({ variant = 'camp', enemyHp = 100 }: PixelSceneProps) {
  const hp = Math.max(0, Math.min(100, Number.isFinite(enemyHp) ? enemyHp : 100))
  return (
    <svg
      viewBox="0 0 400 200"
      className="block w-full"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="var(--rpg-ink)" d="M0 0h400v200H0z" />
      <g fill="var(--rpg-paper)" opacity=".6">
        <path d="M38 27h2v2h-2zM82 48h2v2h-2zM127 17h2v2h-2zM219 38h2v2h-2zM333 25h2v2h-2zM373 58h2v2h-2z" />
        <path d="M282 17h13v5h5v14h-6v6h-12v-5h7V24h-7z" />
      </g>
      {[10, 53, 105, 159, 222, 278, 339, 382].map((x, index) => (
        <g key={x} transform={`translate(${x} ${index % 2 === 0 ? 82 : 95})`}>
          <path fill="var(--rpg-wood)" d="M-3 7h6v75h-6z" />
          <path fill="var(--rpg-forest)" d="M-12-20h24v12h9V4h11v16h10v15H-42V20h10V4h11V-8h9z" />
        </g>
      ))}
      <path fill="var(--rpg-grass)" d="M0 152h400v48H0z" />
      <path
        fill="var(--rpg-forest)"
        opacity=".5"
        d="M0 183h400v17H0zM18 166h8v4h-8zM112 179h12v4h-12zM345 161h9v4h-9z"
      />
      <g transform="translate(89 102)">
        <path fill="var(--rpg-wood)" d="M-17-9h34v7h10v10H-25V-2h8zM-15 8h9v19h-9z" />
        <path fill="var(--rpg-paper)" d="M-6 8h23v22H-6zM-18 39h9v18h-9zM17 35h9v18h-9z" />
        <path fill="var(--rpg-ink)" d="M11 12h5v5h-5zM-7 59h9v20h-9zM9 59h9v20H9z" />
        <path fill="var(--rpg-gold)" d="M-10 30h29v31h-29zM-15 38h40v9h-40z" />
        <path fill="var(--rpg-paper)" d="M32 27h4v31h-4z" />
        <path fill="var(--rpg-wood)" d="M27 53h14v4H27zM32 57h4v12h-4z" />
      </g>
      {variant === 'battle' ? (
        <g>
          <path fill="var(--rpg-grass)" d="M264 111h12V95h14V83h12v12h18v16h12v19h11v45h-14v8h-65v-8h-14v-45h14z" />
          <path fill="var(--rpg-paper)" d="M271 124h14v15h-14zM308 124h14v15h-14zM276 104h9v7h-9z" />
          <path fill="var(--rpg-ink)" d="M279 128h6v11h-6zM308 128h6v11h-6zM286 151h21v5h-21z" />
          <path fill="var(--rpg-wood)" d="M248 59h97v9h-97z" />
          <rect x="250" y="61" width={(93 * hp) / 100} height="5" fill="var(--rpg-gold)" />
        </g>
      ) : (
        <g>
          <path fill="var(--rpg-mountain)" d="M244 172h11v-7h48v7h12v9h-71z" />
          <path fill="var(--rpg-wood)" d="M253 168h51v7h-51zM261 160h8v23h-8zM289 160h8v23h-8z" />
          <path fill="var(--rpg-gold)" d="M263 160v-19h8v-17h8v-14h7v25h9v10h7v17h-8v7h-23v-9z" />
          <path fill="var(--rpg-paper)" d="M274 161v-13h7v-12h5v18h5v10h-17zM279 94h4v6h-4zM297 115h3v4h-3z" />
        </g>
      )}
    </svg>
  )
}
