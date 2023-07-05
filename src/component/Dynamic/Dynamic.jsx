import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

const Dynamic = () => {
  const params = useParams()
  const [data] = useFetch(`/comments?postId=${params.number}`)
  const navigate = useNavigate()
  
  if(!data.length) return  navigate(-1)
  return (
    <div>
      {params.number}
      {data.map(item=><h2>{item.email}</h2>)}
    </div>
  )
}

export default Dynamic