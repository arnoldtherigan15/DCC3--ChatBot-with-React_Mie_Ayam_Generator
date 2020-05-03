import React, { useState } from 'react'
import './Base.css'
import Noodle from '../noodle/Noodle'
import Meatball from '../meatball/Meatball'
import Pangsit from '../pangsit/Pangsit'
import CustomChatbot from "../chatbot/CustomChatbot"

const Base = () => {
    const [noodle, setNoodle] = useState(false)
    const [pangsit, setPangsit] = useState(false)
    const [meatball, setMeatball] = useState(false)

    const clickEventHandler = ingredient => {
        if (ingredient === "noodle") {
          setNoodle(!noodle)
        } else if (ingredient === "meatball") {
            setMeatball(!meatball)
        } else if (ingredient === "pangsit") {
            setPangsit(!pangsit)
        }
    }

    const isNoodle = noodle && <Noodle />;
    const isMeatball = meatball && <Meatball />;
    const isPangsit = pangsit && <Pangsit />;

    return(
        <React.Fragment>
            <img className="piring" src={require('../../assets/piring.png')} alt="plate" />
            <img className="logo" src={require('../../assets/logo.png')} alt="logo" />
            {isNoodle}
            {isMeatball}
            {isPangsit}
            <CustomChatbot eventHandler={clickEventHandler} />
        </React.Fragment>
    )
}

export default Base