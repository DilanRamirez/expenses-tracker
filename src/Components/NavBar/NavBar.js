import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Expenses Tracker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} className="nav-link" to="/ExpenseList">
            Expense List
          </Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="/AddExpense">
            Add Expense
          </Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="/AddBudget">
            Add Budget
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
