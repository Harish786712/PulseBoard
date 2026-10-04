require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Project = require("./models/Project")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log("MongoDB connection error:", error))

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find()

    res.json(projects)
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch projects",
      error: error.message
    })
  }
})

app.put("/api/projects/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      })
    }

    const oldStatus = project.status
    const newStatus = req.body.status

    project.name = req.body.name
    project.description = req.body.description
    project.status = newStatus
    project.dueDate = req.body.dueDate || null

    // Project is being completed for the first time
    if (
      newStatus === "Completed" &&
      oldStatus !== "Completed"
    ) {
      project.completedAt = new Date()
    }

    // Project changed from Completed to another status
    if (newStatus !== "Completed") {
      project.completedAt = null
    }

    const updatedProject = await project.save()

    res.json(updatedProject)
  } catch (error) {
    res.status(500).json({
      message: "Failed to update project",
      error: error.message
    })
  }
})

app.delete("/api/projects/:id", async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id)

    if (!deletedProject) {
      return res.status(404).json({
        message: "Project not found"
      })
    }

    res.json({
      message: "Project deleted successfully"
    })
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete project",
      error: error.message
    })
  }
})

app.post("/api/projects", async (req, res) => {
  try {
    const project = new Project(req.body)

    const savedProject = await project.save()

    res.status(201).json(savedProject)
  } catch (error) {
    res.status(500).json({
      message: "Failed to create project",
      error: error.message
    })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})