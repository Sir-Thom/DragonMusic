import React, { useState } from 'react';
import  "./test.css";
import logo from '../asset/logo.svg'
import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai';   
function Navigation(){
    const [isOpen, setIsOpen] = useState(false);

   
    return(
        <nav className=' bg-cod-gray-900 w-full rounded-br-lg p-4 rounded-bl-lg'>
            <div className=' max-w-full container w-full mx-0 text-white' >
            <div className='flex    items-center justify-between'>
  <div className='flex text-lg   '>
    <img className='h-10 w-10' src={logo} alt='Logo' />
    <a className='text-lg no-underline'>Brand</a>
  </div>
  {!isOpen && ( 
  <div className='flex gap-4 items-start py-4'>
                    <a className=' flex px-4 py-2 text-white hover:bg-gray-700'>
                        home
                    </a>
                    <a className='block px-4 py-2 text-white hover:bg-gray-700'>
                        about
                    </a>
                    <a className='block px-4 py-2 text-white hover:bg-gray-700'>
                        dsfffffff
                    </a>
                </div>)}
  <button className=' text-white  flex items-end focus:outline-none ' onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? (
      <AiOutlineClose className='menu-icon' fontSize={25} scale={25} />
    ) : (
      <AiOutlineMenu fontSize={25} scale={25} />
    )}

  </button>

</div>



           
                    {isOpen && ( 
                <div className='bg-gray-800 py-4'>
                    <a className='block px-4 py-2 text-white hover:bg-gray-700'>
                        home
                    </a>
                    <a className='block px-4 py-2 text-white hover:bg-gray-700'>
                        about
                    </a>
                    <a className='block px-4 py-2 text-white hover:bg-gray-700'>
                        Penis
                    </a>
                </div>
                    )}
                </div>
        </nav>

          
       


      
    )
}

export default Navigation;