import Porjects from "./Projects";
import Lab from "../components/lab";
import {useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const navigator =(e,t)=>{
    e.preventDefault();
    navigate(t)
  }
    return ( 
    <>
      <div className="home">
          <div className="text">
            <h1 className="head">
              Hello, <br/>I am <span>Rashid Mohammed</span>
            </h1>
            <h3>
                Web developer
            </h3>
            <div className="btns">
                <button onClick={e=>navigator(e,"/contact")} className="contactBtn">Contact</button>
                <button onClick={e=>navigator(e,"/project")} className="projectBtn">Projects</button>
            </div>
          </div>
          <div className="svgG">
            <Lab/>
            <img src="/Rashid1.png" alt="Rashid_img" />
          </div>
      </div>
      <Porjects/>
    </> 
    );
}
 
export default Home;