import {Card, Button,Modal} from 'react-bootstrap'
import styles from '../styles/testProjectPage.module.css'
import Layout from './layout'
import {useState} from 'react'

export default function testProjectPage() {




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
   


    <Button variant="primary" onClick={handleShow}>
       More Information
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Card.Img variant="top" src="/images/react.png" width="400px" height="400px" />
        <Modal.Header closeButton>
        
          <Modal.Title>Take Over the World Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <h5>This project is about ......</h5>
       <p>Our vision is this and this and this</p>
      <p>Some more text,Some more text,Some more text,Some more text,Some more text,Some more text,Some more text,Some more text,Some more text,Some more text,Some more text,Some more text,Some more text, </p>
       <ul>
         <li>React - front end</li>
         <ul>
           <li>bootstrap</li>
         </ul>
         <li>AWS - Back end</li>
         <ul>
           <li>graphql</li>
           <li>dynamoDB</li>
         </ul>
         <li>Communication</li>
         <ul>
           <li>Slack</li>
           <li>ClickUp</li>
         </ul>
       </ul>
                  {/* <td>No.1</td>
                  <td>Take Over The World!</td>
                  <td>PProject involces ladida.....</td>
                  <td>NextJS, AWS,BootStrap</td>
                  <td>John</td>
                  <td>Slack,ClickUp</td> */}
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Want To Join?</Button>
        </Modal.Footer>
      </Modal>

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