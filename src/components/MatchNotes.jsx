export function MatchNotes({ matchGoal, onGoalChange, personalNotes, onNotesChange }) {
  return (
    <section className="match-notes" aria-labelledby="notes-title">
      <div className="section-heading notes-heading">
        <span className="step-number">03</span>
        <div>
          <h2 id="notes-title">Make it your plan</h2>
          <p>Your goal and notes appear in the plan as you type.</p>
        </div>
      </div>

      <label className="note-field">
        <span>Match goal</span>
        <input
          type="text"
          value={matchGoal}
          onChange={(event) => onGoalChange(event.target.value)}
          placeholder="e.g. Take A Main space early"
          maxLength={90}
        />
      </label>

      <label className="note-field">
        <span>Personal notes</span>
        <textarea
          value={personalNotes}
          onChange={(event) => onNotesChange(event.target.value)}
          placeholder="Utility, timing, or reminders for this match…"
          rows={4}
          maxLength={500}
        />
        <span className="character-count">{personalNotes.length}/500</span>
      </label>
    </section>
  )
}
