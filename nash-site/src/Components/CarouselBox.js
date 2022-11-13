import React, { Component } from 'react';
import  Carousel  from 'react-bootstrap/Carousel';
import gos from '../assets/gos.jpg';
import nya from '../assets/nya.jpg';
import ostan from '../assets/ostan.jpg';

export default class CarouselBox extends Component{
    render(){
        return(
            <Carousel className="carslider">
                <Carousel.Item>
                    <img
                        width={700}
                        height={350} 
                        className='d-block'
                        src={gos}
                        alt="Лучший мужчина в мире"
                    />
                    <Carousel.Caption>
                        <h3>Гослинг</h3>
                        <p>Лучший мужчина в жизни</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={700}
                        height={350} 
                        className='d-block'
                        src={nya}
                        alt="Кисонька"
                    />
                    <Carousel.Caption>
                        <h3>Девушка с зонтиком</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={700}
                        height={350} 
                        className='d-block'
                        src={ostan}
                        alt="Остановка"
                    />
                    <Carousel.Caption>
                        <h3>Девушка на остановке</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )

    }
}