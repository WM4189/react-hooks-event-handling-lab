import React, {useState} from 'react';

function Keypad(){
    function handleChange(e){
        // console.log(e.target.value)
        console.log('Entering password...')
    }
    return (
        <>
        <input 
        type="password"
        onChange={handleChange} 
        />
        </>
    )
}

export default Keypad