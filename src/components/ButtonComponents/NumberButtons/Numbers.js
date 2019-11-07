import React, {useState} from "react";
import {numbers} from '../../../data'
import NumberButton from './NumberButton'
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 


//Import your array data to from the provided data file


const Numbers = () => {
    // STEP 2 - add the imported data to state
    const [numbersList] = useState(numbers)
    // const createButtons = numbers.map((num)=> {
    //     return (
    //         <button key={num} onClick={() => console.log(num)}>{num}</button>
    //     )
    // })
    // console.log(createButtons)
    return (
        numbersList.map((num, index) => {
            if (num === '0') {
                return (
                    <NumberButton class='numButt zero' k={index} number={num}/>
                )
            } else {
                return (
                    <NumberButton class='numButt ' k={index} number={num}/>
                )
            }
        })

    )


};
export default Numbers

