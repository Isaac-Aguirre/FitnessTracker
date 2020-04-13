const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date()
      },
    exercises: {
        type: Array,
        default: []
      }
})

const User = mongoose.model("User", userSchema);

module.exports = User;