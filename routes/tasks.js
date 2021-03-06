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
router.get("/:id/:date", async (req, res) => {
   try {
      const tasks = await Task.find({
         user: req.params.id,
         date: req.params.date
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
   [
      check("name", "Name is required").not().isEmpty(),
      check("user", "User is required").not().isEmpty(),
      check("date", "Date is required").not().isEmpty()
   ],
   async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }

      const { name, description, urgent, date, completed, user } = req.body;
      try {
         const newTask = new Task({
            name,
            description,
            urgent,
            date,
            completed,
            user
            //user: req.user.id
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
router.put("/:id", async (req, res) => {
   const { name, description, urgent, date, completed, user } = req.body;

   const taskFields = {};
   if (name) taskFields.name = name;
   if (description) taskFields.description = description;
   taskFields.urgent = urgent;
   if (date) taskFields.date = date;
   taskFields.completed = completed;
   if (user) taskFields.user = user;

   try {
      let task = await Task.findById(req.params.id);

      if (!task) return res.status(404).json({ msg: "Task not found" });

      //Make sure user owns contact
      if (task.user !== user) {
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
router.delete("/:id", async (req, res) => {
   try {
      let task = await Task.findById(req.params.id);
      if (!task) return res.status(404).json({ msg: "Task not found" });

      //Make sure user owns contact
      // if (task.user.toString() !== req.user) {
      //    return res.status(401).json({ msg: "Not authorized" });
      // }

      await Task.findByIdAndRemove(req.params.id);

      res.json({ msg: "Task removed" });
   } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "Server error" });
   }
});

module.exports = router;
