import Link from 'next/Link';
import React from 'react'

function four() {
  return (
    <>
    <div className='notfound'>
        <div className='not found'>
            <div className='nofound-404'>
                <h1>404</h1>
            </div>
            <h2>We are sorry, Page not found!</h2>
            <p>The page you are looking for might have been removed had its name changge or is temporarily unavalible</p>
            <Link href="/">Back to Home page
            </Link>
           
        </div>
    </div>
    </>
  )
}

export default four;