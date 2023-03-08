import foods from './foods.json';
import './App.css';
import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [food, setFoods] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  const handleAddFoodForm = (newFood) => {
    setFoods([...food, newFood]);
    setShowForm(false);
  };

  return (
    <div className="App">
      <Button onClick={handleShowForm}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>
      {showForm && <AddFoodForm handleAddFoodForm={handleAddFoodForm} />}

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((elem, i) => (
          <FoodBox key={i} food={elem} />
        ))}
      </Row>
    </div>
  );
}

export default App;
