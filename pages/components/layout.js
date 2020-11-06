import styles from '../styles/layout.module.css'
import { Button } from 'react-bootstrap';
import NavBar from './navbar'
import Head from 'next/head'
import Footer from './footer'
export default function Layout({ children }) {
  return (
  
  <div className={styles.container}>
    <Head>
  <title>Code Scramblers</title>
  {/* This link adds bootstrap to out Layout which is in every page */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
</Head>
{/* top of the page */}
    <NavBar />

    {/*  this is what the page is, every component have this one incorporated inside */}
    <div className={styles.contentDiv}>
    {children}
    </div>
    

    {/* bottom of the page */}
    <Footer className={styles.footerClass}/>
  </div>
    )
}