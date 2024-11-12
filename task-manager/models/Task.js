const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: { type: String, required: true },
  deadline: { type: Date, required: true },
  reminder: { type: Date, required: true },
});

module.exports = mongoose.model('Task', taskSchema);
