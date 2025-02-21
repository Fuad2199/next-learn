'use client'

import { useParams } from 'next/navigation';
import React from 'react'

interface blogPosts {
  id: number;
  title: string;
  content: string;
}

const blogPosts = [
  {
    id: 1,
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.'
  },
  {
    id: 2,
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post.'
  },
  {
    id: 3,
    title: 'Third Blog Post',
    content: 'This is the content of the third blog post.'
  },
  {
    id: 4,
    title: 'Fourth Blog Post',
    content: 'This is the content of the fourth blog post.'
  }
]

const BlogDetail = () => {
  const queryParams = useParams();
  const { id } = queryParams;
  console.log(id)

  const post = blogPosts.find(blog => blog.id.toString() === id);

  if (!post) {
    return <div>Pos is nothing</div>
  }

  return (
    <div>
      {post.title}
      {post.content}
    </div>
  )
}

export default BlogDetail
