export function AgentCard({ agent, isSelected, onSelectAgent }) {
  return (
    <button
      className={`agent-card ${isSelected ? 'is-selected' : ''}`}
      type="button"
      aria-pressed={isSelected}
      onClick={() => onSelectAgent(agent)}
    >
      <span className={`agent-avatar ${agent.roleClass}`} aria-hidden="true">
        {agent.initials}
      </span>
      <span className="agent-card-info">
        <span className="agent-name">{agent.name}</span>
        <span className="agent-role">{agent.role}</span>
      </span>
      <span className="agent-card-check" aria-hidden="true">{isSelected ? '✓' : '+'}</span>
    </button>
  )
}
