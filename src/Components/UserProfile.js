import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './UserProfile.css'

export const UserProfile = () => {
    const [userGoals, setUserGoals] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        axios.get(`/api/user`)
            .then((response) => {
                console.log(response.data);
                setUserGoals(response.data);
                setErrorMessage('');
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, [])


    const onInputChange = (event) => {
        const newUserGoal = {
            ...userGoals
        };
        newUserGoal[event.target.name] = event.target.value
        setUserGoals(newUserGoal);
    }
    const updateGoals = (userGoals) => {
        console.log(userGoals);
        axios.post(`/api/user`, userGoals)
            .then((response) => {
                console.log(`added ${userGoals}`);
                const result = response.data;
                console.log(result);
                setErrorMessage('');
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        updateGoals(userGoals);
    }

    return (
        <div>
            <form
                className="form-group"
                onSubmit={onFormSubmit}>
                <div className="UserSubmissionForm__food-inputs">
                    {console.log('userProfile')}
                    {console.log(userGoals)}
                    <ul>
                        <li>
                            <label />Energy Min (kcal)
                    <input
                                name='energy_min'
                                value={userGoals.energy_min}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label />Energy Max (kcal)
                    <input
                                name='energy_max'
                                value={userGoals.energy_max}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label />Protein Min (g)
                    <input
                                name='protein_min'
                                value={userGoals.protein_min}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label />Protein Max (g)
                    <input
                                name='protein_max'
                                value={userGoals.protein_max}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label />Carb Min (g)
                    <input
                                name='carb_min'
                                value={userGoals.carb_min}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label /> Carb Max (g)
                    <input
                                name='carb_max'
                                value={userGoals.carb_max}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label />Fat Min (g)
                    <input
                                name='fat_min'
                                value={userGoals.fat_min}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label /> Fat Max (g)
                    <input
                                name='fat_max'
                                value={userGoals.fat_max}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label /> Fiber Min (g)
                    <input
                                name='fiber_min'
                                value={userGoals.fiber_min}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label /> Fiber Max (g)
                    <input
                                name='fiber_max'
                                value={userGoals.fiber_max}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                    </ul>
                </div>
                <div className="UserSubmissionForm__submit">
                    <input
                        type="submit"
                        value="Update Goals"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}