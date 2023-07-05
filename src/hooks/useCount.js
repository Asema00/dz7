import { useEffect, useState } from "react"

const useCount = (number) => {
  const [count,setCount] = useState(number)

  const handlePlus = ()=>{
    setCount(prev=>prev + 1)
  }

  const handleMinus = ()=>{
    if (count>0) setCount(prev=>prev - 1)
  }

  useEffect(()=>{

    console.log(count)
  },[count])
  
  return [handlePlus, handleMinus, count]
}

export default useCount