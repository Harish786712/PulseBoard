import { useState } from "react"

function Sidebar({ setPage }) {
  const [activePage, setActivePage] = useState("dashboard")

  function handlePageChange(page) {
    setActivePage(page)
    setPage(page)
  }

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-mark">P</div>
        <h2>PulseBoard</h2>
      </div>

      {/* Main Navigation */}
      <div className="sidebar-section">

        <p className="sidebar-section-title">
          WORKSPACE
        </p>

        <nav>

          <button
            className={`sidebar-item ${
              activePage === "dashboard" ? "active" : ""
            }`}
            onClick={() => handlePageChange("dashboard")}
          >
            <span className="sidebar-icon">⌂</span>
            <span>Dashboard</span>
          </button>

          <button
            className={`sidebar-item ${
              activePage === "projects" ? "active" : ""
            }`}
            onClick={() => handlePageChange("projects")}
          >
            <span className="sidebar-icon">▣</span>
            <span>Projects</span>
          </button>

          <button
            className={`sidebar-item ${
              activePage === "settings" ? "active" : ""
            }`}
            onClick={() => handlePageChange("settings")}
          >
            <span className="sidebar-icon">⚙</span>
            <span>Settings</span>
          </button>

        </nav>

      </div>

      {/* Spacer */}
      <div className="sidebar-spacer"></div>

      {/* Upgrade Card */}
      <div className="sidebar-upgrade">

        <div className="upgrade-icon">✦</div>

        <h3>Upgrade your plan</h3>

        <p>
          Get more projects and unlock advanced features.
        </p>

        <button>
          Upgrade
        </button>

      </div>

      {/* User Profile */}
      <div className="sidebar-profile">

        <div className="profile-avatar">
          H
        </div>

        <div className="profile-info">
          <strong>Harish</strong>
          <span>Free Plan</span>
        </div>

        <span className="profile-menu">•••</span>

      </div>

    </aside>
  )
}

export default Sidebar