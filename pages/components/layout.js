import styles from '../styles/layout.module.css'
import { Button } from 'react-bootstrap';

export default function Layout({ children }) {
  return (<div className={styles.container}>
    {children}Ladida
    <Button type="button" className="btn btn-primary">Primary</Button>

  </div>
    )
}