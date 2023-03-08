import foods from './foods.json';
import './App.css';
import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFoods] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  const handleAddFoodForm = (newFood) => {
    setFoods([...food, newFood]);
    setShowForm(false);
  };

  const handleSearch = (value) => {
    console.log('Dad ', value);
    setSearchValue(value);
  };

  return (
    <div className="App">
      <Button onClick={handleShowForm}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>
      {showForm && <AddFoodForm handleAddFoodForm={handleAddFoodForm} />}
      <div className="search_container">
        <Search handleSearchValue={handleSearch} />
      </div>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food
          .filter((elem) =>
            elem.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((elem, i) => (
            <FoodBox key={i} food={elem} />
          ))}
      </Row>
    </div>
  );
}

export default App;
