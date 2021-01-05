import React from "react"
import Nav from "react-bootstrap/Nav"

const Navbar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#">Home</Nav.Link>
				<Nav.Link href="#">Mercs</Nav.Link>
				<Nav.Link href="#">Guns</Nav.Link>
				<Nav.Link href="#">Jobs</Nav.Link>
				<Nav.Link href="#">Job Execution</Nav.Link>
			</Nav>
		</Navbar>
	)
}

export default Navbar
