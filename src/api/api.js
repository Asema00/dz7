import axios from "axios"

const BASE_ULR  = 'https://jsonplaceholder.typicode.com'

const requester  = axios.create({baseURL: BASE_ULR})

export const commentsUrl = 'comments'
export const postUrl = 'posts'

export const getFetchData = async (url) =>{
  const response = await requester.get(url)
  return response.data
}