import React from 'react'
import BlogComponents from '../../../components/BlogComponents';

interface BlogPosts{
  id:number;
  title:string;
  content:string;
}

const blogPosts: BlogPosts[] = [
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
const BlogPage = () => {
  return (
    <div>
      {/* Header */}
      <div>
        <h1>Blog Posts</h1>
      </div>
      <div>
        {blogPosts.map(post=>(
          <BlogComponents
          key={post.id}
          description={post.content}
          title={post.title}
          id={post.id}
        />
        ))}
      </div>
    </div>
  )
}

export default BlogPage
