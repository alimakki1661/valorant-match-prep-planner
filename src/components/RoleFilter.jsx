import { roles } from '../data/agents.js'

export function RoleFilter({ selectedRole, onRoleChange }) {
  return (
    <div className="role-filters" aria-label="Filter agents by role">
      {roles.map((role) => (
        <button
          className={`role-filter ${selectedRole === role ? 'is-active' : ''}`}
          key={role}
          type="button"
          aria-pressed={selectedRole === role}
          onClick={() => onRoleChange(role)}
        >
          {role}
        </button>
      ))}
    </div>
  )
}
