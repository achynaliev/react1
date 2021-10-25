import React, { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import MainBody from "./components/main/mainSection";
import View from "./components/View/view.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const [todos, setTodos] = useState([]);
  function addTask(val) {
    let obj = {
      title: val,
      id: Date.now(),
    };
    let todosArr = [...todos, obj];
    setTodos(todosArr);
  }
  console.log(todos);
  return (
    <div>
      <Header arr={[1, 2, 3, 4, 5]} addTask={addTask} />
      <View todos={todos} />
      <MainBody />
      <Footer />
    </div>
  );
}

function About() {
  return (
    <div>
      <Header arr={[1, 2, 3, 4, 5]} />
      <div>ABOUT</div>
      <Footer />
    </div>
  );
}

export default App;
