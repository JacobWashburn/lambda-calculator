import React from "react";


const SpecialButton = (props) => {
    return (
        <button className={props.class} key={props.k}>{props.char}</button>
    );
};

export default SpecialButton