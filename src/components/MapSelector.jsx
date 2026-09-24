export function MapSelector({ maps, selectedMap, onSelectMap }) {
  return (
    <div className="map-list" aria-label="Choose a map">
      {maps.map((map) => (
        <button
          className={`map-option ${selectedMap === map ? 'is-selected' : ''}`}
          key={map}
          type="button"
          aria-pressed={selectedMap === map}
          onClick={() => onSelectMap(map)}
        >
          <span className="map-option-index">{String(maps.indexOf(map) + 1).padStart(2, '0')}</span>
          <span>{map}</span>
          <span className="map-option-arrow" aria-hidden="true">↗</span>
        </button>
      ))}
    </div>
  )
}
