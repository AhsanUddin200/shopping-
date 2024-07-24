import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
  <>
  <div>

    <div className='hidden lg:block'>
        <div className='container'>

            <div className='flex w-fit gap-12 mx-auto font-semibold py-5 text-blackish'>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">HOME</Link>
        
                <Link className="navbar__link relative underline:transition-pink-800" href="#">MEN'S</Link>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">WOMEN'S</Link>
                
                <Link className="navbar__link relative underline:transition-pink-800" href="#">INFANT</Link>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">BABY</Link>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">BABA</Link>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">CATEGORIES</Link>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">SELL OFFER</Link>

            </div>

        </div>
    </div>
  </div>
  </>
  )
}

export default Navbar
