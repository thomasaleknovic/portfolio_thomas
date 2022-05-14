import React from 'react'
import { certificadosData } from './shared/certificadosData';

function Certificados() {
  return (
    
    <div id='certificados' className='pb-[200px]'>
        <h2 className='text text-[50px] text-mainPurple font-bold text-center mb-10'>Certificados</h2>

        <div className='grid grid-cols-9  w-11/12 mx-auto gap-4'>
            {certificadosData.map((item) =>
                <div key={item.id} className="md:col-span-3 col-span-9 flex flex-col mx-auto items-center justify-start mb-10 md:mb-0 md:w-full w-5/6  ">
                    <img src={item.image} />
                    <p className='w-11/12 text-center text-sm md:text-base mt-7'>{item.description}</p>
                    <button className='bg-mainPurple rounded-full w-5/6 md:w-3/5 mt-10 p-3 font-bold'>
                        <a href={item.url} target="_blank">Conferir</a>
                    </button>
                </div>   
            )}
        </div>
    </div>
  )
}

export default Certificados