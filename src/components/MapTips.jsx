import { useState } from 'react'
import { mapTips } from '../data/mapTips.js'

const phases = ['Defense', 'Attack']

export function MapTips({ selectedMap, selectedRole }) {
  const [phase, setPhase] = useState('Defense')
  const roleTips = mapTips[selectedMap]?.[selectedRole]
  const roleLabel = selectedRole === 'Controller' ? 'Smokes' : selectedRole

  return (
    <section className="map-tips" aria-labelledby="tips-title">
      <div className="tips-heading-row">
        <div>
          <p className="eyebrow">ALI'S MAP NOTES</p>
          <h3 id="tips-title">{selectedMap} · {roleLabel}</h3>
        </div>
        <div className="phase-switch" role="group" aria-label="Choose attack or defense advice">
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
        Role-based advice for {roleLabel} on {selectedMap}. Use it with any agent in this role.
      </p>
    </section>
  )
}
