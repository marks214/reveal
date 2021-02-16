import React from 'react';
import './About.css'

export const About = () => {
    return (
        <div className='container'>
            <h3>Range Reveal is a food tracking app. It's a space where you can set nutrient goals (ranges) and see (reveal) a graph of your macronutrients and energy totals per week. <br />
                <a href='/home'>Login</a> to get started!</h3>
            <div className='gradient'>
                <img src="https://images.unsplash.com/photo-1586878018438-9ba76da09d95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt='cherry submerged in carbonated water' />

                <img src="https://images.unsplash.com/photo-1562319926-4dbdecfa9962?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80" alt='number pad of keyboard' />

                <img src="https://images.unsplash.com/photo-1539956071741-0c1918d19bde?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80" alt='abstract wood-cut of graph with peaks and valleys' />
            </div>
        </div>
    )
}