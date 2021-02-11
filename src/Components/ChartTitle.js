// from https://github.com/kelseyleftwich/svg-chart-blog/blob/master/src/components/ChartTitle.js
import React from 'react'
import PropTypes from 'prop-types'

const ChartTitle = ({text}) => (
    <h3 style={{textAlign: 'center', marginBottom: '-1em', color: "cyan"}}>{text}</h3>
);

ChartTitle.propTypes = {
    text: PropTypes.string.isRequired
}

export default ChartTitle;