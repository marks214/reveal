import React, { useState, useEffect } from 'react';
import authAxios from '../utils/authAxios';
import { UserGraphs } from './UserGraphs'
import './MealLog.css'

export const MealLog = ({ userName }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [userMeals, setUserMeals] = useState([]);

  useEffect(() => {
    authAxios.get(`/api/meal`)
      .then(response => {
        const result = response.data;
        console.log(result);
        setUserMeals(result);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      })
  }, [])


  const deleteMeal = (meal) => {
    authAxios.post(`/api/delete_meal`, meal)
    .then((response) => {
      const result = response.data;
      console.log(result);
      setUserMeals(result);
      setErrorMessage('');
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  }

  const showMeals = userMeals.map(
    (meal) => {
      return (
        <div key={meal.id} className='meal-list'>
          <h1 className='meal-list__meal-name'>{meal.name}</h1>
          <p>{meal.energy.toFixed(2)} kcal</p>
          <p>{meal.protein.toFixed(2)} g protein</p>
          <p>{meal.carbohydrate.toFixed(2)} g carbohydrate</p>
          <p>{meal.fat.toFixed(2)} g fat</p>
          <p>{meal.fiber.toFixed(2)} g fiber</p>
          <p>recorded at: {meal.time}</p>
          <button onClick={() => deleteMeal(meal)}>Delete</button>
        </div>)
    }
  )

  return (
    <div>
      <div>
        {console.log(userMeals.length)}
        {userMeals.length > 0 && showMeals}
      </div>
      <hr></hr>
      <div>
        <UserGraphs userMeals={userMeals}/>
      </div>
    </div>
  )
}