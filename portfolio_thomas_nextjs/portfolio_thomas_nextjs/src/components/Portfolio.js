import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { portfolioItems } from "../../public/portfolio/portfolioData";

function Portfolio() {
  return (
    <div id="portfolio" className="pb-[100px] pt-[100px]">
      <h2 className="text-[25px] text-center mb-20 leading-[60px]">
        Confira um pouco do meu
        <br />
        <span className="text-[70px] font-bold text-mainPurple">portfólio</span>
      </h2>

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        swipeable={false}
      >
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="mr-0 md:mr-20 grid grid-cols-12 mx-auto w-full px-14 md:px-[100px]"
          >
            <img
              src={item.path}
              alt={item.id}
              width={480}
              height={347}
              className="col-span-12 md:col-span-4"
            />
            <div className="md:ml-10 mt-10 md:mt-0 col-span-12 md:col-span-8 flex flex-col md:items-start items-center">
              <p className="text-sm md:text-base text-center md:text-left">
                {item.description}
              </p>
              <button className="bg-mainPurple rounded-full w-5/6 md:w-2/5 mt-10 p-3 font-bold">
                <a href={item.url} target="_blank">
                  Conferir
                </a>
              </button>
            </div>
          </div>
        ))}
      </Carousel>
      <a
        href="#certificados"
        className="mt-20 flex flex-col items-center animate-bounce transition-all easy-in duration-150"
      >
        <p className=" text-white text-xs font-extrabold">CERTIFICADOS</p>
        <FontAwesomeIcon
          className="fa-xl text-mainPurple"
          icon={faChevronDown}
          height={50}
        />
      </a>
    </div>
  );
}

export default Portfolio;
