import React, {useState} from "react";
import {operators} from '../../../data'
import OperatorButton from './OperatorButton'
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
    // STEP 2 - add the imported data to state
    const [operator] = useState(operators)

    return (
        operator.map((item, index) => {
            return (
                <OperatorButton k={index} class='operButt' operator={item.char}/>
            )
        })
    );
};

export default Operators
