import React from "react";
import { Link } from "react-router-dom";

import style from "./BudgetTable.module.css";

const Budget = ({ description, amount, date, _id, deleteExercise }) => (
  <tr>
    <td>{description}</td>
    <td>{amount}</td>
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

export default function BudgetTable({ budget, deleteExercise }) {
  const getExpenses = budget[0]
    ? budget.map((exp) => (
        <Budget
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
