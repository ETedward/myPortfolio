import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo(props) {
    const style = useSpring({opacity : 1, from : {opacity: 0}})

    return (
        <animated.div className = "" style = {style}>
            <p className = "e-card-title"> {props.title} </p>
            <p className = "e-card-sub-title"> {props.subtitle} </p>
            <a href =  {props.link} target = " blank" rel = "noopener noreferer"> view </a>
        </animated.div>
    );
} 
export default CardInfo