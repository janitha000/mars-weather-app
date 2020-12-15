import React from 'react'

const Wind = () => {
    return (
        <div className="wind">
            <h2 className="section-title ">Wind</h2>
            <p className="measurement wind--measurement">100 kmph</p>

            <div className="wind__direction">
                <p className="sr-only"> 45 deg</p>
                <div className="wind__arrow"></div>
            </div>

        </div>
    )
}

export default Wind
