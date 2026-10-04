function Topbar() {
  return (
    <header className="topbar">

      {/* Search */}
      <div className="topbar-search">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search projects..."
        />

        <span className="search-shortcut">
          ⌘ K
        </span>
      </div>

      {/* Actions */}
      <div className="topbar-actions">

        <button
          className="topbar-button"
          title="Theme"
        >
          ☀️
        </button>

        <button
          className="topbar-button notification-button"
          title="Notifications"
        >
          🔔
          <span className="notification-dot"></span>
        </button>

        <button
          className="topbar-avatar"
          title="Profile"
        >
          H
        </button>

      </div>

    </header>
  )
}

export default Topbar