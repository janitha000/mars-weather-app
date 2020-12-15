import React from 'react'
import Date from './Date'
import Tempreture from './Tempreture'
import Wind from './Wind'
import Info from './Info'
import Unit from './Unit'
import './CurrentWeather.css'


const CurrentWeather = () => {
    return (
        <div className="current-weather">
            <h1 className="main-title">Latest weather at Elysium Planitia</h1>
            <Date />
            <Tempreture />
            <Wind />
            <Info />
            <Unit />

        </div>
    )
}

export default CurrentWeather
