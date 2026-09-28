const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true,
    enum: ["Active", "Completed", "Pending"]
  }
})

module.exports = mongoose.model("Project", projectSchema)