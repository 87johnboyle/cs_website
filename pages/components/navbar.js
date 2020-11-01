
import Link from 'next/link';
import styles from '../styles/navbar.module.css'


export default function NavBar({ children }) {
    return (
       
        <div className={styles.navbarPositionBackground}>
             <Link  href="/"><a className={styles.navLink}> HOME</a></Link>
            <Link  href="/components/projects"><a className={styles.navLink}>PROJECTS</a></Link>
           


        </div>






    )
  }