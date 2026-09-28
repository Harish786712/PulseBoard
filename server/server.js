const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Project = require("./models/Project")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/pulseboard")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log("MongoDB connection error:", error))


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

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})