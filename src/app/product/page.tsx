import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='bg-green-600'>
            <div>Product</div>

            <div className="flex gap-8">
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/product">Product</Link>
            </div>
        </div>
    )
}

export default page
