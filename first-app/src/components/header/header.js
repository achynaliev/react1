import React, { useState } from "react";
import "./header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = (props) => {
  const [value, setValue] = useState("");
  console.log(props.arr);
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
        <li>{props.name}</li>
        <input type="text" onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={() => props.addTask(value)}>Add</button>
      </ul>
    </nav>
  );
};

export default Header;

//rsc
