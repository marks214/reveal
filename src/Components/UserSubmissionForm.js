import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './UserSubmissionForm.css'

export const UserSubmissionForm = () => {
    const initState = {
        name: '',
        protein: '',
        carbohydrate: '',
        fat: '',
        fiber: ''
    }
    
    const [newFood, setNewFood] = useState(initState);

    const onInputChange = (event) => {
        const foodData = {
            ...newFood
        };
        foodData[event.target.name] = [event.target.value]
        setNewFood(foodData);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        sendSubmission(newFood);
        setNewFood(initState);
    }

    return (
        <div>
            <h1>Add Custom Food:</h1>
            <form
                className="new-newFood-form__form"
                onSubmit={onFormSubmit}>
                    <input 
                    name=''
                    placeholder=''
                    value={}
                    type='text'
                    onChange={onInputChange}
                    />
                    <input 
                    name=''
                    placeholder=''
                    value={}
                    type='text'
                    onChange={onInputChange}
                    />
                    <input 
                    name=''
                    placeholder=''
                    value={}
                    type='text'
                    onChange={onInputChange}
                    />
                    <input 
                    name=''
                    placeholder=''
                    value={}
                    type='text'
                    onChange={onInputChange}
                    />
                    <input 
                    name=''
                    placeholder=''
                    value={}
                    type='text'
                    onChange={onInputChange}
                    />
                

            </form>
        </div>
    )
}