"use server"

import { redirect } from "next/navigation";


export const contactServer = async (formdata) => {
  const {fullName, email, message} = Object.fromEntries(formdata.entries())

 console.log(fullName, email, message);
 redirect('/')

}

// "use client"
// export const contactClient =  (formdata) => {
//   const {fullName, email, message} = Object.fromEntries(formdata.entries())

//  console.log(fullName, email, message);
//  const router = useRouter()
//    router.push("/")
// }