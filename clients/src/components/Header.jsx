import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <div className="d-flex">
            <img className="mr-2" src={logo} alt="logo" />
            <div className="">Project Management</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
