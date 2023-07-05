import  { Fragment } from 'react'
import useFetch from '../../hooks/useFetch'
import { commentsUrl } from '../../api/api'
import { Link } from 'react-router-dom'

const Comments = () => {
  const [data] = useFetch(commentsUrl)
  return (
    <div>
      <h2>{data.map(item=><Fragment key={item.id}>
        <div>
        <Link to={`/${item.postId}`}>{item.postId}</Link>
        </div>
      </Fragment>
        )}</h2>
    </div>
  )
}

export default Comments