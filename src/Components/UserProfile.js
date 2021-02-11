import React, { useEffect, useState } from 'react';
import FlashMessage from 'react-flash-message';
import PropTypes from 'prop-types';
import axios from 'axios';
import './UserProfile.css'

export const UserProfile = ({ userData }) => {
    const backend_url = 'http://localhost:5000' //'https://rangereveal.aimeeoz.com'
    const initState = {
        energy_min: '',
        energy_max: '',
        protein_min: '',
        protein_max: '',
        carb_min: '',
        carb_max: '',
        fat_min: '',
        fat_max: '',
        fiber_min: '',
        fiber_max: ''
    }

    const [userGoals, setUserGoals] = useState(initState);
    const [errorMessage, setErrorMessage] = useState(null);

    const onInputChange = (event) => {
        const newUserGoal = {
            ...userGoals
        };
        newUserGoal[event.target.name] = event.target.value
        setUserGoals(newUserGoal);
    }
    const updateGoals = (userGoals) => {
        console.log(userGoals);
        axios.post(`${backend_url}/api/curr_user`, userGoals)
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
        setUserGoals(initState);
    }

    return (
        <div>
            <h6>#GOALS</h6>
            <form
                className="new-newFood-form__form"
                onSubmit={onFormSubmit}>
                <div className="UserSubmissionForm__food-inputs">
                    {console.log('userProfile')}
                    {console.log(userData)}
                    {console.log(userGoals)}
                    <ul>
                        <li>
                    <label/> Energy Min:
                    <input
                        name='energy_min'
                        placeholder={userData ? `${userData.energy_min} kcal`: '1800 kcal'}
                        value={userGoals.energy_min}
                        type='text'
                        onChange={onInputChange}
                    />
                    </li>
                    <li>
                    <label/> Energy Max:
                    <input
                        name='energy_max'
                        placeholder={userData ? `${userData.energy_max} kcal` : '3000 kcal'}
                        value={userGoals.energy_max}
                        type='text'
                        onChange={onInputChange}
                    />
                    </li>
                    <li>
                    <label/> Protein Min:
                    <input
                        name='protein_min'
                        placeholder={userData ? `${userData.protein_min} g` : '45 g'}
                        value={userGoals.protein_min}
                        type='text'
                        onChange={onInputChange}
                    />
                    </li>
                    <li>
                    <label/> Protein Max:
                    <input
                        name='protein_max'
                        placeholder={userData ? `${userData.protein_max} g` : '150 g'}
                        value={userGoals.protein_max}
                        type='text'
                        onChange={onInputChange}
                    />
                    </li>
                    <li>
                    <label/> Carb Min:
                    <input
                        name='carb_min'
                        placeholder={userData ? `${userData.carb_min} g` : '20 g'}
                        value={userGoals.carb_min}
                        type='text'
                        onChange={onInputChange}
                    />
                    </li>
                    <li>
                    <label/> Carb Max:
                    <input
                        name='carb_max'
                        placeholder={userData ? `${userData.carb_max} g` : '80 g'}
                        value={userGoals.carb_max}
                        type='text'
                        onChange={onInputChange}
                    />
                    </li>
                    <li>
                    <label/> Fat Min:
                    <input
                        name='fat_min'
                        placeholder={userData ? `${userData.fat_min} g` : '20 g'}
                        value={userGoals.fat_min}
                        type='text'
                        onChange={onInputChange}
                    />
                    </li>
                    <li>
                    <label/> Fat Max:
                    <input
                        name='fat_max'
                        placeholder={userData ? `${userData.fat_max} g` : '70 g'}
                        value={userGoals.fat_max}
                        type='text'
                        onChange={onInputChange}
                    />
                    </li>
                    <li>
                    <label/> Fiber Min:
                    <input
                        name='fiber_min'
                        placeholder={userData ? `${userData.fiber_min} g` : '25 g'}
                        value={userGoals.fiber_min}
                        type='text'
                        onChange={onInputChange}
                    />
                    </li>
                    <li>
                    <label/> Fiber Max:
                    <input
                        name='fiber_max'
                        placeholder={userData ? `${userData.fiber_max} g` : '50 g'}
                        value={userGoals.fiber_max}
                        type='text'
                        onChange={onInputChange}
                    />
                    </li>
                    </ul>
                </div>
                <div className="UserSubmissionForm__submit">
                    <input
                        type="submit"
                        value="Update Goals"
                        className="UserSubmissionForm__submit-btn" 
                      />
                </div>
            </form>
        </div>
    )
}