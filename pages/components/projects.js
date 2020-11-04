import Link from 'next/link';
import {useEffect, useState} from 'react';
import NavBar from './navbar';
import Layout from './layout';
import styles from '../styles/projects.module.css';
import firebase from 'firebase'

export default function Projects() {
  
  var firebaseConfig = {
    apiKey: "AIzaSyCGXPc1fmv8Cv9-EeJJ2PFPXNT0TYCoDRo",
    authDomain: "cs-website-43d4f.firebaseapp.com",
    databaseURL: "https://cs-website-43d4f.firebaseio.com",
    projectId: "cs-website-43d4f",
    storageBucket: "cs-website-43d4f.appspot.com",
    messagingSenderId: "320586456534",
    appId: "1:320586456534:web:fab9fe07d7b80f21f01877",
    measurementId: "G-VS5LS9KCGE"
  };

if (typeof window !== 'undefined' && !firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
  const projectsRef = db.collection('projects');
  const snapshot = projectsRef.get();
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data())
    
  });}

    return (
             <Layout>
<div className={styles.tableContainer}>
<table class="table table-hover table-dark">
  <thead>
    <tr>
        
      <th scope="col">#</th>
      <th scope="col">Project Name</th>
      <th scope="col">Framework Used</th>
      <th scope="col">Work Needed</th>
      <th scope="col">Contributors</th>

    </tr>
  </thead>
  <tbody>
  
    <tr> 
    <th scope="row">1</th>
  
      <td>Bitcoin Price Checker</td>
      <td>Vue, SpringBoot</td>
      <td>BackEnd,Api Fetches</td>
      <td>2</td>
     
   
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Hiking Trails</td>
      <td>React, MongoDB</td>
      <td>GoogleMaps, styles CSS</td>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      {/* <td colspan="2">Larry the Bird</td> */}
      <td>Weather App</td>
      <td>React-Native</td>
      <td>API Fetches, Styling, Components Building</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>     
            </Layout>
        
    )}