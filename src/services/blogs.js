import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createBlog = async newBlog => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newBlog, config)
  return response.data
}

const updateBlog = async (newBlog, blogId) => {
  const config = {
    headers: { Authorization: token },
  }

  const url = baseUrl + '/' + blogId

  const response = await axios.put(url, newBlog, config)
  return response.data
}

const deleteBlog = async blogId => {
  const config = {
    headers: { Authorization: token },
  }

  const url = baseUrl + '/' + blogId

  const response = await axios.delete(url, config)
  return response.data
}

export default { getAll, createBlog, setToken, updateBlog, deleteBlog }