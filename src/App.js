import React from "react";
import "./App.css";
import Card from "./Components/Card";
import State from "./Components/State";

const App = () => {
  return (
    <div className="container">
      <Card title="Title 1" />
      <Card title="Title 2" />
      <Card title="Title 3" />
      <Card title="Title 4" />
      <Card title="Title 5" />
      <Card title="Title 6" />
      <Card title="Title 7" />
      <Card title="Title 8" />
      <State />
    </div>
  );
};

export default App;
