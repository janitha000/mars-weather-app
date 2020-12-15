import CurrentWeather from './components/CurrentWeather'
import PreviouseWeather from './components/PrevWeather'
import './App.css'
import { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch'

const API_KEY = 'DEMO_KEY'
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`

function App() {
  const { isLoading, data, error } = useFetch(API_URL)



  return (
    <div className="App">
      <CurrentWeather currentData={data[0]} />
      <PreviouseWeather prevData={data} />
    </div>
  );
}

export default App;


