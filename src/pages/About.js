import Contact from "./Contact";
const About = () => {
    return ( 
        <>
         <div className="about">
            <div className="text">
               <div className="line"></div>
               <h1 className="head">A Bit About Me !</h1>
                <p className="prag">I have excellent knowledge in web development unfortunately I haven't had any experience in a company  but I have experienced building websites and web apps through my learning journey Moreover, I am highly organized and can find the best way to solve a problem quickly. I love challenges, and i hope you will give me a chance to prove my words in the job, or at least in this interview.</p>
               <h1 className="foot">Skills</h1>
            </div>
            <img src="WhatsApp Image 2023-06-23 at 6.37.56 PM.jpeg" alt="gig_img" />
         </div>
         <div className="skills">
            <ul>
               <li>
                  <h1>Html</h1>
                  <h1>Css</h1>
                  <h1>Scss</h1>
                  <h1>JavaScript</h1>
                  <h1>Reactjs</h1>
                  <h1>NodeJs</h1>
                  <h1>ExpressJs</h1>
                  <h1>MongoDb</h1>
               </li>
            </ul>
         </div>
         <Contact/>
        </>
     );
}
 
export default About;