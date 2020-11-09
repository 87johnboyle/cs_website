import React, {useEffect, useState} from 'react';
import Layout from './layout';
import {Container,Row,Col,Jumbotron} from 'react-bootstrap'
import styles from '../styles/whatwedo.module.css'


export default function WhatWeDo(){

    
    return(
        <>
        <Layout>
        


        <Jumbotron fluid className={styles.Jumboton}>
         <Container>
              <h1>Fluid jumbotron</h1>
                 <p className={styles.textInJumbo}>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
        </Container>
        </Jumbotron>
        <Jumbotron fluid className={styles.Jumboton}>
         <Container>
              <h1>Fluid jumbotron</h1>
                 <p className={styles.textInJumbo}>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
        </Container>
        </Jumbotron>
        <Jumbotron fluid className={styles.Jumboton}>
         <Container>
              <h1>Fluid jumbotron</h1>
                 <p className={styles.textInJumbo}>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
        </Container>
        </Jumbotron>







        </Layout>
        </>
    )
}