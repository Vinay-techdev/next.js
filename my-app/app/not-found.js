"use client"
import { useRouter } from "next/navigation"

const notFound = () => {

  const router = useRouter()

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>404</h1>
      <p>page Not Found</p>
      <div>
        <button className="bg-purple-700 text-white p-2 mr-1.5 rounded"><a href="/">Go Home</a></button>
        <button onClick={() => router.back()} className="bg-blue-700 text-white p-2 rounded">Go back</button>
      </div>
    </div>
  )
}

export default notFound
