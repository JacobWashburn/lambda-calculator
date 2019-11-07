import React, {useState} from "react";
import {specials} from '../../../data'
import SpecialButton from './SpecialButton'

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
    const [specialChar] = useState(specials)
  return (
      specialChar.map((char, index) => {
            return (
                <SpecialButton k={index} class='specialButt' char={char}/>
            )
      })
  );
};

export default Specials