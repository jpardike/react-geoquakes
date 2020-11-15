import React from "react";

const Quakes = (props) => {
  const quakeArr = props.quakes.map((quakeObj) => {
    return <p key={quakeObj.id}>{quakeObj.properties.title}</p>
  });
  return (
    <div id="info">
      {quakeArr}
    </div>
  );
}

export default Quakes;
