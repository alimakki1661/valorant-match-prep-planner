import { useEffect, useState } from 'react'
import { roleOptions } from './data/roles.js'
import { phases } from './data/phases.js'
import { MapSelector } from './components/MapSelector.jsx'
import { MatchPlan } from './components/MatchPlan.jsx'
import { MatchNotes } from './components/MatchNotes.jsx'
import { RoleSelector } from './components/RoleSelector.jsx'
import './App.css'

const maps = ['Haven', 'Ascent', 'Sunset']
const storageKey = 'match-point-plan'

function loadSavedPlan() {
  const defaults = {
    selectedMap: 'Haven',
    selectedRole: null,
    draftsByPlan: {},
    phase: phases[0],
  }

  try {
    const saved = JSON.parse(window.localStorage.getItem(storageKey) || '{}')
    const selectedMap = maps.includes(saved.selectedMap) ? saved.selectedMap : defaults.selectedMap
    const selectedRole = roleOptions.some((role) => role.key === saved.selectedRole) ? saved.selectedRole : null
    const draftsByPlan = {}

    if (saved.draftsByPlan && typeof saved.draftsByPlan === 'object' && !Array.isArray(saved.draftsByPlan)) {
      for (const [key, draft] of Object.entries(saved.draftsByPlan)) {
        const [map, role] = key.split('::')
        const isValidPlan = maps.includes(map) && roleOptions.some((option) => option.key === role)

        if (isValidPlan && draft && typeof draft === 'object') {
          draftsByPlan[key] = {
            matchGoal: typeof draft.matchGoal === 'string' ? draft.matchGoal.slice(0, 90) : '',
            personalNotes: typeof draft.personalNotes === 'string' ? draft.personalNotes.slice(0, 500) : '',
          }
        }
      }
      draftsByPlan[`${selectedMap}::${selectedRole}`] = {
        matchGoal: typeof saved.matchGoal === 'string' ? saved.matchGoal.slice(0, 90) : '',
        personalNotes: typeof saved.personalNotes === 'string' ? saved.personalNotes.slice(0, 500) : '',
      }
    }

    return {
      selectedMap,
      selectedRole,
      draftsByPlan,
      phase: phases.includes(saved.phase) ? saved.phase : defaults.phase,
    }
  } catch {
    return defaults
  }
}

function App() {
  const [initialPlan] = useState(loadSavedPlan)
  const [selectedMap, setSelectedMap] = useState(initialPlan.selectedMap)
  const [selectedRole, setSelectedRole] = useState(initialPlan.selectedRole)
  const [draftsByPlan, setDraftsByPlan] = useState(initialPlan.draftsByPlan)
  const [phase, setPhase] = useState(initialPlan.phase)
  const currentPlanKey = selectedRole ? `${selectedMap}::${selectedRole}` : null
  const currentDraft = currentPlanKey
    ? draftsByPlan[currentPlanKey] ?? { matchGoal: '', personalNotes: '' }
    : { matchGoal: '', personalNotes: '' }
  const roleLabel = roleOptions.find((role) => role.key === selectedRole)?.label

  function updateCurrentDraft(field, value) {
    if (!currentPlanKey) return

    setDraftsByPlan((previousDrafts) => ({
      ...previousDrafts,
      [currentPlanKey]: {
        ...previousDrafts[currentPlanKey],
        [field]: value,
      },
    }))
  }

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify({
        selectedMap,
        selectedRole,
        draftsByPlan,
        phase,
      }))
    } catch {
      // The planner remains usable if browser storage is unavailable.
    }
  }, [selectedMap, selectedRole, draftsByPlan, phase])

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Match Point home">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>.MATCH POINT</span>
        </a>
        <span className="header-label">VALORANT MATCH PREP</span>
      </header>

      <main id="top" className="page-content">
        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow">YOUR MAP. YOUR READ. YOUR PLAN.</p>
          <h1 id="page-title">Prepare for the round<br /><span>before it begins.</span></h1>
          <p className="intro-copy">
            Choose a map and role, then build a plan around how you want to play.
            Your advice is organized by role and works with any agent in that role.
          </p>
        </section>

        <div className="planner-layout">
          <section className="setup-panel" aria-labelledby="setup-title">
            <div className="section-heading">
              <span className="step-number">01</span>
              <div>
                <h2 id="setup-title">Choose your map</h2>
                <p>Start with the map you are preparing for.</p>
              </div>
            </div>
            <MapSelector
              maps={maps}
              selectedMap={selectedMap}
              onSelectMap={setSelectedMap}
            />
            <section className="role-browser" aria-labelledby="role-title">
              <div className="section-heading role-heading">
                <span className="step-number">02</span>
                <div>
                  <h2 id="role-title">Choose your role</h2>
                  <p>Pick the role you plan to play.</p>
                </div>
              </div>
              <RoleSelector
                roles={roleOptions}
                selectedRole={selectedRole}
                onSelectRole={setSelectedRole}
              />
            </section>
            <MatchNotes
              contextLabel={selectedRole ? `${selectedMap} · ${roleLabel}` : null}
              matchGoal={currentDraft.matchGoal}
              onGoalChange={(value) => updateCurrentDraft('matchGoal', value)}
              personalNotes={currentDraft.personalNotes}
              onNotesChange={(value) => updateCurrentDraft('personalNotes', value)}
            />
          </section>

          <MatchPlan
            selectedMap={selectedMap}
            selectedRole={selectedRole}
            roleLabel={roleLabel}
            phase={phase}
            onPhaseChange={setPhase}
            matchGoal={currentDraft.matchGoal}
            personalNotes={currentDraft.personalNotes}
          />
        </div>
      </main>

      <footer className="site-footer">
        <span>MADE FOR THE WAY YOU PLAY</span>
        <span>PERSONAL NOTES. NO RULES.</span>
      </footer>
    </div>
  )
}

export default App
