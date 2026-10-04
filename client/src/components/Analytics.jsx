import { useEffect, useState } from "react";
import RevenueChart from "./RevenueChart";

function Analytics() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const activeProjects = projects.filter(
    (project) => project.status === "Active"
  ).length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  return (
    <div className="analytics-section">

      <div className="revenue-card">

        <div className="card-header">
          <div>
            <h3>Projects Created vs Completed</h3>
            <p>Project activity over the last 7 days</p>
          </div>

          <select>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>

        <RevenueChart />

      </div>

      <div className="status-card">

        <h3>Project Status</h3>

        <div className="status-item">
          <span>Active</span>
          <strong>{activeProjects}</strong>
        </div>

        <div className="status-item">
          <span>Completed</span>
          <strong>{completedProjects}</strong>
        </div>

        <div className="status-item">
          <span>Total</span>
          <strong>{projects.length}</strong>
        </div>

        <div className="status-item">
          <span>Overdue</span>
          <strong>0</strong>
        </div>

      </div>

    </div>
  );
}

export default Analytics;