//Seccion de contacto
//Tiene la opcion de descargar el CV, un link para enviar un correo

import { FaFile, FaEnvelope } from "react-icons/fa";
import FadeOnView from "./FadeOnView";

const cvLink =
  "https://drive.usercontent.google.com/u/0/uc?id=1e8w1kZ8pUfSjFZPhHJZJqfsUEeqfheof&export=download";

const Contacto = () => {
  return (
    <section
      id="contacto"
      className="w-full h-[600px] bg-slate-950 flex flex-col justify-center items-center"
    >
      <FadeOnView>
        <h1 className="text-red-600 md:text-5xl text-4xl font-bold text-center mb-12">
          Contacto
        </h1>
      </FadeOnView>

      <FadeOnView>
        <div className="flex flex-col items-center">
          <a
            href={cvLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg mb-4 hover:scale-110 transition duration-300 ease-in-out"
          >
            <FaFile className="mr-2" />
            Descargar CV
          </a>
          <a
            href="mailto:arturoencina9@outlook.es"
            className="flex items-center text-white font-bold text-xl hover:underline hover:scale-110 transition duration-300 ease-in-out"
          >
            <FaEnvelope className="mr-2"></FaEnvelope>
            Enviar Email
          </a>
        </div>
      </FadeOnView>
    </section>
  );
};

export default Contacto;
