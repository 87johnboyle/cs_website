import styles from '../styles/footer.module.css'

export default function Footer (){

    return (
        <div className={styles.footerMain}>
            <div className={styles.sitemap}>
            <label>Site Map</label>
            <hr/>
           <ul>
               <li>Home</li>
               <li>Projects</li>
           </ul>
           </div>
        </div>
    )
}