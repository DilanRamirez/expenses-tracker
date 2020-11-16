import React from "react";
import { Link } from "react-router-dom";

import style from "./ExpensesTable.module.css";
function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}
const Expense = ({
  username,
  description,
  amount,
  date,
  _id,
  deleteExercise,
}) => (
  <tr className={style.header_expenses}>
    <td>{username}</td>
    <td>{description}</td>
    <td>$ {amount}</td>
    <td>{formatDate(date)}</td>
    <td>
      <Link to={"/edit/" + _id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          deleteExercise(_id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default function ExpensesTable({ expenses, deleteExercise }) {
  const getExpenses = expenses[0]
    ? expenses.map((exp) => (
        <Expense
          username={exp.username}
          description={exp.description}
          amount={exp.amount}
          date={exp.date}
          _id={exp._id}
          deleteExercise={deleteExercise}
          key={exp._id}
        />
      ))
    : null;

  return <tbody>{getExpenses}</tbody>;
}
