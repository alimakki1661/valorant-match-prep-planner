import { useState } from 'react'
import { roleOptions } from './data/roles.js'
import { MapSelector } from './components/MapSelector.jsx'
import { MatchPlan } from './components/MatchPlan.jsx'
import { MatchNotes } from './components/MatchNotes.jsx'
import { RoleSelector } from './components/RoleSelector.jsx'
import './App.css'

const maps = ['Haven', 'Ascent', 'Sunset']

function App() {
  const [selectedMap, setSelectedMap] = useState('Haven')
  const [selectedRole, setSelectedRole] = useState(null)
  const [matchGoal, setMatchGoal] = useState('')
  const [personalNotes, setPersonalNotes] = useState('')

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
          </section>

          <MatchPlan selectedMap={selectedMap} selectedRole={selectedRole}>
            <MatchNotes
              matchGoal={matchGoal}
              onGoalChange={setMatchGoal}
              personalNotes={personalNotes}
              onNotesChange={setPersonalNotes}
            />
          </MatchPlan>
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
