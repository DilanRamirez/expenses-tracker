import React from "react";
import { Pie } from "react-chartjs-2";
import { Container, Card, Button } from "react-bootstrap";

export default function LineChart({ expenses, budget }) {
  let totalSpent = 0;
  expenses.map((data) => (totalSpent += data.amount));

  let totalBudget = 0;
  budget.map((data) => (totalBudget += data.amount));

  const lineChart = expenses[0] ? (
    <Pie
      data={{
        labels: ["Expenses", "Budget"],
        datasets: [
          {
            data: [totalSpent, totalBudget],
            label: "$",
            borderColor: ["#f06966", "#6abe83"],
            backgroundColor: ["#f0696647", "#6abe8333"],
            fill: true,
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: { display: true, text: "Budget vs Expenses" },
      }}
    />
  ) : null;
  return (
    <div>
      <Card>{lineChart}</Card>
    </div>
  );
}
