import React from 'react'

const BlogForm = ({
    handleCreateBlog,
    title,
    author,
    url,
    setTitle,
    setAuthor,
    setUrl
}) => (
    <form onSubmit={handleCreateBlog}>
        <div>
            title:
            <input
            type='text'
            value={title}
            name='Title'
            onChange= { ({ target }) => setTitle(target.value)}
            >
            </input>
        </div>
        <div>
            author:
            <input
            type='text'
            value={author}
            name='Author'
            onChange = { ({ target }) => setAuthor(target.value)}
            >
            </input>
        </div>
        <div>
            url:
            <input
            type='text'
            value={url}
            name='URL'
            onChange = { ({ target }) => setUrl(target.value)}
            >
            </input>
        </div>
        <button type='submit'>Create</button>
    </form>
)

export default BlogForm
