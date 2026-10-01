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
          {role.label}
        </button>
      ))}
    </div>
  )
}
