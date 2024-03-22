//Barra lateral que muestra los links a las diferentes secciones de la aplicación

import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiContactsBook2Line } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import Fade from "react-fade-in";

const BottomNav = () => {
  const [showNav, setShowNav] = useState(false);
  
  const handleNav = () => {
    setShowNav(!showNav);
  };

  //Funcion para hacer scroll a la seccion correspondiente
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }


  return (
    <div>
      <AiOutlineMenu
        size={20}
        color="white"
        onClick={handleNav}
        className="fixed top-4 z-[99] md:hidden cursor-pointer right-12"
      ></AiOutlineMenu>
      {showNav ? (
        <div className="fixed w-full h-full bg-black flex flex-col justify-center items-center z-20">
          <a
            href="#home"
            onClick={handleNav}
            className="text-xl w-[75%] text-gray-500 flex justify-center items-center rounded-full  shadow-lg bg-gray-200 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-red-500 ease-in  duration-100"
          >
            <AiOutlineHome size={20}></AiOutlineHome>
            <span className="ml-2">Inicio</span>
          </a>
          <a
            href="#about"
            onClick={handleNav}
            className="text-xl w-[75%] text-gray-500 flex justify-center items-center rounded-full  shadow-lg bg-gray-200 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-red-500 ease-in  duration-100"
          >
            <BsPerson size={20}></BsPerson>
            <span className="ml-2">Sobre mí</span>
          </a>
          <a
            href="#proyectos"
            onClick={handleNav}
            className="text-xl w-[75%] text-gray-500 flex justify-center items-center rounded-full  shadow-lg bg-gray-200 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-red-500 ease-in  duration-100"
          >
            <GrProjects size={20}></GrProjects>
            <span className="ml-2">Proyectos</span>
          </a>
          <a
            href="#experiencia"
            onClick={handleNav}
            className="text-xl w-[75%] text-gray-500 flex justify-center items-center rounded-full  shadow-lg bg-gray-200 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-red-500 ease-in  duration-100"
          >
            <AiOutlineProject size={20}></AiOutlineProject>
            <span className="ml-2">Experiencia</span>
          </a>
          <a
            href="#contacto"
            onClick={handleNav}
            className="text-xl w-[75%] text-gray-500 flex justify-center items-center rounded-full  shadow-lg bg-gray-200 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-red-500 ease-in  duration-100"
          >
            <RiContactsBook2Line size={20}></RiContactsBook2Line>
            <span className="ml-2">Contacto</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[90%] inset-x-0 mx-auto w-1 z-10">
        <Fade>
        <div className="flex flex-row justify-center">
          <button onClick={() => scrollTo('home')} className="rounded-full shadow-lg bg-gray-200 shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-red-500 ease-in duration-100">
            <AiOutlineHome size={20}></AiOutlineHome>
          </button>
					<button onClick={() => scrollTo('about')} className="rounded-full shadow-lg bg-gray-200 shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-red-500 ease-in duration-100">
            <BsPerson size={20}></BsPerson>
          </button>
					<button onClick={() => scrollTo('proyectos')} className="rounded-full shadow-lg bg-gray-200 shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-red-500 ease-in duration-100">
            <GrProjects size={20}></GrProjects>
          </button>
					<button onClick={() => scrollTo('experiencia')} className="rounded-full shadow-lg bg-gray-200 shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-red-500 ease-in duration-100">
            <AiOutlineProject size={20}></AiOutlineProject>
          </button>
					<button onClick={() => scrollTo('contacto')} className="rounded-full shadow-lg bg-gray-200 shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-red-500 ease-in duration-100">
            <RiContactsBook2Line size={20}></RiContactsBook2Line>
          </button>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default BottomNav;
