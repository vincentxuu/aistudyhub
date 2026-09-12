import { Button } from '../ui/button.tsx'

export interface WorldMapProps {
  regions: { id: number; name: string; available: boolean }[]
  selected: number
  onSelect: (id: number) => void
}

const locations = [
  { x: 23, y: 71 },
  { x: 33, y: 37 },
  { x: 55, y: 26 },
  { x: 62, y: 68 },
  { x: 80, y: 36 },
]

const trees = [
  [108, 192],
  [125, 225],
  [156, 191],
  [173, 235],
  [193, 171],
  [224, 198],
  [203, 130],
  [254, 164],
  [269, 200],
  [292, 125],
  [310, 165],
  [356, 141],
  [380, 105],
  [422, 114],
  [430, 181],
  [458, 210],
  [477, 156],
  [489, 199],
  [345, 248],
  [375, 277],
  [412, 251],
  [253, 266],
  [277, 288],
  [183, 265],
]

export function WorldMap({ regions, selected, onSelect }: WorldMapProps) {
  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden border-2 border-[var(--rpg-wood)] bg-[var(--rpg-water)]">
        <svg
          viewBox="0 0 600 375"
          className="h-full w-full"
          shapeRendering="crispEdges"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="var(--rpg-path)"
            d="M65 185h18v-35h36v-32h58V89h54V62h102v12h44v17h49V72h68v15h37v39h20v57h-12v57h-35v35h-39v32h-84v21H225v-13h-70v-19h-41v-23H85v-38H65z"
          />
          <path
            fill="var(--rpg-grass)"
            d="M77 186h18v-31h35v-27h56V99h56V73h83v13h48v16h61V83h52v15h33v36h18v44h-12v56h-32v31h-42v32h-77v19H232v-14h-72v-20h-34v-21h-28v-33H77z"
          />
          <path
            fill="var(--rpg-forest)"
            opacity=".25"
            d="M91 187h49v-29h58v22h42v39h-18v55h-63v-13h-45v-32H91zM402 110h66v-15h28v29h28v88h-30v40h-38v-43h-26v-47h-28z"
          />
          <path
            fill="var(--rpg-water)"
            d="M369 95h15v41h-11v32h-18v33h11v31h18v29h22v37h-17v-29h-22v-29h-18v-32h-11v-39h18v-35h13z"
          />
          <path
            fill="none"
            stroke="var(--rpg-path)"
            strokeWidth="6"
            strokeDasharray="6 3"
            d="M138 264l48-46 12-76 64-14 68-29 48 28 102 8-30 91-80 30-66 36-70-32-96 4"
          />
          <path fill="var(--rpg-mountain)" d="M205 129l36-58 39 58zM259 132l29-43 30 43zM300 108l24-41 27 41z" />
          <path fill="var(--rpg-paper)" d="M231 88l10-17 12 18h-9l-4-6-4 5zM317 80l7-13 8 13z" />
          {trees.map(([x, y]) => (
            <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
              <path fill="var(--rpg-wood)" d="M-2 0h4v11h-4z" />
              <path fill="var(--rpg-forest)" d="M-4-15h8v5h6v8h5v6h-30v-6h5v-8h6z" />
            </g>
          ))}
          <g fill="var(--rpg-wood)">
            <path d="M346 212h34v7h-34zM348 207h4v17h-4zM359 207h4v17h-4zM372 207h4v17h-4z" />
            <path d="M118 243h31v24h-31zM154 256h22v20h-22z" />
          </g>
          <path fill="var(--rpg-gold)" d="M112 239h8v-7h24v7h10v8h-42zM151 252h29v7h-29z" />
          <path fill="var(--rpg-paper)" d="M124 249h8v8h-8zM160 262h6v9h-6z" />
          <path fill="var(--rpg-mountain)" d="M461 105V78h9v9h8v-9h10v9h8v-9h10v27h-5v39h-37v-39z" />
          <path fill="var(--rpg-ink)" d="M478 122h11v22h-11zM470 99h5v10h-5zM491 99h5v10h-5z" />
          <path fill="var(--rpg-gold)" d="M481 61h3v19h-3zM484 61h17v9h-17z" />
          <g stroke="var(--rpg-paper)" strokeWidth="2" opacity=".5">
            <path d="M36 88h24m-12-12v24M546 298h22m-11-11v22M39 302h18m480-259h19" />
          </g>
        </svg>
        {regions.map((region, index) => {
          const position = locations[index % locations.length]
          return (
            <Button
              key={region.id}
              type="button"
              data-available={region.available}
              aria-label={region.name}
              aria-pressed={selected === region.id}
              onClick={() => onSelect(region.id)}
              style={{ left: `${position.x}%`, top: `${position.y}%` }}
              className="absolute min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 rounded-none border-2 border-[var(--rpg-gold)] bg-[var(--rpg-ink)] px-2 text-[var(--rpg-paper)] transition-none hover:translate-y-[-50%] focus-visible:ring-[var(--rpg-paper)] aria-pressed:bg-[var(--btn-primary-bg)] aria-pressed:text-[var(--btn-primary-text)] disabled:opacity-75"
            >
              <span aria-hidden="true">{index + 1}</span>
              <span className="hidden max-w-28 whitespace-normal text-xs sm:inline">{region.name}</span>
            </Button>
          )
        })}
      </div>
      <ol className="mt-3 grid gap-2 text-sm text-[var(--sea-ink)] sm:hidden">
        {regions.map((region, index) => (
          <li key={region.id}>
            {index + 1}. {region.name}
          </li>
        ))}
      </ol>
    </div>
  )
}
