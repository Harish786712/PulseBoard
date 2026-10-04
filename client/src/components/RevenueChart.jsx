import { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

function RevenueChart() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          "https://pulseboard-67v2.onrender.com/api/projects"
        )

        const projects = await response.json()

        if (!response.ok) {
          console.error("Failed to fetch projects")
          return
        }

        const today = new Date()
        const last7Days = []

        for (let i = 6; i >= 0; i--) {
          const date = new Date(today)
          date.setHours(0, 0, 0, 0)
          date.setDate(today.getDate() - i)

          last7Days.push(date)
        }

        const chartData = last7Days.map((date) => {
          const year = date.getFullYear()
          const month = date.getMonth()
          const day = date.getDate()

          const created = projects.filter((project) => {
            if (!project.createdAt) return false

            const projectDate = new Date(project.createdAt)

            return (
              projectDate.getFullYear() === year &&
              projectDate.getMonth() === month &&
              projectDate.getDate() === day
            )
          }).length

          const completed = projects.filter((project) => {
            if (!project.completedAt) return false

            const completedDate = new Date(project.completedAt)

            return (
              completedDate.getFullYear() === year &&
              completedDate.getMonth() === month &&
              completedDate.getDate() === day
            )
          }).length

          return {
            day: date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
            created,
            completed,
          }
        })

        setData(chartData)
      } catch (error) {
        console.error("Error fetching projects:", error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="revenue-chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis
            domain={[0, "auto"]}
            allowDecimals={false}
          />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="created"
            name="Created"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
          />

          <Bar
            dataKey="completed"
            name="Completed"
            fill="#8b5cf6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart