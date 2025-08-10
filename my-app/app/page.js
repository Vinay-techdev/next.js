import Image from 'next/image'
import React, { Suspense } from 'react'
import image from '@/public/image.jpg'

export const revalidate = 20

const page = async () => {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000);
  })

  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid, omnis cupiditate eum nobis temporibus dolorem fugiat. Explicabo, consequatur ducimus adipisci iusto placeat libero vel quo omnis officiis. Ad, laudantium?</p>
      <Suspense >
      <h1>Gible Image</h1>
      <Image src={image} alt="my image" width={200} height={200} placeholder="blur" blurDataURL="" quality={100}/>
      </Suspense>
    </div>
  )
}

export default page
