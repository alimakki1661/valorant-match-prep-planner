import { MapTips } from './MapTips.jsx'
import { PlanSummary } from './PlanSummary.jsx'

export function MatchPlan({ selectedMap, selectedRole, phase, onPhaseChange, matchGoal, personalNotes }) {
  const roleLabel = selectedRole === 'Controller' ? 'Smokes' : selectedRole
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
        {selectedRole ? (
          <>
            <div className="selected-role-summary">
              <div>
                <p className="eyebrow">YOUR ROLE</p>
                <h3>{roleLabel}</h3>
              </div>
            </div>
            <MapTips
              selectedMap={selectedMap}
              selectedRole={selectedRole}
              phase={phase}
              onPhaseChange={onPhaseChange}
            />
          </>
        ) : (
          <>
            <p className="empty-plan">Choose a role to see its advice for this map.</p>
            <div className="plan-empty-row">
              <span className="empty-icon" aria-hidden="true">+</span>
              <span>Role not selected yet</span>
            </div>
          </>
        )}
        <PlanSummary matchGoal={matchGoal} personalNotes={personalNotes} />
      </div>
    </aside>
  )
}
