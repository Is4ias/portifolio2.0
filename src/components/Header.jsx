import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import Logo from '../assets/IsaiasR.png';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
 
  return (
    <header className='fixed top-0 left-0 w-full h-40 flex
     items-center z-40 backdrop-blur-md shadow-md'>

        <div className='max-w-screen-2xl w-full mx-auto px-4 
        flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]'>
            <a href='/' className='logo'>
                <img 
                    src={Logo}
                    width={60} 
                    height={60}
                    alt='Isaías Ribeiro'
                />
            </a>
           
           <div className="md:flex flex-1 justify-center">
                <Navbar navOpen={navOpen}/>
           </div>
            
            <div className="relative md:justify-self-center">
                <button
                    className="menu-btn max-md:hidden"
                    onClick={() => setNavOpen(prev => !prev)}
                >
                    <span className="material-symbols-rounded">
                        {navOpen ? "close" : "menu"}
                    </span>
            </button>

            </div>
            
        </div>
     </header>
  )
}

export default Header