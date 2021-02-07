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
          <img className='food-list__food-image' src={food.image} alt={food.name} />
          <h1 className='food-list__food-name'>{food.name}</h1>
          <br/>
          <h5 className='food-list__food-category'>{food.energy.toFixed(2)} kcal</h5>
          <h5 className='food-list__food-category'>{food.protein.toFixed(2)} g protein</h5>
          <h5 className='food-list__food-category'>{food.carbohydrate.toFixed(2)} g carbohydrate</h5>
          <h5 className='food-list__food-category'>{food.fat.toFixed(2)} g fat</h5>
          <h5 className='food-list__food-category'>{food.fiber.toFixed(2)} g fiber</h5>
          <button className='food-list__food-btn' onClick={() => addFoodAsMeal(food)}>Add</button>
   
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
      <hr></hr>
      <div>
        <UserSubmissionForm 
        createFood={createFood} />
      </div>
      {/* <h5nk to='/'>Back to foods</Link> */}
    </div>
  )
}