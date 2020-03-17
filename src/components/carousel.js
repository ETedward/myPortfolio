import React from 'react';
import Card from './card.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import abc from '../images/giraffe.jpg'
import def from '../images/color.png'
import ghk from '../images/int.png'

class Carousel extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Stories',
                    subTitle: 'Select Pieces from my writings',
                    imgSrc: abc,
                    // link: ,
                    selected: false
                },
                {
                    id: 1,
                    title: 'Podcasts',
                    subTitle: 'Checkout my podcasts here',
                    imgSrc: def,
                    // link:
                    selected: false
                },
                {
                    id: 2,
                    title: 'Code',
                    subTitle: 'Projects that make a difference',
                    imgSrc: ghk,
                    // link:
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        // loop through and if not the one we selected set to false
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item= {item} click = {(event => this.handleCardClick(item.id, event))} key = {item.id} />
        })
    }

    render() {
        return (
            <Container fluid = {true}>
                <Row className = "justify-content-around"> 
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;