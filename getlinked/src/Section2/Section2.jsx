import "./Section2.css";
import lady from "../assets/7450159 1.svg";
import girlboy from "../assets/8046554 1.svg";

const Section2 = () => {
  return (
    <div className="overall2div">
      <div className="parent2div">
        <div className="text3div">
          <h1>
            Rules and <br /> Guidelines
          </h1>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <img className="lady" src={lady} alt="" />
      </div>
      <div className="girlboydiv">
        <img src={girlboy} alt="" />
        <div>
          <h1>Judging Criteria <br /> Key attributes</h1>
          <p>
            Innovation and Creativity: Evaluate the uniqueness and creativity of
            the solution. Consider whether it addresses a real-world problem in
            a novel way or introduces innovative features.
          </p>
          <p>
            Functionality: Assess how well the solution works. Does it perform
            its intended functions effectively and without major issues? Judges
            would consider the completeness and robustness of the solution.
          </p>
          <p>
            Impact and Relevance: Determine the potential impact of the solution
            in the real world. Does it address a significant problem, and is it
            relevant to the target audience? Judges would assess the potential
            social, economic, or environmental benefits.
          </p>
          <p>
            Technical Complexity: Evaluate the technical sophistication of the
            solution. Judges would consider the complexity of the code, the use
            of advanced technologies or algorithms, and the scalability of the
            solution.
          </p>
          <p>
            Adherence to Hackathon Rules: Judges will Ensure that the team
            adhered to the rules and guidelines of the hackathon, including
            deadlines, use of specific technologies or APIs, and any other
            competition-specific requirements.
          </p>
          <button>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
