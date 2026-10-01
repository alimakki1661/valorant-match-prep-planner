import { useState } from 'react'
import { mapTips } from '../data/mapTips.js'

const phases = ['Defense', 'Attack']

export function MapTips({ selectedMap, selectedAgent }) {
  const [phase, setPhase] = useState('Defense')
  const roleTips = mapTips[selectedMap]?.[selectedAgent.role]
  const roleLabel = selectedAgent.role === 'Controller' ? 'Smokes' : selectedAgent.role

  return (
    <section className="map-tips" aria-labelledby="tips-title">
      <div className="tips-heading-row">
        <div>
          <p className="eyebrow">ALI'S MAP NOTES</p>
          <h3 id="tips-title">{selectedMap} · {roleLabel}</h3>
        </div>
        <div className="phase-switch" aria-label="Choose attack or defense advice">
          {phases.map((item) => (
            <button
              key={item}
              type="button"
              className={phase === item ? 'is-active' : ''}
              aria-pressed={phase === item}
              onClick={() => setPhase(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="tip-copy">{roleTips?.[phase.toLowerCase()]}</p>
      <p className="tip-context">
        Advice for {selectedAgent.name} on {selectedMap}. Your agent pick is never restricted by the map.
      </p>
    </section>
  )
}
