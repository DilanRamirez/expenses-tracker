const router = require("express").Router();
let Budget = require("../models/budget.model");

router.route("/").get((req, res) => {
  Budget.find()
    .then((budget) => res.json(budget))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const amount = Number(req.body.amount);
  const date = Date.parse(req.body.date);

  const newBudget = new Budget({
    username,
    description,
    amount,
    date,
  });

  console.log(newBudget);

  newBudget
    .save()
    .then(() => res.json("Budget added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Budget.findById(req.params.id)
    .then((budget) => res.json(budget))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Budget.findByIdAndDelete(req.params.id)
    .then(() => res.json("Budget deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Budget.findById(req.params.id)
    .then((budget) => {
      budget.username = req.body.username;
      budget.description = req.body.description;
      budget.duration = Number(req.body.duration);
      budget.date = Date.parse(req.body.date);

      Budget.save()
        .then(() => res.json("Budget updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
