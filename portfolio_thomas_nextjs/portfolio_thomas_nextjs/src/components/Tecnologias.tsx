import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { mainTech, Tech } from "../../public/tecnologias/tecnologias";
import Image from "next/image";

interface TeconologiasItem {
  id: string;
  path: string;
  url: string;
}
interface TeconologiasSecItem {
  name: string;
  items: TeconologiasItem[];
}

function Tecnologias() {
  return (
    <>
      <div id="tecnologias" className=" pt-[100px]">
        <h2 className="text-[20px] md:text-[30px] text-center mb-10 md:mb-20 leading-[50px]">
          Possuo experiência com essas
          <br />
          <span className="text-[50px] font-bold text-mainPurple">
            tecnologias
          </span>
        </h2>
        <div className="mx-auto flex md:flex-row flex-col justify-around items-center gap-y-14">
          {/* TECNOLOGIAS PRIMÁRIAS */}
          <div className="grid grid-cols-2 gap-5 w-fit md:px-0 px-4 ">
            {mainTech.map(({ id, path, url }: TeconologiasItem) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <img src={path} alt={id} width={205} />
              </a>
            ))}
          </div>

          {/* TECNOLOGIAS SECUNDÁRIAS */}
          <div className="flex flex-col">
            {Tech.map(({ name, items }: TeconologiasSecItem) => (
              <div
                key={name}
                className="flex flex-col items-center mb-4 px-4 md:px-0"
              >
                <h2 className="mb-2 font-bold">{name}</h2>
                <div className="flex flex-row gap-3">
                  {items.map((item: TeconologiasItem) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={item.path}
                        alt={item.id}
                        width={112}
                        height={111}
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <a
          href="#portfolio"
          className="mt-20 flex flex-col items-center animate-bounce transition-all easy-in duration-150"
        >
          <p className=" text-white text-xs font-extrabold">PORTFÓLIO</p>
          <FontAwesomeIcon
            className="fa-xl text-mainPurple"
            icon={faChevronDown}
            height={50}
          />
        </a>
      </div>
    </>
  );
}

export default Tecnologias;
