import React, { useState, useEffect } from 'react';
import { FoodSearchForm } from '../Components/FoodSearchForm';
// import { Delete } from '../Components/Delete'
import {
  useParams,
  Link
} from 'react-router-dom';
import axios from 'axios';


export const FoodSearch = () => {
  // const { food } = useParams();
  const [foodResult, setFoodResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

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
        <div key={food.id}>
          {food.name}
          <br />{food.energy} kcal
          <br />{food.protein} g protein
          <br />{food.carbohydrate} g carbohydrate
          <br />{food.fat} g fat
          <br />{food.fiber} g fiber
          <br />
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
    <Link to='/'>Back to foods</Link>
  </div>
)
}