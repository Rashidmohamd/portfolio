import About from "./About";
const Porjects = () => {
    return ( 
    <>
      <div className="project">
        <div className="group group1">
          <h1 className="head">3+</h1>
          <p className="body">completed projects</p>
        </div>
        <div className="group group2">
          <h1 className="head">6+</h1>
          <p className="body">gitHub repositories</p>
        </div>
        <div className="group group3">
          <h1 className="head">0</h1>
          <p className="body">git</p>
        </div>
        <div className="group group4">
          <h1 className="head">2+</h1>
          <p className="body">Dcoker</p>
        </div>
     </div> 
     <About/>
    </>
    );
}
 
export default Porjects;