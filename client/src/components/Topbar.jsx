function Topbar() {
  return (
    <header className="topbar">
      <input
        type="text"
        placeholder="Search projects..."
      />

      <div className="topbar-actions">
        <button>☀️</button>
        <button>🔔</button>
        <button>👤</button>
      </div>
    </header>
  )
}

export default Topbar