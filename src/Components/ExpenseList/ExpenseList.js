import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";

// import Exercise from "../Exercise/Exercise";
import style from "./ExpenseList.module.css";
// Components

import Total from "./Total/Total";
import ExpensesTable from "./Table/ExpensesTable";
import TotalBudget from "./TotalBudget/TotalBudget";
import BudgetTable from "./BudgetTable/BudgetTable";
import LineChart from "../Charts/LineChart/LineChart";
import Doughnut from "../Charts/Doughnut/Doughnut";
import Dollar from "../Lottie/Dollar";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/expense/")
      .then((res) => setExpenses(res.data))
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/budget/")
      .then((res) => setBudget(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(expenses);

  const deleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/expense/" + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setExpenses(expenses.filter((elt) => elt._id !== id));
  };

  const deleteBudget = (id) => {
    axios
      .delete("http://localhost:5000/budget/" + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setExpenses(expenses.filter((elt) => elt._id !== id));
  };

  return (
    <div>
      <Container className="ml-auto mr-auto container_expenses">
        <h1 className="text-center mt-5 mb-5">Expenses List</h1>
        <hr></hr>
        <Row className={style.center_elements}>
          <Table striped bordered hover>
            <thead className={style.header_expenses}>
              <tr>
                <th>Name</th>
                <th>About</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Opts</th>
              </tr>
            </thead>

            <ExpensesTable
              expenses={expenses}
              deleteExercise={deleteExercise}
            />
          </Table>
        </Row>
        <hr></hr>
        <Row>
          <Col className={style.center_elements}>
            <Total expenses={expenses} />
          </Col>
          <Col className={style.center_elements}>
            <TotalBudget budget={budget} expenses={expenses} />
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col className={style.center_elements}>
            <LineChart expenses={expenses} />
          </Col>
          <Col className={style.center_elements}>
            <Table striped bordered hover>
              <thead className={style.header_budget}>
                <tr>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Options</th>
                </tr>
              </thead>

              <BudgetTable budget={budget} deleteExercise={deleteBudget} />
            </Table>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col className={style.center_elements}>
            <Dollar />
          </Col>
          <Col className={style.center_elements}>
            <Doughnut expenses={expenses} budget={budget} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
