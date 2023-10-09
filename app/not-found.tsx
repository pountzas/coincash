import NavbarLink from '@/components/atoms/NavbarLink'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <ul>

      <NavbarLink title='Return Home' href='/' type='nav' extra='border border-grey-100 rounded-md p-1.5 m-2' />
      </ul>

    </div>
  )
}