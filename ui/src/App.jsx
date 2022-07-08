import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    // talk to flexbox parent as opposed to another div
    <>
      {/* <div id="box1">box1</div>
      <div id="box2">box2</div> */}
      <Navbar></Navbar>
      <Container
        maxWidth={false}
        sx={{ backgroundColor: "orange", flexGrow: 1 }}
      >
        My container
      </Container>
    </>
  );
}

export default App;
