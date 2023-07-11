import React from 'react'
import Link from 'next/link'

const header = () => {
  return (
     <div className='container relative mx-auto p-6'>
      <div className='flex items-center justify-between'>
        {/* logo */}
        <div className='pt-2.5'>
          <h2 className='font-bold text-4xl italic font-mono'>IVidhanTravels</h2>
        </div>
        {/* menu item */}
        <div className='hidden md:flex space-x-10 text-lg pt-2'>
        <Link href={'/'} className='text-sky-300 font-bold'>Home</Link>
        <Link href={'/destination'}className='hover:text-sky-400'>Destination</Link>
        <Link href={'/ourservices'}className='hover:text-sky-400'>Our Services</Link>
        <Link href={'/gallery'} className='hover:text-sky-400'>Gallery</Link>
        <Link href={'/about'} className='hover:text-sky-400'>About us</Link>
        </div>
        {/* button */}
        <Link href={'/register'}className=' hidden md:block text-white baseline bg-sky-500 p-2 px-6 pt-2 hover:bg-sky-700 rounded-full'>Register</Link>
      </div>
     </div>
  )
}

export default header
