import React from 'react'

const Unit = () => {
    return (
        <div className="unit">
            <label for="cel">°C</label>
            <input type="radio" id="cel" name="unit" checked />
            <button className="unit__toggle"></button>
            <label for="fah">°F</label>
            <input type="radio" id="fah" name="unit" />

        </div>
    )
}

export default Unit


