import React, { useRef, useState } from 'react'
import PrevioseDay from './PrevioseDay'

const PrevWeather = ({ prevData }) => {
    const [showPrevWeather, setShowPrevWeather] = useState(false)


    const showWeather = () => {
        setShowPrevWeather(prevVal => {
            return prevVal !== true
        })
    }

    return (
        <div className={`prev-weather ${showPrevWeather ? 'show-weather' : ''}`} >
            <button onClick={showWeather} for="weather-toggle" class="show-previous-weather"><span>&#8593;</span> <span class="sr-only">Show previous weather</span></button>

            <h2 className="main-title previose-weather__title">Previous 7 days</h2>
            <div className="previose-day">
                <PrevioseDay />
                <PrevioseDay />
                <PrevioseDay />
                <PrevioseDay />
                <PrevioseDay />
                <PrevioseDay />
                <PrevioseDay />
            </div>


        </div >
    )
}

export default PrevWeather
