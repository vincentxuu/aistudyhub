import { createFileRoute } from '@tanstack/react-router'
import { RpgApp } from '../components/rpg/RpgApp.tsx'

export type RpgView = 'map' | 'quests' | 'camp' | 'skills' | 'battle'
export const Route = createFileRoute('/rpg/$code')({
  validateSearch: (search: Record<string, unknown>): { view: RpgView; quest?: string } => ({
    view: ['map', 'quests', 'camp', 'skills', 'battle'].includes(String(search.view))
      ? (search.view as RpgView)
      : 'map',
    quest: typeof search.quest === 'string' ? search.quest : undefined,
  }),
  component: AdventurePage,
})

function AdventurePage() {
  const { code } = Route.useParams()
  const { view, quest } = Route.useSearch()
  const navigate = Route.useNavigate()
  return (
    <RpgApp
      code={code}
      view={view}
      questId={quest}
      onNavigate={(next, questId) => navigate({ search: { view: next, quest: questId } })}
    />
  )
}
