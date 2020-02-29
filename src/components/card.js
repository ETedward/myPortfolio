import React from 'react';
import CardInfo from '../components/cardinfo.js'

function Card(props) {
    return(
        <div>
           <p>card works!</p>
           <img className = "" src = {props.item.imgSrc} alt = {props.item.imgSrc}  />
            { props.item.selected && <CardInfo title = {props.item.title} subtitle = {props.item.subtitle} />}
        </div>
    )
}

export default Card;