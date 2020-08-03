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
      {blog.title} {blog.author}
      <div style={hideWhenVisible}>
        <button onClick={() => setDetailVisible(true)}>
          View
        </button>
      </div>
      <div style={showWhenVisible}>
        {blog.url}
        {blog.likes}
        <button onClick={() => setDetailVisible(false)}>
          Hide
        </button>
      </div>
    </div>
  )
}

export default Blog
