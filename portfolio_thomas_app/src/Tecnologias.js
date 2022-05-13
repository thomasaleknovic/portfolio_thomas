import React from 'react'
import Header from './HeaderComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Tecnologias() {

  const tecnologias = [
  {id: "react", url: "/tecnologias/REACT_tecnologias.png"},
  {id: "javascript", url: "/tecnologias/JAVASCRIPT_tecnologias.png"},
  {id: "html", url: "/tecnologias/HTML_tecnologias.png"},
  {id: "css", url: "/tecnologias/CSS_tecnologias.png"},
  {id: "netxjs", url: "/tecnologias/NEXTJS_tecnologias.png"},
  {id: "redux", url: "/tecnologias/REDUX_tecnologias.png"},
  {id: "firebase", url: "/tecnologias/FIREBASE_tecnologias.png"},
  {id: "boootstrap", url: "/tecnologias/BOOTSTRAP_tecnologias.png"},
  {id: "tailwind", url: "/tecnologias/TAILWIND_tecnologias.png"},
  {id: "sass", url: "/tecnologias/SASS_tecnologias.png"},
]

  return (
    <>
      <div id='tecnologias' className='pb-[100px] pt-[100px] md:pt-[150px]'>
        <h2 className='text-[20px] md:text-[30px] text-center mb-10 md:mb-20 leading-[50px]'>Possuo experiência com essas
          <br />
          <span className='text-[50px] font-bold text-mainPurple'>tecnologias</span>
        </h2>
        <div className='mx-auto'>
          <div className='flex flex-row flex-wrap w-full justify-center'>
            {tecnologias.map((item) => 
              <a key={item.id} className="mr-0 my-2 ">
                <img src={item.url} alt={item.id} width={100} className="w-4/4 p-2" />
              </a>
            )}
          </div>
        </div>
        <a href="#portfolio" className='mt-20 flex flex-col items-center animate-bounce transition-all easy-in duration-150'>
                <p className=' text-white text-xs font-extrabold'>PORTFÓLIO</p>
                <FontAwesomeIcon className="fa-xl text-mainPurple" icon={faChevronDown} height={50}/>
            </a>
      </div>
    </>
  )
}

export default Tecnologias