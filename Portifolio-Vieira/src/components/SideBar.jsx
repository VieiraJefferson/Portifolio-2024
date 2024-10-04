import SocialNetworks from "./SocialNetworks"
import Avatar from "../img/eu1.jpg";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import curriculo from "./files/Curriculo.pdf";




const SideBar = () => {



  return <aside id="sidebar">
      <img src={Avatar} alt="Jefferson Vieira" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetworks />
      <InformationContainer />
      {/* <a href="" className="btn-download">
        Download currículo
        </a>   */}
        <button className="btn-download">
          <a className="text-download" href={curriculo} download="curriculo">Descarregar Curriculo</a>
        </button>
      
  </aside>
}

export default SideBar