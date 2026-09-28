import { useState } from "react"

function Projects() {
  const [showForm, setShowForm] = useState(false)

  const [projects, setProjects] = useState([
    {
      name: "Website Redesign",
      description: "Redesign company website",
      status: "Active",
    },
    {
      name: "Mobile App",
      description: "Customer mobile application",
      status: "Completed",
    },
    {
      name: "Analytics Dashboard",
      description: "Internal analytics project",
      status: "Pending",
    },
  ])

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("Active")

  async function handleCreateProject() {
  if (name.trim() === "" || description.trim() === "") {
    alert("Please fill in all fields")
    return
  }

  const newProject = {
    name: name,
    description: description,
    status: status,
  }

  try {
    const response = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    })

    const savedProject = await response.json()

    if (!response.ok) {
      alert(savedProject.message || "Failed to create project")
      return
    }

    setProjects([...projects, savedProject])

    setName("")
    setDescription("")
    setStatus("Active")
    setShowForm(false)

  } catch (error) {
    console.error(error)
    alert("Could not connect to server")
  }
}

  return (
    <div className="projects-page">

      <div className="projects-header">
        <div>
          <h1>Projects</h1>
          <p>Manage and track your projects</p>
        </div>

        <button
          className="new-project-btn"
          onClick={() => setShowForm(true)}
        >
          + New Project
        </button>
      </div>

      {showForm && (
        <div className="project-form-card">
          <h3>Create New Project</h3>

          <input
            type="text"
            placeholder="Project name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Active</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>

          <div className="form-actions">
            <button
              className="create-btn"
              onClick={handleCreateProject}
            >
              Create Project
            </button>

            <button
              className="cancel-btn"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>

            <span
              className={`project-status ${project.status.toLowerCase()}`}
            >
              {project.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Projects