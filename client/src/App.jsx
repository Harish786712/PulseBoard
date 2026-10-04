import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import StatsCards from "./components/StatsCards"
import Analytics from "./components/Analytics"
import Projects from "./components/Projects"
import Settings from "./components/Settings"
import DashboardExtras from "./components/DashboardExtras"

function App() {
  const [page, setPage] = useState("dashboard")

  const today = new Date()

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  })

  return (
    <div className="app">
      <Sidebar setPage={setPage} />

      <main className="main-content">
        <Topbar />

        {page === "dashboard" && (
          <div className="dashboard-page">

            <div className="dashboard-greeting">
              <div>
                <h1>Good afternoon, Harish 👋</h1>

                <p>
                  Here's what's happening with your projects today.
                </p>
              </div>

              <span>{formattedDate}</span>
            </div>

            <StatsCards />

            <Analytics />

            <DashboardExtras />

          </div>
        )}

        {page === "projects" && (
          <Projects />
        )}

        {page === "settings" && (
          <Settings />
        )}

      </main>
    </div>
  )
}

export default App