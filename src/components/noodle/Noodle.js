import React from 'react'
import './Noodle.css'
const Noodle = () => {
    return(
        <React.Fragment>
            <img className="noodle" src={require('../../assets/noodle.png')} alt="plate" />
        </React.Fragment>
    )
}

export default Noodle