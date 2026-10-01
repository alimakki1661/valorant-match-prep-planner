export function MatchNotes({ contextLabel, matchGoal, onGoalChange, personalNotes, onNotesChange }) {
  const isDisabled = !contextLabel

  return (
    <section className="match-notes" aria-labelledby="notes-title">
      <div className="section-heading notes-heading">
        <span className="step-number">03</span>
        <div>
          <h2 id="notes-title">Make it your plan</h2>
          <p>{contextLabel ? `This draft is for ${contextLabel} and saves in this browser.` : 'Choose a map and role first to start a separate draft.'}</p>
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
          disabled={isDisabled}
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
          disabled={isDisabled}
        />
        <span className="character-count">{personalNotes.length}/500</span>
      </label>
    </section>
  )
}
