import React, { useState } from 'react';
import  "./test.css";
import logo from '../asset/logo.svg'
import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'; 
import SearchBar from './SearchBar';  
import {ImSearch} from 'react-icons/im'
function Navigation(){
    const [isOpen, setIsOpen] = useState(false);

   
    return(
        <nav className='flex items-end p-3 bg-cod-gray-600  rounded-br-lg p-4 rounded-bl'>
            <div className=' max-w-full container  mx-0 text-white' >
            <div className='flex items-center justify-between'>
  <div className='flex text-lg  items-center '>
    <img className='h-10 w-10' src={logo} alt='Logo' />
    <a href={"#"} className='text-lg items-center no-underline hover:text-white '>Brand</a>
  
  </div>
  
    
  <div className='flex'>
    <input type="search" className="form-control justify-items-end flex-row flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                placeholder="Search" aria-label="Search" aria-describedby="button-addon3"></input>
    <button className="flex inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" 
                                type="button" id="button-addon3">
      <ImSearch size={15} />
    </button>
  </div>

  <button data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" 
  className=' text-white  flex items-end focus:outline-none ' 
  onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? (
      <AiOutlineClose className='items-center menu-icon' fontSize={25} scale={25} />
    ) : (
      <AiOutlineMenu className='items-center menu-icon' fontSize={25} scale={25} />
    )}

  </button>

</div>



           
                    {isOpen && ( 
                <div id="collapseExample" className='collaspe bg-cod-gray-600 py-4  transition-all delay-100 duration-700  ease-linear' >
                     <div  className='block  text-white hover:hover:bg-cod-gray-100'>
                    <button className='block px-4 py-2 text-white hover:hover:bg-cod-gray-100'>
                        Accueil
                    </button>
                    </div>
                    <div  className='block  text-white hover:hover:bg-cod-gray-100'>
                    <button className='block px-4 py-2 text-white hover:hover:bg-cod-gray-100'>
                        bibi
                    </button>
                    </div>
                    <div  className='block  text-white hover:hover:bg-cod-gray-100'>
                    <button className='block px-4 py-2 text-white hover:hover:bg-cod-gray-100'>
                        Connexion
                    </button>
                    </div>
                    <div  className='block  text-white hover:hover:bg-cod-gray-100'>
                    <button className='block px-4 py-2 text-white hover:hover:bg-cod-gray-100'>
                        Inscription
                    </button>
                    </div>
                </div>
                    )}
                </div>
        </nav>

          
       


      
    )
}

export default Navigation;