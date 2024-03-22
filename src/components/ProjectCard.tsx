//Card de bootstrap para mostrar los proyectos
import { Card, Badge } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  //Multiples descripciones para poner con bullet points
  description: string;
  //Link a la pagina del proyecto en github
  githubLink: string;
  image: string;
  tags: string[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <article>
      <a href={props.githubLink} target="_blank" rel="noreferrer">
        <Card className="border-2 border-white rounded-lg w-[430px] text-white hover:text-red-600 hover:border-red-600 transition duration-300 ease-in-out cursor-pointer">
          <Card.Img
            variant="top"
            src={props.image}
            className="w-[100%] h-[200px] object-cover rounded"
          />
          <Card.Body>
            <Card.Title className="text-2xl font-bold text-center mb-3">
              {props.title}
            </Card.Title>
            <Card.Text className="ml-6 mb-4">{props.description}</Card.Text>
          </Card.Body>

          <Card.Body className="flex flex-row justify-center items-center"></Card.Body>

          <Card.Footer className="flex flex-row justify-start items-center gap-2 p-4">
            {props.tags.map((tag, index) => {
              return (
                <Badge
                  key={index}
                  pill
                  className="text-black bg-gray-100 rounded px-1"
                >
                  {tag}
                </Badge>
              );
            })}
          </Card.Footer>
        </Card>
      </a>
    </article>
  );
};
