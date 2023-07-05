import { BrowserRouter } from "react-router-dom"

const BrowserProvider = ({children}) => {
  return (
    <BrowserRouter>
        { children}
    </BrowserRouter>
  )
}

export default BrowserProvider