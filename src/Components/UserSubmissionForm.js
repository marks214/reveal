import React, { useEffect, useState } from 'react';
import FlashMessage from 'react-flash-message';
import PropTypes from 'prop-types';
import './UserSubmissionForm.css'

export const UserSubmissionForm = ({ createFood }) => {
    const initState = {
        name: '',
        energy: '',
        protein: '',
        carbohydrate: '',
        fat: '',
        fiber: ''
    }

    const [newFood, setNewFood] = useState(initState);
    // const [isSubmitted, setIsSubmitted] = useState(false);

    const onInputChange = (event) => {
        const newFoodData = {
            ...newFood
        };
        newFoodData[event.target.name] = event.target.value
        setNewFood(newFoodData);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        createFood(newFood);
        <FlashMessage duration={50000} persistOnHover={true}>
            <p>{newFood.name} has been added!</p>
        </FlashMessage>
        setNewFood(initState);
    }

    return (
        <div>
            <h1>Create Custom Food:</h1>
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
                        className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}