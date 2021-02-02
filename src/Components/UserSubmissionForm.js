import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './UserSubmissionForm.css'

export const UserSubmissionForm = ({ addFood }) => {
    const initState = {
        name: '',
        energy: '',
        protein: '',
        carbohydrate: '',
        fat: '',
        fiber: ''
    }

    const [newFood, setNewFood] = useState(initState);

    const onInputChange = (event) => {
        const newFoodData = {
            ...newFood
        };
        newFoodData[event.target.name] = event.target.value
        setNewFood(newFoodData);
    }

    const FormSuccess = (foodName) => {
        return (
            <div clasName="UserSubmissionForm-content-right">
                <div className="form-successs">
                    <h3>{foodName} has been added!</h3>
                </div>
            </div>
        )
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        addFood(newFood);
        setNewFood(initState);
        FormSuccess(newFood.name);
    }

    return (
        <div>
            <h6>Add Custom Food:</h6>
            <form
                className="new-newFood-form__form"
                onSubmit={onFormSubmit}>
                <div className="UserSubmissionForm__food-inputs">
                    <input
                        name='name'
                        placeholder='name'
                        value={newFood.name}
                        type='text'
                        onChange={onInputChange}
                        required
                    />
                    <input
                        name='energy'
                        placeholder='kcal (calories)'
                        value={newFood.energy}
                        type='text'
                        onChange={onInputChange}
                        required
                    />
                    <input
                        name='protein'
                        placeholder='grams of protein'
                        value={newFood.protein}
                        type='text'
                        onChange={onInputChange}
                        required
                    />
                    <input
                        name='carbohydrate'
                        placeholder='grams of carbohydrate'
                        value={newFood.carbohydrate}
                        type='text'
                        onChange={onInputChange}
                        required
                    />
                    <input
                        name='fat'
                        placeholder='grams of fat'
                        value={newFood.fat}
                        type='text'
                        onChange={onInputChange}
                        required
                    />
                    <input
                        name='fiber'
                        placeholder='grams of fiber'
                        value={newFood.fiber}
                        type='text'
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="UserSubmissionForm__submit">
                    <input
                        type="submit"
                        value="Add Food"
                        className="UserSubmissionForm__submit-btn" />
                </div>
                {/* {isSubmitted && FormSuccess} */}
            </form>
        </div>
    )
}