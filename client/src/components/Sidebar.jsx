function Sidebar({ setPage }) {
  return (
    <aside className="sidebar">
      <h2>PulseBoard</h2>

      <nav>
        <p onClick={() => setPage("dashboard")}>Dashboard</p>

        <p onClick={() => setPage("projects")}>Projects</p>

        <p onClick={() => setPage("settings")}>Settings</p>
      </nav>
    </aside>
  )
}

export default Sidebar