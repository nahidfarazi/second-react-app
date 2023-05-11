import { useState } from 'react'
import Layout from '../components/Layout/Layout'
import Button from '../components/Button/Button'
import CountValue from '../components/countValue/CountValue'
const About = () => {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const [decrementValue, setDecrementValue] = useState(1)
  const increment = ()=>{
    setCount(count+incrementValue)
  }
  const decrement = () =>{
    setCount(count-decrementValue)
  }
  const handleIncrementChange = (e)=>{
    setIncrementValue(parseInt(e.target.value))
  }
  const handleDecrementChange = (e)=>{
    setDecrementValue(parseInt(e.target.value))
  }
  return (
    <>
        <Layout>
          <CountValue 
          handleIncrementChange={handleIncrementChange}
          handleDecrementChange={handleDecrementChange}
          incrementValue={incrementValue} 
          decrementValue={decrementValue} />
          <h1>Count:{count}</h1>
         <Button text="increment" variant="submit" event={increment}/>
         <Button text="decrement" variant="reset" event={decrement}/>
        </Layout>  
    </>
  )
}

export default About