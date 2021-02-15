// from: https://github.com/kelseyleftwich/svg-chart-blog/blob/master/src/components/AxisLabel.js
import React from "react";

const style = {
  display: "block",
  width: '100%',
  textAlign: 'center',
  color: "#78d7e3",
};

const rotateStyles = {
  transform: "rotate(-90deg)",
  width: 35,
  transformOrigin: "center",
  marginTop: 50,
  marginRight: 20

}

const Label = ({text, rotate}) => (
  <div>
    <span style={{...style, ...(rotate ? rotateStyles : {})}}>{text}</span>
  </div>
);

export default Label;