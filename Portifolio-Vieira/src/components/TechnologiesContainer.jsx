import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";
import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", resumo:"Linguagem de marcação pra estrutura de código e conteúdo web", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3",resumo:"Linguagem de regras de estilo, definição de cores fundo fontes e tudo relacionado à estilização do conteúdo web" ,icon: <DiCss3 /> },
  { id: "js", name: "JavaScript",resumo:"Linguagem de Programação" , icon: <DiJsBadge /> },
  { id: "node", name: "Node.js",resumo:"APIs, servidores web, aplicações em tempo real e utilitários de linha de comando" , icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL",resumo:"Gerenciamento de banco de dados" , icon: <DiMysql /> },
  { id: "react", name: "React",resumo:"Componentização, Renderizar condiçoes e listas, Eventos, Compartilhar dados entre componentes, JSX, Hooks, " , icon: <DiReact /> },
];


const TechnologiesContainer = () => {
  return <section className="technologies-container">
    <h2>Tecnologias</h2>

      <div className="technologies-grid">
        {technologies.map((tech)=>(
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name} </h3>
              <p>{tech.resumo}
                 </p>
            </div>
          </div>
        ))}
      </div>
  </section>
}

export default TechnologiesContainer