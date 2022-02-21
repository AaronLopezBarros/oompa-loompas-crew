import { Navbar, Container, Col } from "react-bootstrap";
import logoUmpa from "../../assets/images/logo-umpa-loompa.png";
import "./NavBar.css"

const NavBar = () => {
  return (

      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo umpa loompa"
              src={logoUmpa}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Oompa Loompa's Crew
          </Navbar.Brand>
        </Container>
      </Navbar>

  );
};

export default NavBar;
