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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getFood = (food) => {
    axios.get(`/${food}`)
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

  const showFoods = foodResult.map(
    (food) => {
      return (
        <div key={food.id} className='food-list'>
          <h1 className='food-list__food-name'>{food.name}</h1>
          <p>{food.energy.toFixed(2)} kcal</p>
          <p>{food.protein.toFixed(2)} g protein</p>
          <p>{food.carbohydrate.toFixed(2)} g carbohydrate</p>
          <p>{food.fat.toFixed(2)} g fat</p>
          <p>{food.fiber.toFixed(2)} g fiber</p>
        </div>)
    }
  )

  const addFood = (newFood) => {
    axios.post('/', newFood)
    .then((response) => {
      const updatedFoodData = response.data;
      console.log('updated:');
      console.log(updatedFoodData);
      setFoodResult(updatedFoodData);
      console.log('setFoodResult:');
      console.log(setFoodResult);
      setErrorMessage('');
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  }


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
        addFood={addFood} />
      </div>
      <Link to='/'>Back to foods</Link>
    </div>
  )
}