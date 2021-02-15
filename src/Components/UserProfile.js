import React, { useEffect, useState } from 'react';
import FlashMessage from 'react-flash-message';
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
        <FlashMessage duration={50000} persistOnHover={true}>
            <p>#goals</p>
        </FlashMessage>
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
                            <label />Energy Min&nbsp;&nbsp;
                    <input
                                name='energy_min'
                                // placeholder={ }
                                value={userGoals.energy_min}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label />Energy Max&nbsp;&nbsp;
                    <input
                                name='energy_max'
                                // placeholder={ }
                                value={userGoals.energy_max}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label />Protein Min&nbsp;&nbsp;
                    <input
                                name='protein_min'
                                // placeholder={ }
                                value={userGoals.protein_min}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label />Protein Max&nbsp;&nbsp;
                    <input
                                name='protein_max'
                                // placeholder={ }
                                value={userGoals.protein_max}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label />Carb Min&nbsp;&nbsp;
                    <input
                                name='carb_min'
                                // placeholder={ }
                                value={userGoals.carb_min}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label /> Carb Max&nbsp;&nbsp;
                    <input
                                name='carb_max'
                                // placeholder={ }
                                value={userGoals.carb_max}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label />Fat Min&nbsp;&nbsp;
                    <input
                                name='fat_min'
                                // placeholder={ }
                                value={userGoals.fat_min}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label /> Fat Max&nbsp;&nbsp;
                    <input
                                name='fat_max'
                                // placeholder={ }
                                value={userGoals.fat_max}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label /> Fiber Min&nbsp;&nbsp;
                    <input
                                name='fiber_min'
                                // placeholder={ }
                                value={userGoals.fiber_min}
                                type='number'
                                onChange={onInputChange}
                            />
                        </li>
                        <li>
                            <label /> Fiber Max&nbsp;&nbsp;
                    <input
                                name='fiber_max'
                                // placeholder={ }
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