import Link from 'next/link';
import styles from '../styles/navbar.module.css'


export default function NavBar({ children }) {
    return (
       
    <div className={styles.navbarPositionBackground}>
            
 {/* Input all your pages here for navbar, remember to add <NavBar /> to new page */}
            
      

 <nav className="nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/components/projects">Projects</Link>
          </li>
          <li>
            <Link href="/"><i className="logo"></i></Link>
          </li>
          <li>
            <Link href="/components/join">Join Us</Link>
          </li>
          <li>
            <Link href="/components/contact">Contact</Link>
          </li>
        </ul>
      </nav>


    </div>






    )
  }