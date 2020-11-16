import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Coin from "../Lottie/Coin";

import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.container_home}>
      <Container>
        <h1>Welcome</h1>
        <h3>Expenses Tracker</h3>
        <Coin />

        <Link to={"/ExpenseList/"}>
          <Button className={style.home_button}>Get Started</Button>
        </Link>
      </Container>
    </div>
  );
}
