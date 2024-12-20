import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="navbar navbar-expand-lg container-fluid" tag="nav">
      <NavbarBrand className="navbar-brand">
        <img src="/images/Rodeo logo.png" alt="Rodeo logo" width="70%" />
      </NavbarBrand>
      <NavbarToggler
        onClick={toggle}
        className="navbar-toggler"
        type="button"
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav
          className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-lg-center justify-content-center"
          navbar
        >
          <NavItem>
            <NavLink href="#">GET STARTED</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">EDUCATION CENTER</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">ABOUT US</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">PRIVACY POLICY</NavLink>
          </NavItem>
          <NavItem>
            <Button className="btn nav_button">Sign in</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
export default NavBar;
