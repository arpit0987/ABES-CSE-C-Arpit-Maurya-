import React, { useEffect, useState } from 'react';
import Weather from './Component/Weather';

function App() {
   const [weather, setWeather] = useState([]);
    useEffect(() => {
  fetch('https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true')
    .then(res => res.json())
    .then(data => {
      console.log("Fetched weather data:", data);
      setWeather(data.current_weather);
    })
    .catch(err => console.error("Fetch error:", err));
}, []);
  return (
   
   <div>
      {weather && (
        <Weather
          temperature={Weather.temperature}
          windspeed={Weather.windspeed}
          winddirection={Weather.winddirection}
        />
      )}
    </div>
  )
}

export default App