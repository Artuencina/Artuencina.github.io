//Seccion experiencia

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import FadeOnView from "./FadeOnView";

const Experiencia = () => {
  return (
    <section
      id="experiencia"
      className="w-full bg-slate-950 flex flex-col justify-start items-center"
    >
      <FadeOnView>
        <h1 className="text-red-600 md:text-5xl text-4xl font-bold text-center mb-12">
          Experiencia
        </h1>
      </FadeOnView>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(32, 26,27)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(32, 26, 23)" }}
          date="2023 - Presente"
          iconStyle={{ background: "rgb(220, 38, 38)", color: "#fff" }}
          
        >
          <h3 className="vertical-timeline-element-title font-bold text-2xl text-red-500">Programador Freelance</h3>
          <h4 className="vertical-timeline-element-subtitle">Remoto</h4>
          <p>
            Desarrollo de aplicaciones web, de escritorio y móviles con Flutter, C# y .NET
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Presente"
          contentArrowStyle={{ borderRight: "7px solid  rgb(32, 26,27)" }}
          contentStyle={{ background: "rgb(32, 26,27)", color: "#fff" }}
          iconStyle={{ background: "rgb(220, 38, 38)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title font-bold text-2xl text-red-500">Warani Studios</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Desarollador de videojuegos
          </h4>
          <p>
            Desarrollo de videojuegos utilizando Unreal Engine.
            <br />
            Warani Studios es una empresa paraguaya de desarrollo de videojuegos publicados en PlayStation y Xbox.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "rgb(220, 38, 38)", color: "#fff" }}
           contentStyle={{ background: "rgb(32, 26,27)", color: "#fff" }}
           contentArrowStyle={{ borderRight: "7px solid  rgb(32, 26,27)" }}
        >
          <h3 className="vertical-timeline-element-title font-bold text-2xl text-red-500">Tileria y Asociados</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Desarrollo de sistemas
          </h4>
          <p>
            Diseño, desarrollo y mantenimiento de sistemas para empresas utiliznado C#, .NET, ASP.NET y .NET Framework.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experiencia;
