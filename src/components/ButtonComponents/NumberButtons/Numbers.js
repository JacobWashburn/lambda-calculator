import React, {useState} from "react";
import {numbers} from '../../../data'
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
        numbersList.map((num) => {
            if (num === '0') {
                return (
                    <button className='numButt zero' key={num}>{num}</button>
                )
            } else {
                return (
                    <button className='numButt ' key={num}>{num}</button>
                )
            }
        })

    )


};
export default Numbers

