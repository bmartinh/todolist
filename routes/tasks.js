const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const auth = require("../middleware/auth");

const User = require("../models/User");
const Task = require("../models/Task");

// @route GET api/tasks
// @desc Get list of tasks for a user
// @access Private
router.get("/", auth, async (req, res) => {
   try {
      const tasks = await Task.find({ user: req.user.id }).sort({
         date: -1
      });
      res.json(tasks);
   } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Server Error" });
   }
});

// @route POST api/tasks
// @desc Create a new task for a user
// @access Private
router.post(
   "/",
   auth,
   [check("name", "Name is required").not().isEmpty()],
   async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }

      const { name, description, urgent, date, completed } = req.body;
      try {
         const newTask = new Task({
            name,
            description,
            urgent,
            date,
            completed,
            user: req.user.id
         });

         const task = await newTask.save();
         res.send(task);
      } catch (error) {
         console.log(error.message);
         return res.status(500).json({ msg: "Server error" });
      }
   }
);

// @route PUT api/tasks:id
// @desc Update task
// @access Private
router.put("/:id", auth, async (req, res) => {
   const { name, description, urgent, date, completed } = req.body;

   const taskFields = {};
   if (name) taskFields.name = name;
   if (description) taskFields.description = description;
   if (urgent) taskFields.urgent = urgent;
   if (date) taskFields.date = date;
   if (completed) taskFields.completed = completed;

   try {
      let task = await Task.findById(req.params.id);
      if (!task) return res.status(404).json({ msg: "Task not found" });

      //Make sure user owns contact
      if (task.user.toString() !== req.user.id) {
         return res.status(401).json({ msg: "Not authorized" });
      }

      task = await Task.findByIdAndUpdate(
         req.params.id,
         { $set: taskFields },
         { new: true }
      );

      res.json(task);
   } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "Server error" });
   }
});

// @route DELETE api/tasks:id
// @desc Delete task
// @access Private
router.delete("/:id", auth, async (req, res) => {
   try {
      let task = await Task.findById(req.params.id);
      if (!task) return res.status(404).json({ msg: "Task not found" });

      //Make sure user owns contact
      if (task.user.toString() !== req.user.id) {
         return res.status(401).json({ msg: "Not authorized" });
      }

      await Task.findByIdAndRemove(req.params.id);

      res.json({ msg: "Task removed" });
   } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "Server error" });
   }
});

module.exports = router;
