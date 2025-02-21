'use client'

import Hero from '../../components/Hero'
import LoginButtton from '../../components/LoginButtton'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '../../components/ui/Button'

export default function Home() {
    const router = useRouter()
    return (
        <>
            <div>Home</div>
            <Hero
                image='/modernbackground.jpg'
                image2='/headphones.png'
                title='Subscribe! my bro'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Natus voluptatem ipsa quaerat a laboriosam deleniti dolores velit! Veniam,
                quis a!'>
            </Hero>
            <Hero
                image='/bluebackground.jpg'
                image2='/sportshoe2.png'
                title='Subscribe! my bro'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Natus voluptatem ipsa quaerat a laboriosam deleniti dolores velit! Veniam,
                quis a!'>
            </Hero>
            <div className="flex gap-8">
                <Link href="/">Home</Link>
            </div>

            <LoginButtton
                fullWidth type='submit'
                onClick={() => router.push('/auth/login')}>
                This is test button
            </LoginButtton>

            <Button variant="mybutton" size="sm">Button</Button>
        </>
    )
}

