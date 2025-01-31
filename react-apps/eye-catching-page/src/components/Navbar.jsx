import { useState } from "react";
import {
	Collapse,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
	NavLink,
} from "reactstrap";

const NavbarSection = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar expand="lg" dark className="bg-color navbar-section py-3">
			<NavbarBrand className="navbar-brand py-2">Abdul Muhaimin</NavbarBrand>
			<NavbarToggler onClick={toggle} />

			<Collapse isOpen={isOpen} navbar className="">
				<Nav className="ms-auto" navbar>
					<NavItem className="nav-item">
						<NavLink href="/" className="nav-link">
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#online-section" className="nav-link">
							Services
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#contact-section" className="nav-link">
							Contact
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#experts-panel" className="nav-link">
							About
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default NavbarSection;
