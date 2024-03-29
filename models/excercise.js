const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Please Enter Exercise name",
      },
      type: {
        type: String,
        trim: true,
        required: "Please Enter Exercise type",
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "Please Enter Exercise ",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  ],
});

// Create mongoose model 'workout' and apply workout schema to that model
const Workout = mongoose.model("workout", WorkoutSchema);

// Export workout model
module.exports = Workout;
