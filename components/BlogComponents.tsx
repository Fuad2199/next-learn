import Link from "next/link";

interface BlogComponentsProps{
    id?:number | string;
    title:string;
    description:string;
}

const BlogComponents = ({description, id, title}:BlogComponentsProps) => {
  return (
    <Link href={`/blog/${id}`}>
    <div className='gap-y-4 p-4 gap-x-4'>
      <h2 className='text-3xl'>{title}</h2>
      <p>{description}</p>
    </div>
    </Link>
  )
}

export default BlogComponents
