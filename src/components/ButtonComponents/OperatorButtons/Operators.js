import React, {useState} from "react";
import {operators} from '../../../data'
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
    // STEP 2 - add the imported data to state
    const [operator] = useState(operators)

    return (
        operator.map((item, index) => {
            return (
                <button key={index} className='operButt'>{item.char}</button>
            )
        })
    );
};

export default Operators
