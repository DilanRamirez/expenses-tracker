import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import style from "./EditExpense.module.css";

export default function EditExpense(props) {
  // Data
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/expense/" + props.match.params.id)
      .then((response) => {
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onChangeDate = (date) => {
    setDate(date);
    console.log(date);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const expense = {
      username: username,
      description: description,
      amount: Number(amount),
      date: date,
    };

    console.log(expense);

    axios
      .post(
        "http://localhost:5000/expense/update/" + props.match.params.id,
        expense
      )
      .then((res) => console.log(res.data));

    window.location = "/ExpenseList";
  };

  return (
    <div className={style.user_container}>
      <Form className={style.user_container_form} onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={onChangeUsername}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Password"
            onChange={onChangeDescription}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter amount"
            onChange={onChangeAmount}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <div className={style.datePicker}>
            <Form.Label>Date</Form.Label>
            <DatePicker
              selected={date}
              onChange={onChangeDate}
              className={style.dateInput}
            />
          </div>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className={style.exercise_button}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
