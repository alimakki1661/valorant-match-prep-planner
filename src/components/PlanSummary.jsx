export function PlanSummary({ matchGoal, personalNotes }) {
  const hasGoal = matchGoal.trim().length > 0
  const hasNotes = personalNotes.trim().length > 0

  if (!hasGoal && !hasNotes) return null

  return (
    <section className="plan-review" aria-labelledby="plan-review-title">
      <p id="plan-review-title" className="plan-review-label">YOUR PREP</p>
      {hasGoal && (
        <div className="plan-review-item">
          <p className="plan-review-item-label">MATCH GOAL</p>
          <p className="plan-review-copy">{matchGoal}</p>
        </div>
      )}
      {hasNotes && (
        <div className="plan-review-item">
          <p className="plan-review-item-label">PERSONAL NOTES</p>
          <p className="plan-review-copy">{personalNotes}</p>
        </div>
      )}
    </section>
  )
}
