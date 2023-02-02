import React from "react";
import { PortfolioItem, TecnologiasItem } from "./Portfolio";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

function PortfolioItemSmall({ item }) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function handleClick() {
    setModalIsOpen(false);
  }

  return (
    <Dialog.Root open={modalIsOpen} onOpenChange={setModalIsOpen}>
      <div className="p-6 md:p-0 md:block flex items-center justify-center">
        <div className="h-[420px] w-[350px] bg-mainPurple rounded-3xl flex flex-col items-center justify-center overflow-clip relative">
          <div className="-mt-12 w-[90%] md:w-full md:flex md:justify-center">
            <img src={item.path} width={324} height={190} />
          </div>
          <h3 className="text-3xl font-bold mt-4">{item.title}</h3>
          <p className="font-normal  text-lg">Tecnologias utilizada</p>
          <div className="flex flex-row gap-2 mt-4 items-center justify-center">
            {item.tecnologias.map((tecnologia: TecnologiasItem) => (
              <a
                href={tecnologia.url}
                target="_blank"
                rel="noreferrer"
                key={item.id}
              >
                <img
                  src={tecnologia.path}
                  alt={tecnologia.title}
                  width={40}
                  height={40}
                />
              </a>
            ))}
          </div>
          <Dialog.Trigger
            type="button"
            className="bg-zinc-800 w-full h-12 font-bold text-md absolute bottom-0 text-center flex items-center justify-center"
          >
            Conferir
          </Dialog.Trigger>
        </div>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

        <Dialog.Content className="w-screen h-screen md:w-fit md:h-fit  fixed  top-[3%] right-0 md:top-[20%] md:right-[18%]  flex flex-col md:flex-row justify-center items-center ">
          <div className="w-[90%] md:h-[500px] md:w-[350px] bg-mainPurple rounded-3xl flex flex-col items-center justify-center overflow-clip z-50 relative py-6 md:py-0">
            <div className="w-[90%] md:w-full flex justify-center">
              <img src={item.path} width={324} height={190} />
            </div>
            <h3 className="text-3xl font-bold mt-4">{item.title}</h3>
            <p className="font-normal  text-lg">Tecnologias utilizada</p>
            <div className="flex flex-row gap-2 mt-4 items-center justify-center">
              {item.tecnologias.map((tecnologia: TecnologiasItem) => (
                <a
                  href={tecnologia.url}
                  target="_blank"
                  rel="noreferrer"
                  key={item.id}
                >
                  <img
                    src={tecnologia.path}
                    alt={tecnologia.title}
                    width={40}
                    height={40}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="w-[90%] h-[350px] md:w-[500px] md:h-[500px] bg-[#292929] rounded-3xl -mt-10 md:mt-0 md:-ml-10 flex flex-col justify-center items-center md:items-start gap-4 py-10 overflow-scroll">
            <Dialog.Close
              className="absolute w-8 h-8 bg-zinc-800 md:bg-mainPurple rounded-full top-16 right-4 md:-top-2 md:-right-2 z-50 font-extrabold"
              aria-label="Fechar"
            >
              X
            </Dialog.Close>
            <p className="w-[90%] md:w-[380px] md:ml-20 mt-[180px] md:mt-0 font-medium text-sm md:text-md">
              {item.description}
            </p>
            <a
              href={item.url}
              className="text-bold md:ml-20  font-md underline"
              target="_blank"
              rel="noreferrer"
            >
              {"Conferir mais informações >"}
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default PortfolioItemSmall;
