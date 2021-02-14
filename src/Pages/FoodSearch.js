import React, { useState, useEffect } from 'react';
import { FoodSearchForm } from '../Components/FoodSearchForm';
import axios from 'axios';
import './FoodSearch.css'
import { UserSubmissionForm } from '../Components/UserSubmissionForm'


export const FoodSearch = () => {
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
        <div key={food.id} className='container'>
          <div className='card'>
          <h1 className='card-title'>{food.name}</h1>
            <img className='card-img-top' src={food.image} alt={food.name} />
            <div className='card-body'></div>
            <h5 className='card-text'>{food.energy.toFixed(2)} kcal</h5>
            <h5 className='card-text'>{food.protein.toFixed(2)} g protein</h5>
            <h5 className='card-text'>{food.carbohydrate.toFixed(2)} g carbohydrate</h5>
            <h5 className='card-text'>{food.fat.toFixed(2)} g fat</h5>
            <h5 className='card-text'>{food.fiber.toFixed(2)} g fiber</h5>
            <button className='btn btn-primary mx-auto d-block' onClick={() => addFoodAsMeal(food)}>Add</button>
          </div>
        </div>)
    }
  )

  return (
    <div className='row'>
      <div className='column'>
        <FoodSearchForm
          getFood={getFood} />
        {foodResult.length > 0 && showFoods}
      </div>
      <hr></hr>
      <div className='column'>
        <UserSubmissionForm
          createFood={createFood} />
      </div>
    </div>
  )
}