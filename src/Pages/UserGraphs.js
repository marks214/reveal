import React, { useState, useEffect } from 'react';
import { Chart, Axis, Tooltip, Geom, Coord, Line, Point } from "bizcharts";
import axios from 'axios';
import './UserGraphs.css'

export const UserGraphs = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [userMeals, setUserMeals] = useState([]);

    const parseUserMealData = (userMeals) => {
        console.log(userMeals);
        console.log('hello');
        let totalsPerDay = {
            kcal: {
                'Mon': 0,
                'Tue': 0,
                'Wed': 0,
                'Thu': 0,
                'Fri': 0,
                'Sat': 0,
                'Sun': 0
            },
            carbohydrate: {
                'Mon': 0,
                'Tue': 0,
                'Wed': 0,
                'Thu': 0,
                'Fri': 0,
                'Sat': 0,
                'Sun': 0
            },
            protein: {
                'Mon': 0,
                'Tue': 0,
                'Wed': 0,
                'Thu': 0,
                'Fri': 0,
                'Sat': 0,
                'Sun': 0
            },
            fat: {
                'Mon': 0,
                'Tue': 0,
                'Wed': 0,
                'Thu': 0,
                'Fri': 0,
                'Sat': 0,
                'Sun': 0
            },
            fiber: {
                'Mon': 0,
                'Tue': 0,
                'Wed': 0,
                'Thu': 0,
                'Fri': 0,
                'Sat': 0,
                'Sun': 0
            },
        };
        for (let i = 0; i < userMeals.length; i++) {
            if (userMeals[i]['time'] === 1) {
                totalsPerDay['kcal']['Mon'] += userMeals[i]['kcal']
                totalsPerDay['carbohydrate']['Mon'] += userMeals[i]['carbohydrate']
                totalsPerDay['protein']['Mon'] += userMeals[i]['protein']
                totalsPerDay['fat']['Mon'] += userMeals[i]['fat']
                totalsPerDay['fiber']['Mon'] += userMeals[i]['fiber']
            } else if (userMeals[i]['time'] === 2) {
                totalsPerDay['kcal']['Tue'] += userMeals[i]['kcal']
                totalsPerDay['carbohydrate']['Tue'] += userMeals[i]['carbohydrate']
                totalsPerDay['protein']['Tue'] += userMeals[i]['protein']
                totalsPerDay['fat']['Tue'] += userMeals[i]['fat']
                totalsPerDay['fiber']['Tue'] += userMeals[i]['fiber']
            } else if (userMeals[i]['time'] === 3) {
                totalsPerDay['kcal']['Wed'] += userMeals[i]['kcal']
                totalsPerDay['carbohydrate']['Wed'] += userMeals[i]['carbohydrate']
                totalsPerDay['protein']['Wed'] += userMeals[i]['protein']
                totalsPerDay['fat']['Wed'] += userMeals[i]['fat']
                totalsPerDay['fiber']['Wed'] += userMeals[i]['fiber']
            } else if (userMeals[i]['time'] === 4) {
                totalsPerDay['kcal']['Thu'] += userMeals[i]['kcal']
                totalsPerDay['carbohydrate']['Thu'] += userMeals[i]['carbohydrate']
                totalsPerDay['protein']['Thu'] += userMeals[i]['protein']
                totalsPerDay['fat']['Thu'] += userMeals[i]['fat']
                totalsPerDay['fiber']['Thu'] += userMeals[i]['fiber']
            } else if (userMeals[i]['time'] === 5) {
                totalsPerDay['kcal']['Fri'] += userMeals[i]['kcal']
                totalsPerDay['carbohydrate']['Fri'] += userMeals[i]['carbohydrate']
                totalsPerDay['protein']['Fri'] += userMeals[i]['protein']
                totalsPerDay['fat']['Fri'] += userMeals[i]['fat']
                totalsPerDay['fiber']['Fri'] += userMeals[i]['fiber']
            } else if (userMeals[i]['time'] === 6) {
                totalsPerDay['kcal']['Sat'] += userMeals[i]['kcal']
                totalsPerDay['carbohydrate']['Sat'] += userMeals[i]['carbohydrate']
                totalsPerDay['protein']['Sat'] += userMeals[i]['protein']
                totalsPerDay['fat']['Sat'] += userMeals[i]['fat']
                totalsPerDay['fiber']['Sat'] += userMeals[i]['fiber']
            } else if (userMeals[i]['time'] === 7) {
                totalsPerDay['kcal']['Sun'] += userMeals[i]['kcal']
                totalsPerDay['carbohydrate']['Sun'] += userMeals[i]['carbohydrate']
                totalsPerDay['protein']['Sun'] += userMeals[i]['protein']
                totalsPerDay['fat']['Sun'] += userMeals[i]['fat']
                totalsPerDay['fiber']['Sun'] += userMeals[i]['fiber']
            }
        }
        console.log('totes:');
        console.log(totalsPerDay);

        return (
            <div>
                {/* <Chart height={500} data={userMeals} forceFit>
                    <Axis name="Calories/day" label={{ formatter: val => `${val}°C` }} />
                    <Line position="month*temperature" size={2} color={'city'} />
                    <Point position="month*temperature" size={4} color={'city'} />
                </Chart> */}
            </div>
        )
    }

    const getWeekMeals = () => {
        axios.get(`/api/meals_week`)
            .then(response => {
                const result = response.data;
                console.log(result);
                setUserMeals(result);
                parseUserMealData(userMeals);
            })
            .catch((error) => {
                setErrorMessage(error.message);
                console.log(errorMessage);
            })
    }


    return (
        <div>
            <h1>UserGraphs</h1>
            <button onClick={() => getWeekMeals()}>See Graph</button>
        </div>
    )

}