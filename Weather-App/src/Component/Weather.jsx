import React from 'react'
import './weather.css'
function Weather(props) {
  return (
    <div id="card">
      <h2> Current Weather</h2>
      <h4> Location: New York City</h4>
      <h4> Temperature: {props.temperature}°C</h4>
      <h4> Wind Speed: {props.windspeed} km/h</h4>
      <h4> Direction: {props.winddirection}°</h4>
    </div>
  )
}

export default Weather