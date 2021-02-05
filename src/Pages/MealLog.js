import React, { useState, useEffect } from 'react';
// import { Delete } from '../Components/Delete'
import axios from 'axios';
import './MealLog.css'

export const MealLog = () => {
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

  const deleteMeal = (time) => {
    const updatedMealLog = userMeals.filter((time) => {
      return userMeals.id.time !== time;
    })
    if (updatedMealLog.length < userMeals.length) {
      axios.delete(`/api/meal/${time}`)
        .then((response) => {
          console.log(response.data)
          setErrorMessage('removed meal');
        })
        .catch((error) => {
          setErrorMessage('Unable to delte from log');
        })
      setUserMeals();
    }
  }

  const showMeals = userMeals.map(
    (meal) => {
      console.log('userMeals:');
      console.log(userMeals);
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
      <section>
        {userMeals.length > 0 && showMeals}
      </section>
      {/* <Delete meal={meal} /> */}
      <hr></hr>
      {/* <Link to='/'>Back to meals</Link> */}
    </div>
  )
}