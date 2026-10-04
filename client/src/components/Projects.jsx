import { useEffect, useState } from "react"

function Projects() {
  const [showForm, setShowForm] = useState(false)
  const [editProjectId, setEditProjectId] = useState(null)

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
  const [dueDate, setDueDate] = useState("")

  // Fetch projects from MongoDB
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          "https://pulseboard-67v2.onrender.com/api/projects"
        )

        const data = await response.json()

        if (!response.ok) {
          console.error("Failed to fetch projects")
          return
        }

        setProjects(data)
      } catch (error) {
        console.error("Error fetching projects:", error)
      }
    }

    fetchProjects()
  }, [])

  // Delete project
  async function handleDeleteProject(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    )

    if (!confirmed) {
      return
    }

    try {
      const response = await fetch(
        `https://pulseboard-67v2.onrender.com/api/projects/${id}`,
        {
          method: "DELETE",
        }
      )

      const data = await response.json()

      if (!response.ok) {
        alert(data.message || "Failed to delete project")
        return
      }

      setProjects(
        projects.filter((project) => project._id !== id)
      )
    } catch (error) {
      console.error("Error deleting project:", error)
      alert("Could not connect to server")
    }
  }

  // Create project
  async function handleCreateProject() {
    if (name.trim() === "" || description.trim() === "") {
      alert("Please fill in all fields")
      return
    }

    const newProject = {
      name: name,
      description: description,
      status: status,
      dueDate: dueDate || null,
    }

    try {
      const response = await fetch(
        "https://pulseboard-67v2.onrender.com/api/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProject),
        }
      )

      const savedProject = await response.json()

      if (!response.ok) {
        alert(
          savedProject.message || "Failed to create project"
        )
        return
      }

      setProjects([...projects, savedProject])

      setName("")
      setDescription("")
      setStatus("Active")
      setDueDate("")
      setShowForm(false)
    } catch (error) {
      console.error(error)
      alert("Could not connect to server")
    }
  }

  // Update project
  async function handleUpdateProject() {
    if (name.trim() === "" || description.trim() === "") {
      alert("Please fill in all fields")
      return
    }

    const updatedProject = {
      name: name,
      description: description,
      status: status,
      dueDate: dueDate || null,
    }

    try {
      const response = await fetch(
        `https://pulseboard-67v2.onrender.com/api/projects/${editProjectId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProject),
        }
      )

      const savedProject = await response.json()

      if (!response.ok) {
        alert(
          savedProject.message || "Failed to update project"
        )
        return
      }

      setProjects(
        projects.map((project) =>
          project._id === editProjectId
            ? savedProject
            : project
        )
      )

      setName("")
      setDescription("")
      setStatus("Active")
      setDueDate("")
      setEditProjectId(null)
      setShowForm(false)
    } catch (error) {
      console.error("Error updating project:", error)
      alert("Could not connect to server")
    }
  }

  // Open edit form
  function handleEditProject(project) {
    setEditProjectId(project._id)
    setName(project.name)
    setDescription(project.description)
    setStatus(project.status)

    setDueDate(
      project.dueDate
        ? project.dueDate.substring(0, 10)
        : ""
    )

    setShowForm(true)
  }

  // Cancel form
  function handleCancelForm() {
    setName("")
    setDescription("")
    setStatus("Active")
    setDueDate("")
    setEditProjectId(null)
    setShowForm(false)
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
          onClick={() => {
            setEditProjectId(null)
            setName("")
            setDescription("")
            setStatus("Active")
            setDueDate("")
            setShowForm(true)
          }}
        >
          + New Project
        </button>
      </div>

      {showForm && (
        <div className="project-form-card">

          <h3>
            {editProjectId
              ? "Edit Project"
              : "Create New Project"}
          </h3>

          <input
            type="text"
            placeholder="Project name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Project description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Active</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <div className="form-actions">

            <button
              className="create-btn"
              onClick={
                editProjectId
                  ? handleUpdateProject
                  : handleCreateProject
              }
            >
              {editProjectId
                ? "Update Project"
                : "Create Project"}
            </button>

            <button
              className="cancel-btn"
              onClick={handleCancelForm}
            >
              Cancel
            </button>

          </div>
        </div>
      )}

      <div className="projects-grid">

        {projects.map((project) => (
          <div
            className="project-card"
            key={project._id}
          >

            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              {project.dueDate && (
                <p>
                  Due:{" "}
                  {new Date(project.dueDate).toLocaleDateString(
                    "en-US",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </p>
              )}
            </div>

            <div className="project-card-actions">

              <span
                className={`project-status ${project.status.toLowerCase()}`}
              >
                {project.status}
              </span>

              <button
                className="edit-btn"
                onClick={() =>
                  handleEditProject(project)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  handleDeleteProject(project._id)
                }
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Projects