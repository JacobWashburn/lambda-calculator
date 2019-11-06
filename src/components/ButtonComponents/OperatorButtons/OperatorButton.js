import React from "react";


const OperatorButton = (props) => {
    return (

        <button className={props.class} key={props.k}>{props.operator}</button>

    );
};

export default OperatorButton
