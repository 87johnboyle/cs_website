import {Card, Button} from 'react-bootstrap'
import styles from '../styles/testProjectPage.module.css'
import Layout from './layout'


export default function testProjectPage() {

    return(
        <>
        <Layout>
        <div className={styles.divContainer}>
       <Card className={ styles.card }>
           
  <Card.Img variant="top" src="/images/react.png" width="232px" height="200px" />
  {/* <div className={styles.imgDiv}></div> */}
  {/* insted of image */}
  <Card.Body>
    <Card.Title>Take over the World!</Card.Title>
    <Card.Text>
      Some quick project to take over the world!
    </Card.Text>
    <Button variant="primary">More Information</Button>
  </Card.Body>
</Card>




<Card className={ styles.card }>
           
<Card.Img variant="top" src="/images/vue.jpg" width="232px" height="200px" />
           {/* insted of image */}
           <Card.Body>
             <Card.Title>Take over the World!</Card.Title>
             <Card.Text>
               Some quick project to take over the world!
             </Card.Text>
             <Button variant="primary">More Information</Button>
           </Card.Body>
         </Card>




         <Card className={ styles.card }>
           
         <Card.Img variant="top" src="/images/angular.png" width="232px" height="200px" />
           {/* insted of image */}
           <Card.Body>
             <Card.Title>Take over the World!</Card.Title>
             <Card.Text>
               Some quick project to take over the world!
             </Card.Text>
             <Button variant="primary">More Information</Button>
           </Card.Body>
         </Card>





         <Card className={ styles.card }>
           
         <Card.Img variant="top" src="/images/favicon.ico" width="232px" height="200px" />
           
           {/* insted of image */}
           <Card.Body>
             <Card.Title>Take over the World!</Card.Title>
             <Card.Text>
               Some quick project to take over the world!
             </Card.Text>
             <Button variant="primary">More Information</Button>
           </Card.Body>
         </Card>
         


         </div>

</Layout>
</>
    )
}