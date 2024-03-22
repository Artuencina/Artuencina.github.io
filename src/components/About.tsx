//Seccion donde hablo sobre mi, intereses y herramientas

import {
  SiFlutter,
  SiReact,
  SiCsharp,
  SiDotnet,
  SiCplusplus,
  SiUnrealengine,
  SiPython,
  SiTensorflow,
} from "react-icons/si";
import { SlArrowDown } from "react-icons/sl";
import FadeOnView from "./FadeOnView";

const About = () => {
  const handleScroll = () => {
    //Hacer scroll a la siguiente seccion
    const about = document.getElementById("proyectos");

    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="w-full h-screen bg-gray-950 flex flex-col justify-center items-center"
    >
      <div className="flex lg:flex-row flex-col justify-evenly center items-center">
        <FadeOnView>
          <img src="yo.jpg" className="h-[500px] lg:mr-32 rounded-lg"></img>
        </FadeOnView>

        <FadeOnView>
          <div className="flex flex-col">
            <h1 className="text-red-600 text-5xl font-bold text-center">
              Sobre mí
            </h1>

            <p className="text-white text-sm mt-4 text-center">
              Soy un desarrollador full stack con experiencia en desarrollo de
              videojuegos y aplicaciones web.
            </p>
            <p className="text-white text-sm mt-4  text-center">
              Me gusta aprender nuevas tecnologías y herramientas, y siempre
              estoy buscando mejorar mis habilidades.
            </p>
            <p className="text-white text-sm mt-4  text-center">
              Mis intereses incluyen desarrollo de videojuegos, desarrollo web,
              inteligencia artificial y machine learning.
            </p>
            <p className="text-white text-sm mt-4  text-center">
              Algunas de las herramientas y tecnologías con las que trabajo
              incluyen:
            </p>
            <div className="flex flex-row mt-4 justify-center">
              <SiFlutter
                size={40}
                className="m-2 text-white hover:text-red-600 cursor-pointer"
              ></SiFlutter>
              <SiReact
                size={40}
                className="m-2 text-white hover:text-red-600 cursor-pointer"
              ></SiReact>
              <SiCsharp
                size={40}
                className="m-2 text-white hover:text-red-600 cursor-pointer"
              ></SiCsharp>
              <SiDotnet
                size={40}
                className="m-2 text-white hover:text-red-600 cursor-pointer"
              ></SiDotnet>
              <SiCplusplus
                size={40}
                className="m-2 text-white hover:text-red-600 cursor-pointer"
              ></SiCplusplus>
              <SiUnrealengine
                size={40}
                className="m-2 text-white hover:text-red-600 cursor-pointer"
              ></SiUnrealengine>
              <SiPython
                size={40}
                className="m-2 text-white hover:text-red-600 cursor-pointer"
              ></SiPython>
              <SiTensorflow
                size={40}
                className="m-2 text-white hover:text-red-600 cursor-pointer"
              ></SiTensorflow>
            </div>
          </div>
          <div className="relative top-20 justify-center">
            <div className="cursor-pointer" onClick={handleScroll}>
              <SlArrowDown className="mx-auto text-red-600 text-5xl animate-bounce" />
              <p className="text-white font-bold justify-center mb-2 text-center">
                Ver proyectos
              </p>
            </div>
          </div>
        </FadeOnView>
      </div>
    </section>
  );
};

export default About;
