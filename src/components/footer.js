import { Link } from "react-router-dom";
import Github from "./GH";
import Facebook from "./FB";
import IntiG from "./IM";
import Linkedin from "./LK";

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="sociales">
                <Link to="https://github.com/Rashidmohamd"><Github/></Link>
                <Link to="https://www.facebook.com/profile.php?id=100038230684930"><Facebook/></Link>
                <Link to="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fmahammad8269%3Figshid%3DMzNlNGNkZWQ4Mg%253D%253D%26fbclid%3DIwAR0a76lApWIJ7XuUqcnm6EsL0CAHbjz6MRiNGRebNSyFW4aTU74RFrX1nmA&h=AT3c8Oxbc0ElzjwXrWM3HjFjw45cm-PJ6Np0Z4hBvs3l3TTOKL2hrFi9Ka954g3b49WRIomilb-gGmxwL5AIWguFvpzAyYONO6HI_ZwzoivRbdCYBiMTdD20cmA-5Q"><IntiG/></Link>
                <Link to="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frashid-mohamed-214148256%3Ffbclid%3DIwAR0zNdtOVsQO3WBMum66kct5un34gfkWiax7_HPBHyH6b2TApuYYgoxC2rg&h=AT3c8Oxbc0ElzjwXrWM3HjFjw45cm-PJ6Np0Z4hBvs3l3TTOKL2hrFi9Ka954g3b49WRIomilb-gGmxwL5AIWguFvpzAyYONO6HI_ZwzoivRbdCYBiMTdD20cmA-5Q"><Linkedin/></Link>
            </div>
            <div className="copy"> &copy; Rashid Mohammed</div>
        </div>
     );
}
 
export default Footer;