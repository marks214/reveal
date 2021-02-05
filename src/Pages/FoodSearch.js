import React, { useState, useEffect } from 'react';
import { FoodSearchForm } from '../Components/FoodSearchForm';
// import { Delete } from '../Components/Delete'
import {
  useParams,
  Link
} from 'react-router-dom';
import axios from 'axios';
import './FoodSearch.css'
import { UserSubmissionForm } from '../Components/UserSubmissionForm'


export const FoodSearch = () => {
  // const { food } = useParams();
  const [foodResult, setFoodResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [meal, setMeal] = useState(null);

  const getFood = (food) => {
    axios.get(`/api/food/${food}`)
      .then(response => {
        const result = response.data;
        console.log(result);
        setFoodResult(result);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      })
  }

  const addFoodAsMeal = (selectedFood) => {
    console.log(selectedFood);
    axios.post(`/api/meal`, selectedFood)
      .then((response) => {
      console.log(`added ${selectedFood} as meal`);
      const result = response.data;
      console.log(result);
      setMeal(result);
      setErrorMessage('');
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  }

  const createFood = (newFood) => {
    axios.post(`/api/food/${newFood}`, newFood)
    .then((response) => {
      const updatedFoodData = response.data;
      setFoodResult(updatedFoodData);
      setErrorMessage('');
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  }

  const showFoods = foodResult.map(
    (food) => {
      console.log(food.image);
      return (
        <div key={food.id} className='food-list'>
          <img src={food.image} alt={food.name} />
          <h1 className='food-list__food-name'>{food.name}</h1>
          <p>{food.energy.toFixed(2)} kcal</p>
          <p>{food.protein.toFixed(2)} g protein</p>
          <p>{food.carbohydrate.toFixed(2)} g carbohydrate</p>
          <p>{food.fat.toFixed(2)} g fat</p>
          <p>{food.fiber.toFixed(2)} g fiber</p>
          <button onClick={() => addFoodAsMeal(food)}>Add</button>
        </div>)
    }
  )

  return (
    <div>
      <FoodSearchForm
        getFood={getFood} />
      <section>
        {foodResult.length > 0 && showFoods}
      </section>
      {/* <Delete food={food} /> */}
      <hr></hr>
      <div>
        <UserSubmissionForm 
        createFood={createFood} />
      </div>
      {/* <Link to='/'>Back to foods</Link> */}
    </div>
  )
}