import React from 'react';
import Hero from '../components/Hero'
import Carousel from '../components/carousel'

//import {Carousel} from 'react-bootstrap';

function PortfolioPage(props)
{
    return (
        <div> 
        <Hero title = {props.title} subtitle = {props.subtitle} text = {props.text}/>
        <Carousel/>
        </div>
    ); 
}

export default PortfolioPage