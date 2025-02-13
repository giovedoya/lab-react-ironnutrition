import { Card, Col, Button } from 'antd';


function FoodBox({food, handleDelete}) {
  const handleDeleteFood = () => {
    handleDelete(food.name)
  }
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 350, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={handleDeleteFood}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;