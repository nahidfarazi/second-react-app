import React from 'react'

const CountValue = ({incrementValue, decrementValue, handleIncrementChange, handleDecrementChange}) => {
  return (
    <div>
        <div>
            <label htmlFor="incrementValue">Increment Value</label>
            <input type="number" value={incrementValue} onChange={handleIncrementChange}/>
        </div>
        <div>
            <label htmlFor="decrementValue">decrement Value</label>
            <input type="number" value={decrementValue} onChange={handleDecrementChange}/>
        </div>
    </div>
  )
}

export default CountValue