import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import StatsCards from "./components/StatsCards"
import Analytics from "./components/Analytics"
import Projects from "./components/Projects"

function App() {
  const [page, setPage] = useState("dashboard")

  return (
    <div className="app">
      <Sidebar setPage={setPage} />

      <main className="main-content">
        <Topbar />

        {page === "dashboard" && (
          <>
            <h1>PulseBoard Dashboard</h1>
            <StatsCards />
            <Analytics />
          </>
        )}

        {page === "projects" && (
          <Projects />
        )}

        {page === "settings" && (
          <h1>Settings</h1>
        )}
      </main>
    </div>
  )
}

export default App