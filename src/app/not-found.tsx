import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen w-screen absolute right-0 bottom-0 z-50 flex flex-col justify-center items-center bg-background-dark text-text-light p-30'>
      <div className=' py-72 px-96 bg-background-dark shadow-text-light shadow-inner rounded-3xl flex flex-col justify-center items-center text-center '>
        <h1 className='font-bold text-9xl'>404</h1>
      <h2 className='text-2xl'>Oops! You're a Bit Lost! 🚀</h2>
      <p>Sorry, we couldn't find the page you're looking for. Looks like you're a bit lost! <br /> What would you like to do?
<br />
Here's a magical formula to find your way back: <br />  <Link className='hover:text-text-light text-white' href="/">Go Back to Home!🏠</Link> </p>
      
      </div>
    </div>
  )
}