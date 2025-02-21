import Link from 'next/link'
import React from 'react'

interface layoutProps{
    children:React.ReactNode
}

const layout = ({children}:layoutProps) => {
  return (
    <div>
          <div className='gap-6 flex'>
            
            <Link href="/about/mission">MissionPage</Link>
            <Link href="/about/vision">VisionPage</Link>
            <Link href="/about/team">TeamPage</Link>
          </div>
      {children}
    </div>
  )
}

export default layout
