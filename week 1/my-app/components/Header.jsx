import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='fless'>
      <p>Logo</p>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/project">Project</Link></li>
        <li><Link href="/contact">contact</Link></li>
      </ul>
    </div>
  )
}

export default Header
