import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

import style from "./TotalBudget.module.css";
export default function TotalBudget({ budget, expenses }) {
  const [exp, setExpenses] = useState([]);

  let totalBudget = 0;
  budget.map((exp) => (totalBudget += exp.amount));

  let id = budget.map((exp) => exp._id);

  let totalSpent = 0;
  expenses.map((exp) => (totalSpent += exp.amount));

  let avaliable = totalBudget - totalSpent;

  const totalAmount = budget[0] ? (
    <Card>
      <Card.Header className={style.header_budget} as="h5">
        Budget
      </Card.Header>
      <Card.Body>
        <Card.Title>Total Budget: ${totalBudget.toFixed(2)}</Card.Title>
        <Card.Text>Avaliable: ${avaliable.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  ) : null;
  return <div>{totalAmount}</div>;
}
