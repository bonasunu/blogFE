import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: 'Blog test title',
    author: 'Blog test author',
    user: { username: 'johndoe' }
  }

  const user = { username: 'johndoe' }

  const component = render(
    <Blog blog={blog} user={user}/>
  )

  expect(component.container).toHaveTextContent(
    'Blog test title Blog test author'
  )
})