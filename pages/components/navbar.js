
import Link from 'next/link';
import styles from '../styles/navbar.module.css'
import {Navbar,Form,Nav,FormControl,Button,NavDropdown} from 'react-bootstrap'

export default function NavBar({ children }) {
    return (
       
    <div className={styles.navbarPositionBackground}>
            
 {/* Input all your pages here for navbar, remember to add <NavBar /> to new page */}
            
 <Navbar bg="dark" variant="dark" expand="lg">
 <Navbar.Brand href="/">CodeScramblers</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/components/projects">Projects</Nav.Link>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="/components/whatwedo">What We Do</NavDropdown.Item>
        <NavDropdown.Item href="/components/testProjectPage">Test Project Page</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Want to Join?</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item  disabled style={{ pointerEvents: 'none' }} >It's Free To Join!</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
  </Navbar>
 










        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-people" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
</svg>
  <button className="navbar-toggler" type="button" 
  data-toggle="collapse" data-target="#navbarNav" 
  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link  href="/"><a className="navbar-brand"> Home</a></Link>
      </li>
      
      <li className="nav-item">
      <Link  href="/components/projects"><a className="navbar-brand">Projects</a></Link>
      </li>
     
    </ul>
    <span className="navbar-text">
      Code Scramblers Simply from love to code
     
    </span>
  </div>
</nav> */}


    </div>






    )
  }