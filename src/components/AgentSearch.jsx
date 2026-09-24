export function AgentSearch({ searchText, onSearchChange }) {
  return (
    <label className="search-field">
      <span className="search-icon" aria-hidden="true">⌕</span>
      <span className="visually-hidden">Search agents by name</span>
      <input
        type="search"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search agents"
      />
      <span className="search-shortcut" aria-hidden="true">⌘ K</span>
    </label>
  )
}
