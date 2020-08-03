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

  // TODO Styling view and hide blog, delete blog post without likes on MongoDB

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <button onClick={() => setDetailVisible(true)} style={hideWhenVisible}>
          View
        </button>
        <button onClick={() => setDetailVisible(false)} style={showWhenVisible}>
          Hide
        </button>
        <button onClick={() => console.log(blog)}>Check</button>
      </div>
      <div style={showWhenVisible}>
        {blog.url}
        {blog.likes}
      </div>
    </div>
  )
}

export default Blog
