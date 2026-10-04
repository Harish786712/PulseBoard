import { useEffect, useState } from "react";

function StatsCards() {
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

  const totalProjects = projects.length;

  const activeProjects = projects.filter(
    (project) => project.status === "Active"
  ).length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  // Calculate overdue projects
  const overdueProjects = projects.filter((project) => {
    if (!project.dueDate) return false;

    const dueDate = new Date(project.dueDate);
    const today = new Date();

    dueDate.setHours(23, 59, 59, 999);
    today.setHours(0, 0, 0, 0);

    return (
      dueDate < today &&
      project.status !== "Completed"
    );
  }).length;

  return (
    <div className="stats-grid">

      <div className="stat-card total-projects">
        <div className="stat-icon">📁</div>
        <p>Total Projects</p>
        <h2>{totalProjects}</h2>
        <span>Current total projects</span>
      </div>

      <div className="stat-card active-projects">
        <div className="stat-icon">⚡</div>
        <p>Active Projects</p>
        <h2>{activeProjects}</h2>
        <span>Currently active</span>
      </div>

      <div className="stat-card completed-projects">
        <div className="stat-icon">✓</div>
        <p>Completed</p>
        <h2>{completedProjects}</h2>
        <span>Successfully completed</span>
      </div>

      <div className="stat-card overdue-projects">
        <div className="stat-icon">◷</div>
        <p>Overdue</p>
        <h2>{overdueProjects}</h2>
        <span>Projects past their due date</span>
      </div>

    </div>
  );
}

export default StatsCards;