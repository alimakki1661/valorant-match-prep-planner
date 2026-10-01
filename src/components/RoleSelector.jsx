export function RoleSelector({ roles, selectedRole, onSelectRole }) {
  return (
    <div className="role-selector" role="group" aria-label="Choose a role">
      {roles.map((role) => (
        <button
          className={`role-option ${selectedRole === role.key ? 'is-active' : ''}`}
          key={role.key}
          type="button"
          aria-pressed={selectedRole === role.key}
          onClick={() => onSelectRole(role.key)}
        >
          <span className="role-option-copy">
            <span className="role-option-label">{role.label}</span>
            <span className="role-option-agents">
              Examples: {role.agents.map((agent) => agent.name).join(' · ')}
            </span>
          </span>
          <span className="role-option-portraits" aria-hidden="true">
            {role.agents.map((agent) => (
              <img className="role-agent-image" key={agent.name} src={agent.image} alt="" />
            ))}
          </span>
        </button>
      ))}
    </div>
  )
}
