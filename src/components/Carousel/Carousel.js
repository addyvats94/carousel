import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

//project imports
import  './style.scss'
import CardLayout from './CardLayout';
import Button from './Button/Button'

export default function Carousel() {

    let array = [1,2,3,4,5,6,7];
    const colors = ['#C8F1FF','#F4D4FF','#EBFAEE','#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const transitionTime = 400;
    const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
    const smooth = `transform ${transitionTime}ms ease`;
    const buttonWrapper = {
        display:"inline-flex",
        color: "red",
        fontSize: "25px",
        textAlign: "center",
        margin:"12px",
    }

    return (
        <div>
            <div className="carousel-container" ref={ref => {
            console.log(ref);
           }}>
                {array.map( (ele, i) => 
                <CardLayout count={i} colors={colors}/>
                )}
            </div>
            <div style={buttonWrapper}>
                <Button type="carouselButton" title="<" color="grey" borderRadius="4px"/>
                <Button type="carouselButton" title=">" color="grey" borderRadius="4px"/>
            </div>
         </div>
    )
}
