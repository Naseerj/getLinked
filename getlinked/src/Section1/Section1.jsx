import "./Section1.css";
import chain from "../assets/chain-9365116-7621444.svg";
import man from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.svg";
import globe from "../assets/Image 1.svg";
import idea from "../assets/the big idea 1.svg";
import strikethrough from '../assets/Vector 4.svg'
import bulb from '../assets/Creative 1.svg'

const Section1 = () => {
  return (
    <div className="overall1div">
      <div className="parent1div">
        <div className="text1div">
          <h1 className="firstheader">
            getlinked Tech <br /> Hackathon 1.0 <img src={chain} alt="" />
            <img src={bulb} alt="" />
          </h1>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button>Register</button>
        </div>
        <div className="manglobediv">
          <h2>Igniting a Revolution in HR Innovation</h2>
          <img className="strikethrough" src={strikethrough} alt="" />
          <img className="man" src={man} alt="" />
          <img className="globe" src={globe} alt="" />
        </div>
      </div>
      <div className="ideadiv">
        <img src={idea} alt="" />
        <div className="text2div">
          <h1>Introduction to getlinked <br /><span className="tech">tech Hackathon 1.0</span> </h1>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
