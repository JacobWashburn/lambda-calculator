import React, {useState} from "react";
import {operators} from '../../../data'
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
    const [operator] = useState(operators)

  return (
    <div>
        {operator.map((item, index) => {
            return (
                <button key={index} onClick={() => console.log(item.char)}>{item.char}</button>
            )
        })}
    </div>
  );
};

export default Operators
