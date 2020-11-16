import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Container, Card, Button } from "react-bootstrap";

export default function LineChart({ expenses }) {
  const lineChart = expenses[0] ? (
    <Line
      data={{
        labels: expenses.map((data) => new Date(data.date).toDateString()),
        datasets: [
          {
            data: expenses.map((data) => data.amount),
            label: "Expenses",
            borderColor: "#f06966",
            backgroundColor: "#f0696647",
            fill: true,
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: "Expenses Chart" },
      }}
    />
  ) : null;
  return (
    <div>
      <Card>{lineChart}</Card>
    </div>
  );
}
