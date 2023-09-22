import "./Navbar.css";
import logo from "../assets/getlinked.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="" />
      <div className="linksdiv">
        <a href="">Timeline</a>
        <a href="">Overview</a>
        <a href="">FAQs</a>
        <a href="">Contact</a>
        <button>Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
