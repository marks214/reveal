// from: https://github.com/kelseyleftwich/svg-chart-blog/blob/master/src/components/AxisLabel.js
import React from "react";

const style = {
  display: "inline-block",
  width: '100%',
  textAlign: 'center',
  color: "white",
  boxSizing: "border-box"
};

const rotateStyles = {
  transform: "rotate(-90deg)",
  width: 35,
  transformOrigin: "center",
  marginTop: 50,
  marginRight: 20,
  boxSizing: "border-box"

}

const Label = ({text, rotate}) => (
  <div>
    <span style={{...style, ...(rotate ? rotateStyles : {})}}>{text}</span>
  </div>
);

export default Label;