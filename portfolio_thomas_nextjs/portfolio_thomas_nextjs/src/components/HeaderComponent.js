import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ purple }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [headerPurple, setHeaderPurple] = React.useState(false);

  let Links = [
    { name: "Home", link: "#home" },
    { name: "Tecnologias", link: "#tecnologias" },
    { name: "Portfólio", link: "#portfolio" },
    { name: "Certificados", link: "#certificados" },
    { name: "Contato", link: "#contato" },
  ];

  React.useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setHeaderPurple(true);
      } else {
        setHeaderPurple(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="">
      <header className="w-full fixed z-10 top-0 left-0">
        <div
          className={`transition-all duration-500 easy-in ${
            headerPurple
              ? "bg-mainPurple p-5 lg:flex flex-row justify-around"
              : "bg-mainBlack p-5 lg:flex flex-row justify-around"
          }`}
        >
          <a href="#" className="text-white font-bold text-xl">
            Thomas Aleknovic
          </a>
          <ul
            className={`lg:flex lg:items-center lg:pb-0 pb-6 absolute lg:static ${
              headerPurple
                ? "bg-mainPurple lg:bg-transparent lg:transition-none"
                : "bg-mainBlack lg:bg-transparent lg:transition-none"
            } text-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-7 transition-all duration-500 ease-in ${
              menuOpen ? "top-10 pt-4" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="lg:ml-8 text-xl lg:my-0 my-3">
                <a
                  href={link.link}
                  className={`font-bold text-lg ${
                    !headerPurple
                      ? "hover:text-mainPurple"
                      : "hover:text-mainBlack"
                  }  cursor-pointer duration-200`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-main-pink absolute right-3 top-3 cursor-pointer lg:hidden"
          >
            <FontAwesomeIcon
              name={menuOpen ? "close" : "menu"}
              className="fa-lg mr-3 text-white"
              icon={faBars}
              height={40}
            />
          </div>
          <div className="text-white hidden lg:flex ">
            <a
              href="https://www.linkedin.com/in/thomasaleknovic/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className={`fa-xl mr-3 ${
                  !headerPurple
                    ? "hover:text-mainPurple"
                    : "hover:text-mainBlack"
                }`}
                icon={faLinkedin}
                height={30}
              />
            </a>
            <a
              href="https://github.com/thomasaleknovic"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className={`fa-xl mr-3 ${
                  !headerPurple
                    ? "hover:text-mainPurple"
                    : "hover:text-mainBlack"
                }`}
                icon={faGithub}
                height={30}
              />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
