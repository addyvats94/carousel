import React from 'react'
import  './style.scss'

export default function CardLayout(props) {
    let colors = props.colors

    return (
        <div style={{ backgroundColor: colors[props?.count] }} className="carousel-card">
                    
        </div>
    )
}
