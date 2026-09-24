export function MatchPlan({ selectedMap, selectedAgent }) {
  return (
    <aside className="plan-panel" aria-labelledby="plan-title">
      <div className="plan-topline">
        <span className="eyebrow">LIVE MATCH PLAN</span>
        <span className="plan-status"><span aria-hidden="true" /> IN PROGRESS</span>
      </div>
      <div className="plan-map-art" aria-hidden="true">
        <span className="map-ghost">{selectedMap.slice(0, 1)}</span>
        <span className="map-coordinate">MAP / {selectedMap.toUpperCase()}</span>
      </div>
      <div className="plan-details">
        <p className="eyebrow">CURRENT MAP</p>
        <h2 id="plan-title">{selectedMap}</h2>
        <div className="plan-divider" />
        {selectedAgent ? (
          <div className="selected-agent-summary">
            <div className={`agent-avatar ${selectedAgent.roleClass}`} aria-hidden="true">
              {selectedAgent.initials}
            </div>
            <div>
              <p className="eyebrow">YOUR AGENT · {selectedAgent.role.toUpperCase()}</p>
              <h3>{selectedAgent.name}</h3>
            </div>
          </div>
        ) : (
          <>
            <p className="empty-plan">Your agent, map tips, and match notes will come together here.</p>
            <div className="plan-empty-row">
              <span className="empty-icon" aria-hidden="true">+</span>
              <span>Agent not selected yet</span>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}
