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

  // method 1
  expect(component.container).toHaveTextContent(
    'Blog test title Blog test author'
  )

  // method 2
  const element = component.getByText(
    'Blog test title Blog test author'
  )
  expect(element).toBeDefined()

  // method 3
  const div = component.container.querySelector('.blogStyle')
  expect(div).toHaveTextContent(
    'Blog test title Blog test author'
  )
})