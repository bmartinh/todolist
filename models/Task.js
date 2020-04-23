const mongoose = require("mongoose");

const tasksSchema = mongoose.Schema({
   // user: {
   //    type: mongoose.Schema.Types.ObjectId,
   //    ref: "user"
   // },
   user: {
      type: String,
      required: true
   },
   name: {
      type: String,
      required: true
   },
   description: {
      type: String
   },
   urgent: {
      type: Boolean,
      default: false
   },
   completed: {
      type: Boolean,
      default: false
   },
   date: {
      type: String,
      required: true
   }
});

module.exports = mongoose.model("tasks", tasksSchema);
