const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  password: { type: String, required: true },
  batchId: { type: String, required: true }, // Store batch reference
  feesDue: { type: Number, default: 5000 }, // Default fees
});

module.exports = mongoose.model("Student", studentSchema);
