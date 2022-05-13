import React from 'react'
import Header from "./HeaderComponent";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
        <div className='flex flex-col items-center pt-16 pb-[300px]' id='home'>
            <div className='text-center p-10 mt-16'>
                <p className='text text-[25px] md:text-[40px] md:-mb-5'>Olá, eu sou</p>
                <p className='text text-[50px] md:text-[85px] font-bold md:-mb-5'>Thomas <span className='text-mainPurple'>Aleknovic.</span></p>
                <p className='text text-[25px] md:text-[40px] text-mainPurple typewriter'>Front-end Developer e UI Designer.</p>
            </div>
            <a href="#tecnologias">
                <FontAwesomeIcon className="fa-xl mr-3 animate-bounce" icon={faChevronDown} height={50}/>
            </a>
        </div>
    
    </>
  )
}

export default Home