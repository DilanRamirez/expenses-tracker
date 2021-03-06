const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected Database Successfully");
});

const expensesRouter = require("./routes/expense");
const budgetRouter = require("./routes/budget");

app.use("/expense", expensesRouter);
app.use("/budget", budgetRouter);

app.listen(port, () => {
  console.log(`server on port: ${port}`);
});
