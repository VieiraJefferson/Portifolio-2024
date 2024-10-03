import SocialNetworks from "./SocialNetworks";
import Avatar from "../img/eu6.jpg";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";


const SideBar = () => {
  return <aside id="sidebar">
      <img src={Avatar} alt="Jefferson Vieira" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download currículo
        </a>
  </aside>
}

export default SideBar