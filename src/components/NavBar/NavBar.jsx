import logoUmpa from "../../assets/images/logo-umpa-loompa.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
        <Link to="/" onClick={"window.scrollTo(0, 0)"}>
          <div className="flex-navbar">
            <img
              alt="logo umpa loompa"
              src={logoUmpa}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <p>Oompa Loompa's Crew</p>
          </div>
        </Link>
    </div>
  );
};

export default NavBar;
