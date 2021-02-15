import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserGraphs } from './UserGraphs'
import './MealLog.css'

export const MealLog = ({ user }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [userMeals, setUserMeals] = useState([]);

  useEffect(() => {
    axios.get(`/api/meal`)
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
    axios.post(`/api/delete_meal`, meal)
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
        <div key={meal.id} className='container'>
          <div className='card'>
            <h1 className='card-title'>{meal.name}</h1>
            <p className='card-body'>{meal.energy.toFixed(2)} kcal</p>
            <p className='card-body'>{meal.protein.toFixed(2)} g protein</p>
            <p className='card-body'>{meal.carbohydrate.toFixed(2)} g carbohydrate</p>
            <p className='card-body'>{meal.fat.toFixed(2)} g fat</p>
            <p className='card-body'>{meal.fiber.toFixed(2)} g fiber</p>
            <p className='card-body'>{meal.time}</p>
            <button className='btn btn-primary mx-auto d-block' onClick={() => deleteMeal(meal)}>Delete</button>
          </div>
        </div>)
    }
  )

  return (
    <div className='row'>
      <div className='column'>
        <h1>{user.username}'s Food Journal</h1>
        {console.log(userMeals.length)}
        {userMeals.length > 0 && showMeals}
      </div>
      <hr></hr>
      <div className='column'>
        <UserGraphs userMeals={userMeals} user={user} />
      </div>
    </div>
  )
}