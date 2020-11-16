import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import style from "./Total.module.css";

export default function Total({ expenses }) {
  let total = 0;
  expenses.map((exp) => (total += exp.amount));

  const totalAmount = expenses[0] ? (
    <Card>
      <Card.Header className={style.header_total} as="h5">
        Total
      </Card.Header>
      <Card.Body>
        <Card.Title>Total Spent: ${total.toFixed(2)}</Card.Title>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
      </Card.Body>
    </Card>
  ) : null;
  return <div>{totalAmount}</div>;
}
