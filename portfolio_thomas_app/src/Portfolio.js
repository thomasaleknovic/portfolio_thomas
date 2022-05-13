import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Portfolio() {


    const portfolioItems = [
        {
            id: "weather",
            url: "/portfolio/weather.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl a neque adipiscing nullam. Sit tristique risus non lectus vestibulum suspendisse turpis. Metus convallis orci feugiat in vel augue et sed. Adipiscing diam ipsum, vulputate bibendum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl a neque adipiscing nullam. Sit tristique risus non lectus vestibulum suspendisse turpis. Metus convallis orci feugiat in vel augue et sed. Adipiscing diam ipsum, vulputate bibendum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl a neque adipiscing nullam. Sit tristique risus non lectus vestibulum suspendisse turpis."
        
        },
        {
            id: "analaura",
            url: "/portfolio/analaura.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl a neque adipiscing nullam. Sit tristique risus non lectus vestibulum suspendisse turpis. Metus convallis orci feugiat in vel augue et sed. Adipiscing diam ipsum, vulputate bibendum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl a neque adipiscing nullam. Sit tristique risus non lectus vestibulum suspendisse turpis. Metus convallis orci feugiat in vel augue et sed. Adipiscing diam ipsum, vulputate bibendum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl a neque adipiscing nullam. Sit tristique risus non lectus vestibulum suspendisse turpis."
        
        },
        {
            id: "findmovie",
            url: "/portfolio/findmovie.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl a neque adipiscing nullam. Sit tristique risus non lectus vestibulum suspendisse turpis. Metus convallis orci feugiat in vel augue et sed. Adipiscing diam ipsum, vulputate bibendum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl a neque adipiscing nullam. Sit tristique risus non lectus vestibulum suspendisse turpis. Metus convallis orci feugiat in vel augue et sed. Adipiscing diam ipsum, vulputate bibendum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl a neque adipiscing nullam. Sit tristique risus non lectus vestibulum suspendisse turpis."
        
        },
        {
            id: "amzclone",
            url: "/portfolio/amzclone.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl a neque adipiscing nullam. Sit tristique risus non lectus vestibulum suspendisse turpis. Metus convallis orci feugiat in vel augue et sed. Adipiscing diam ipsum, vulputate bibendum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl a neque adipiscing nullam. Sit tristique risus non lectus vestibulum suspendisse turpis. Metus convallis orci feugiat in vel augue et sed. Adipiscing diam ipsum, vulputate bibendum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl a neque adipiscing nullam. Sit tristique risus non lectus vestibulum suspendisse turpis."
        
        },
    ]
  return (
    <div id='portfolio' className='pb-[400px] pt-[100px]'>

        <h2 className='text-[25px] text-center mb-20 leading-[60px]'>Confira um pouco do meu
          <br />
          <span className='text-[70px] font-bold text-mainPurple'>portfolio</span>
        </h2>
    
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            >
            {portfolioItems.map((item) => 
                <div key={item.id} className="mr-20 grid grid-cols-12 mx-auto w-full px-[100px]">
                    <img src={item.url} alt={item.id} width={480} height={347} className="col-span-4"/>
                    <div className='ml-10 col-span-8 flex flex-col'>
                        <p className='text-left'>{item.description}</p>
                        <button className='bg-mainPurple rounded-full w-2/5 mt-10 p-3 font-bold'>Conferir</button>
                    </div>
                </div>
                        
            )}

            </Carousel>
            <a href="#certificados" className='flex justify-center mt-20'>
                <FontAwesomeIcon className="fa-xl mr-3 animate-bounce" icon={faChevronDown} height={50}/>
            </a>

    </div>
  )
}

export default Portfolio