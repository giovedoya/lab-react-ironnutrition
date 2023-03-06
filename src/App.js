import foods from "./foods.json";
import './App.css';
import AppI from "./App.example";
import React, { useState } from "react";
import { Row, Divider, Button } from 'antd';




function App() {

  const [food, setFoods] = useState(foods)

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {food.map((elem, i) => {
        return (
        <div key={i}>
          <p>{elem.name}</p>
          <img src={elem.image} alt={elem.name} width={100} />
          </div>
          )
      })}
      </Row>
    </div>
  );
}

export default App;
