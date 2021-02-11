import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserGraphs } from './UserGraphs'
import './MealLog.css'

export const MealLog = ({ userName }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [userMeals, setUserMeals] = useState([]);
  const backend_url = 'http://localhost:5000'//'https://rangereveal.aimeeoz.com'

  useEffect(() => {
    axios.get(`${backend_url}/api/meal`)
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
    axios.post(`${backend_url}/api/delete_meal`, meal)
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
        <UserGraphs userMeals={userMeals} backend_url={backend_url}/>
      </div>
    </div>
  )
}