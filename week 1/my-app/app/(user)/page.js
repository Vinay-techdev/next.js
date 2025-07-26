import Image from 'next/image'
import React from 'react'
import image from '@/public/image.jpg'
import {Roboto} from 'next/font/google'

export const metadata = {
  title: "Home Page",
  description: "Next.Js",
  authors:[{name: "vinay"},{name: "vinnu"}],
  keywords: ['next','react',],
  icons: {
    icon: '/image.jpg'
  }
}

const roboto = Roboto({
  subsets: ["latin"]
});

const page = () => {
  return (
    <div>
      <h1 className={roboto.className}>Gible Image</h1>
      <Image src={image} alt="my image" width={200} height={200} placeholder="blur" blurDataURL="" quality={100}/>
    </div>
  )
}

export default page
