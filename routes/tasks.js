const express = require("express");
const router = express.Router();

// @route GET api/tasks
// @desc Get list of tasks for a user
// @access Private
router.get("/", (req, res) => {
   res.send("Get list of tasks");
});

// @route POST api/tasks
// @desc Log in a new task for a user
// @access Private
router.post("/", (req, res) => {
   res.send("Create a new task");
});

// @route PUT api/tasks:id
// @desc Update task
// @access Private
router.put("/:id", (req, res) => {
   res.send("Update a task");
});

// @route DELETE api/tasks:id
// @desc Delete task
// @access Private
router.delete("/:id", (req, res) => {
   res.send("Delete a task");
});

module.exports = router;
