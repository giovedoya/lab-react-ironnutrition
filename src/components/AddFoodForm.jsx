import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm({ handleAddFoodForm }) {
  const initialState = {
    name: '',
    image: '',
    calories: '85',
    servings: '1',
  };
  const [newFood, setNewFood] = useState(initialState);

  const handleChange = (e) => {
    setNewFood((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddFoodForm(newFood);
    setNewFood(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={newFood.name}
        onChange={handleChange}
        required
      />
      <label>Image</label>
      <Input
        type="text"
        name="image"
        required
        value={newFood.image}
        onChange={handleChange}
      />
      <label>Calories</label>
      <Input
        type="number"
        name="calories"
        required
        value={newFood.calories}
        onChange={handleChange}
      />
      <label>Servings</label>
      <Input
        type="number"
        name="servings"
        required
        value={newFood.servings}
        onChange={handleChange}
      />
      <button type="submit" className="btn">
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
