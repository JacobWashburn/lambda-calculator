import React from "react";


const NumberButton = (props) => {
    return (
        <button className={props.class} key={props.k}>{props.number}</button>

    );
};

export default NumberButton
