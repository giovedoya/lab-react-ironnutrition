import foods from "./foods.json";
import './App.css';
import React, { useState } from "react";
import { Row, Divider, Button } from 'antd';
import FoodBox from "./components/FoodBox";




function App() {

  const [food, setFoods] = useState(foods)

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods.map((elem, i) => <FoodBox key={i} food={elem}/>)}    
      </Row>      
    </div>
  );
}

export default App;
