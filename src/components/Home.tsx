//Seccion de inicio con nombre y typewriter
import TypewriterComponent from "typewriter-effect";
import { SlArrowDown } from "react-icons/sl";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import FadeOnView from "./FadeOnView";

const roles = [
  "Desarrollador Full Stack",
  "Ingeniero en informática",
  "Desarrollador de videojuegos",
  "Desarrollador mobile",
];

const Home = () => {
  //Funcion para hacer scroll a la siguiente seccion
  const handleScroll = () => {
    //Hacer scroll a la siguiente seccion
    const about = document.getElementById("about");

    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="w-full h-screen top-0 bg-black flex flex-col justify-center items-center"
    >
      <div className="absolute top-0 w-full h-full bg-black opacity-50">
        <video
          autoPlay
          loop
          muted
          src="background.mp4"
        ></video>
      </div>
      <FadeOnView>
        <h1 className="text-white md:text-5xl text-4xl font-bold text-center">
          Hola, soy <span className="text-red-600">Arturo Encina</span>
        </h1>

        <div className="flex mt-8 justify-center items-center">
          <TypewriterComponent
            options={{
              cursor: "|",
              cursorClassName: "text-white text-2xl animate-pulse",
              wrapperClassName: "text-white font-bold md:text-2xl text-xl",
              strings: roles,
              autoStart: true,
              delay: 75,
              loop: true,
            }}
          />
        </div>
      
      <div className="flex flex-row justify-center mt-10">
        <a
          href="
          https://www.github.com/artuencina"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <AiFillGithub className="text-4xl text-white hover:scale-110 transition duration-300 ease-in-out" />
        </a>
        
        <a
          href="
          https://www.linkedin.com/in/artwoencina/"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <FaLinkedin className="text-4xl text-white hover:scale-110 transition duration-300 ease-in-out" />
        </a>

        <a
          href="
          https://www.instagram.com/artwoencina/"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <AiFillInstagram className="text-4xl text-white hover:scale-110 transition duration-300 ease-in-out" />
        </a>


      </div>
      </FadeOnView>

      <div className="absolute top-[75%] justify-center">
        <div className="cursor-pointer" onClick={handleScroll}>
          <SlArrowDown className="mx-auto text-red-600 text-5xl animate-bounce" />
          <p className="text-white font-bold justify-center mb-2">
            Más sobre mí
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
