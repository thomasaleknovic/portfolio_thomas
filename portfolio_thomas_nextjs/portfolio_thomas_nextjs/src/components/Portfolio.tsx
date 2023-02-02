import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { portfolioItems } from "../../public/portfolio/portfolioData";
import PortfolioItemSmall from "./PortfolioItemSmall";

export interface PortfolioItem {
  id: string;
  path: string;
  title: string;
  description: string;
  url: string;
  tecnologias: TecnologiasItem[];
}

export interface TecnologiasItem {
  title: string;
  path: string;
  url: string;
}

function Portfolio() {
  return (
    <div id="portfolio" className="pb-[100px] pt-[100px]">
      <h2 className="text-[25px] text-center mb-20 leading-[60px]">
        Confira um pouco do meu
        <br />
        <span className="text-[70px] font-bold text-mainPurple">portfólio</span>
      </h2>

      <div className=" flex-row gap-14 flex-wrap items-center justify-center sm:hidden md:flex">
        {portfolioItems.map((item: PortfolioItem) => (
          <PortfolioItemSmall item={item} key={item.id} />
        ))}
      </div>

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
