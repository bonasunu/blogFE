import React, { useState } from 'react'

const Blog = ({ blog }) => {
  const [detailVisible, setDetailVisible] = useState(false)
  const hideWhenVisible = { display: detailVisible ? 'none' : '' }
  const showWhenVisible = { display: detailVisible ? '' : 'none' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={blogStyle}>
      <div>
        <p>{blog.title} {blog.author}
          <button onClick={() => setDetailVisible(true)} style={hideWhenVisible} className='buttonTitle'>
            View
          </button>
          <button onClick={() => setDetailVisible(false)} style={showWhenVisible} className='buttonTitle'>
            Hide
          </button>
        </p>
      </div>
      <div style={showWhenVisible}>
        <p>{blog.url}</p>
        <p>{blog.likes}
          <button className='buttonTitle'>
            Like
          </button>
        </p>
        <p>{blog.author}</p>
      </div>
    </div>
  )
}

export default Blog
