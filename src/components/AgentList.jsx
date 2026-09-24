import { AgentCard } from './AgentCard.jsx'

export function AgentList({ agents, selectedAgent, onSelectAgent }) {
  if (agents.length === 0) {
    return (
      <p className="no-agents" role="status">
        No agents match that search. Try another name or role.
      </p>
    )
  }

  return (
    <div className="agent-list" aria-label="Agents">
      {agents.map((agent) => (
        <AgentCard
          agent={agent}
          isSelected={selectedAgent?.id === agent.id}
          key={agent.id}
          onSelectAgent={onSelectAgent}
        />
      ))}
    </div>
  )
}
