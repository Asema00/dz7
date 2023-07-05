  import useCount from "../../hooks/useCount"
import Button from "../UI/Button/Button"

const Counter = () => {
   const [plus,minus,count] = useCount(1)

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={plus}>plus</Button>
      <Button onClick={minus}>minus</Button>
    </div>
  )
}

export default Counter