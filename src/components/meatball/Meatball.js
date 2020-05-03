import React from 'react'
import './Meatball.css'
const Meatball = () => {
    return(
        <React.Fragment>
            <img className="meatball1" src={require('../../assets/meatball.gif')} alt="bakso" />
            <img className="meatball2" src={require('../../assets/meatball.gif')} alt="bakso" />
            <img className="meatball3" src={require('../../assets/meatball.gif')} alt="bakso" />
        </React.Fragment>
    )
}

export default Meatball