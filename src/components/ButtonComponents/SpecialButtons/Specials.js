import React, {useState} from "react";
import {specials} from '../../../data'

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
    const [specialChar] = useState(specials)
  return (
    <div>
        {specialChar.map((item, index) => {
            return (
                <button key={index} onClick={() => console.log(item)}>{item}</button>
            )
        })}
    </div>
  );
};

export default Specials