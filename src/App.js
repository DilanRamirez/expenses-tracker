import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Components
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import ExpenseList from "./Components/ExpenseList/ExpenseList";
import AddExpense from "./Components/AddExpense/AddExpense";
import AddBudget from "./Components/AddBudget/AddBudget";
import EditExpense from "./Components/EditExpense/EditExpense";

function App() {
  return (
    <Router>
      <Container>
        <Route path="/" exact component={Home} />
      </Container>
      <NavBar />
      <Container>
        <Route path="/ExpenseList" component={ExpenseList} />
        <Route path="/AddExpense" component={AddExpense} />
        <Route path="/AddBudget" component={AddBudget} />
        <Route path="/edit/:id" component={EditExpense} />
      </Container>
    </Router>
  );
}

export default App;
