import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './FoodSearchForm.css'
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import './FoodSearchForm.css'
export const FoodSearchForm = ({ getFood }) => {
    const initState = {
        name: ''
    }
    const [food, setFood] = useState(initState);

    const onInputChange = (event) => {
        const foodTerm = event.target.value;
        setFood(foodTerm);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        getFood(food);
        setFood(initState);
    }

    return (
        <div>
            <form
                className="new-food-form__form"
                onSubmit={onFormSubmit}>
                <TextField
                    placeholder="Search for a food..."
                    value={food.name}
                    type='text'
                    onChange={onInputChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />

            </form>
        </div>
    )
}