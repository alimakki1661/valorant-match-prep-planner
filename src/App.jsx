import { useState } from 'react'
import { agents } from './data/agents.js'
import { AgentList } from './components/AgentList.jsx'
import { AgentSearch } from './components/AgentSearch.jsx'
import { MapSelector } from './components/MapSelector.jsx'
import { MatchPlan } from './components/MatchPlan.jsx'
import { RoleFilter } from './components/RoleFilter.jsx'
import './App.css'

const maps = ['Haven', 'Ascent', 'Sunset']

function App() {
  const [selectedMap, setSelectedMap] = useState('Haven')
  const [searchText, setSearchText] = useState('')
  const [selectedRole, setSelectedRole] = useState('All roles')
  const [selectedAgent, setSelectedAgent] = useState(null)

  const visibleAgents = agents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchText.toLowerCase())
    const matchesRole = selectedRole === 'All roles' || agent.role === selectedRole
    return matchesSearch && matchesRole
  })

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
            Choose a map and agent, then build a plan around how you want to play.
            Every agent is available on every map.
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
            <div className="agent-browser" aria-labelledby="agent-title">
              <div className="section-heading agent-heading">
                <span className="step-number">02</span>
                <div>
                  <h2 id="agent-title">Choose your agent</h2>
                  <p>Every pick is open on every map.</p>
                </div>
              </div>
              <AgentSearch searchText={searchText} onSearchChange={setSearchText} />
              <RoleFilter selectedRole={selectedRole} onRoleChange={setSelectedRole} />
              <AgentList
                agents={visibleAgents}
                selectedAgent={selectedAgent}
                onSelectAgent={setSelectedAgent}
              />
            </div>
          </section>

          <MatchPlan selectedMap={selectedMap} selectedAgent={selectedAgent} />
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
