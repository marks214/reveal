import React, { useState, useEffect } from 'react';
import authAxios from '../utils/authAxios';
import LineChart from "../Components/LineChart";
import Label from "../Components/AxisLabel";
import ChartTitle from "../Components/ChartTitle";
import './UserGraphs.css'

let data = {}

export const UserGraphs = ({ backend_url }) => {
    
    const [errorMessage, setErrorMessage] = useState(null);
    // const [userMeals, setUserMeals] = useState([]);
    const [isRevealed, setisRevealed] = useState(false);

    const parseUserMealData = (userMeals) => {
        console.log(userMeals);
        console.log('hello');
        data = {
            kcal: [
                { label: "Mon", x: 0, y: 0 },
                { label: "Tue", x: 1, y: 0 },
                { label: "Wed", x: 2, y: 0 },
                { label: "Thu", x: 3, y: 0 },
                { label: "Fri", x: 4, y: 0 },
                { label: "Sat", x: 5, y: 0 },
                { label: "Sun", x: 6, y: 0 }
            ],
            carbohydrate: [
                { label: "Mon", x: 0, y: 0 },
                { label: "Tue", x: 1, y: 0 },
                { label: "Wed", x: 2, y: 0 },
                { label: "Thu", x: 3, y: 0 },
                { label: "Fri", x: 4, y: 0 },
                { label: "Sat", x: 5, y: 0 },
                { label: "Sun", x: 6, y: 0 }
            ],
            protein: [
                { label: "Mon", x: 0, y: 0 },
                { label: "Tue", x: 1, y: 0 },
                { label: "Wed", x: 2, y: 0 },
                { label: "Thu", x: 3, y: 0 },
                { label: "Fri", x: 4, y: 0 },
                { label: "Sat", x: 5, y: 0 },
                { label: "Sun", x: 6, y: 0 }
            ],
            fat: [
                { label: "Mon", x: 0, y: 0 },
                { label: "Tue", x: 1, y: 0 },
                { label: "Wed", x: 2, y: 0 },
                { label: "Thu", x: 3, y: 0 },
                { label: "Fri", x: 4, y: 0 },
                { label: "Sat", x: 5, y: 0 },
                { label: "Sun", x: 6, y: 0 }
            ],
            fiber: [
                { label: "Mon", x: 0, y: 0 },
                { label: "Tue", x: 1, y: 0 },
                { label: "Wed", x: 2, y: 0 },
                { label: "Thu", x: 3, y: 0 },
                { label: "Fri", x: 4, y: 0 },
                { label: "Sat", x: 5, y: 0 },
                { label: "Sun", x: 6, y: 0 }
            ]
        }

        for (let i = 0; i < userMeals.length; i++) {
            if (userMeals[i]['time'] === 1) {
                data['kcal'][0]['y'] += userMeals[i]['energy']
                data['carbohydrate'][0]['y'] += userMeals[i]['carbohydrate']
                data['protein'][0]['y'] += userMeals[i]['protein']
                data['fat'][0]['y'] += userMeals[i]['fat']
                data['fiber'][0]['y'] += userMeals[i]['fiber']
            } else if (userMeals[i]['time'] === 2) {
                data['kcal'][1]['y'] += userMeals[i]['energy']
                data['carbohydrate'][1]['y'] += userMeals[i]['carbohydrate']
                data['protein'][1]['y'] += userMeals[i]['protein']
                data['fat'][1]['y'] += userMeals[i]['fat']
                data['fiber'][1]['y'] += userMeals[i]['fiber']
            } else if (userMeals[i]['time'] === 3) {
                data['kcal'][2]['y'] += userMeals[i]['energy']
                data['carbohydrate'][2]['y'] += userMeals[i]['carbohydrate']
                data['protein'][2]['y'] += userMeals[i]['protein']
                data['fat'][2]['y'] += userMeals[i]['fat']
                data['fiber'][2]['y'] += userMeals[i]['fiber']
            } else if (userMeals[i]['time'] === 4) {
                data['kcal'][3]['y'] += userMeals[i]['energy']
                data['carbohydrate'][3]['y'] += userMeals[i]['carbohydrate']
                data['protein'][3]['y'] += userMeals[i]['protein']
                data['fat'][3]['y'] += userMeals[i]['fat']
                data['fiber'][3]['y'] += userMeals[i]['fiber']
            } else if (userMeals[i]['time'] === 5) {
                data['kcal'][4]['y'] += userMeals[i]['energy']
                data['carbohydrate'][4]['y'] += userMeals[i]['carbohydrate']
                data['protein'][4]['y'] += userMeals[i]['protein']
                data['fat'][4]['y'] += userMeals[i]['fat']
                data['fiber'][4]['y'] += userMeals[i]['fiber']
            } else if (userMeals[i]['time'] === 6) {
                data['kcal'][5]['y'] += userMeals[i]['energy']
                data['carbohydrate'][5]['y'] += userMeals[i]['carbohydrate']
                data['protein'][5]['y'] += userMeals[i]['protein']
                data['fat'][5]['y'] += userMeals[i]['fat']
                data['fiber'][5]['y'] += userMeals[i]['fiber']
            } else if (userMeals[i]['time'] === 7) {
                data['kcal'][6]['y'] += userMeals[i]['energy']
                data['carbohydrate'][6]['y'] += userMeals[i]['carbohydrate']
                data['protein'][6]['y'] += userMeals[i]['protein']
                data['fat'][6]['y'] += userMeals[i]['fat']
                data['fiber'][6]['y'] += userMeals[i]['fiber']
            }
        }
        setisRevealed(true);
        console.log('here');
        console.log(data);


        // return (
        //     <div>
        //     </div>
        // )
    }

    const styles = {
        chartComponentsContainer: {
            display: 'grid', gridTemplateColumns: 'max-content 700px', alignItems: 'center'
        },
        chartWrapper: { maxWidth: 700, alignSelf: 'flex-start' }
    }

    const getWeekMeals = () => {
        authAxios.get(`/api/meals_week`)
            .then(response => {
                const result = response.data;
                console.log(result);
                parseUserMealData(result);
            })
            .catch((error) => {
                setErrorMessage(error.message);
                console.log(errorMessage);
            })
    }


    return (
        <div>
            <div>
                <h1>UserGraphs</h1>
                <button onClick={() => getWeekMeals()}>Reveal</button>
            </div>
            <div style={styles.chartComponentsContainer}>
                <div />
                {isRevealed &&
                    <ChartTitle text="ENERGY" />}
                {isRevealed && <Label text="kcal" rotate />}
                <div style={styles.chartWrapper}>
                    {isRevealed && <LineChart
                        width={500}
                        height={300}
                        data={data.kcal}
                        horizontalGuides={5}
                        precision={2}
                        verticalGuides={1}
                    />}
                </div>
                <div />
            </div>
            <div style={styles.chartComponentsContainer}>
                <div />
                {isRevealed &&
                    <ChartTitle text="CARBOHYDRATE" />}
                {isRevealed && <Label text="grams" rotate />}
                <div style={styles.chartWrapper}>
                    {isRevealed && <LineChart
                        width={500}
                        height={300}
                        data={data.carbohydrate}
                        horizontalGuides={5}
                        precision={2}
                        verticalGuides={1}
                    />}
                </div>
                <div />
            </div>
            <div style={styles.chartComponentsContainer}>
                <div />
                {isRevealed &&
                    <ChartTitle text="PROTEIN" />}
                {isRevealed && <Label text="grams" rotate />}
                <div style={styles.chartWrapper}>
                    {isRevealed && <LineChart
                        width={500}
                        height={300}
                        data={data.protein}
                        horizontalGuides={5}
                        precision={2}
                        verticalGuides={1}
                    />}
                </div>
                <div />
            </div>
            <div style={styles.chartComponentsContainer}>
                <div />
                {isRevealed &&
                    <ChartTitle text="FAT" />}
                {isRevealed && <Label text="grams" rotate />}
                <div style={styles.chartWrapper}>
                    {isRevealed && <LineChart
                        width={500}
                        height={300}
                        data={data.fat}
                        horizontalGuides={5}
                        precision={2}
                        verticalGuides={1}
                    />}
                </div>
                <div />
            </div>
            <div style={styles.chartComponentsContainer}>
                <div />
                {isRevealed &&
                    <ChartTitle text="FIBER" />}
                {isRevealed && <Label text="grams" rotate />}
                <div style={styles.chartWrapper}>
                    {isRevealed && <LineChart
                        width={500}
                        height={300}
                        data={data.fiber}
                        horizontalGuides={5}
                        precision={2}
                        verticalGuides={1}
                    />}
                </div>
                <div />
            </div>
        </div>
    )

}