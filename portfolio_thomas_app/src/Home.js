import React from 'react'
import Header from "./HeaderComponent";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faWhatsappSquare} from "@fortawesome/free-brands-svg-icons";

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
        <div className='flex flex-col items-center pt-16 md:pb-[100px] pb-[300px]' id='home'>
            <div className='text-center p-2 md:p-10 mt-16 md:mb-0 mb-5'>
                <p className='text-[20px] sm:text-[25px] md:text-[40px] '>Olá, eu sou</p>
                <p className='leading-[50px] md:leading-none mb-2 md:mb-0 text-[50px] md:text-[85px] font-bold '>Thomas <span className='text-mainPurple '>Aleknovic.</span></p>
                <p className='text-[17px] sm:text-[25px] md:text-[40px] text-mainPurple typewriter'>Front-end Developer e UI Designer.</p>
            </div>
            <div className="text-white block lg:hidden mb-10">
                    <a href="https://www.linkedin.com/in/thomasaleknovic/" target='_blank'>
                        <FontAwesomeIcon className="fa-2xl mr-3" icon={faLinkedin} height={50}/>
                    </a>
                    <a href="https://www.github.com/thomasaleknovic" target='_blank'>
                        <FontAwesomeIcon className="fa-2xl mr-3" icon={faGithub} height={50}/>
                    </a>
                </div>
            <a href="#tecnologias" className='mt-20 md:mt-30 flex flex-col items-center animate-bounce transition-all easy-in duration-150'>
                <p className=' text-white text-xs font-extrabold'>DESCUBRA</p>
                <FontAwesomeIcon className="fa-xl text-mainPurple" icon={faChevronDown} height={50}/>
            </a>
        </div>
    
    </>
  )
}

export default Home