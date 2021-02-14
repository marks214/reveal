import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
                
                    style={{
                        backgroundColor: "cyan",
                        padding: "10%",
                        margin: "1%",
                        borderRadius: "5%",
                        fontSize:"50px"
                    }}
                    placeholder="Search for a food..."
                    value={food.name}
                    type='text'
                    onChange={onInputChange}
                    InputProps={{
                        style: {
                            color: "black",
                            marginBottom: "1%"
                        },
                        startAdornment: (
                            <InputAdornment
                            style={{
                                marginBottom: "12%"
                            }}>
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