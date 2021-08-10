import React from "react";

export default function Button(props) {

const buttonStyle = { 
    color: props.color,
    borderRadius: "10px",
    margin:'10px',
    backgroundColor: 'darkgray',
    padding: '10px'
}
    return (
            <div type="button" style={buttonStyle}>{props.title}</div>
    )
} 