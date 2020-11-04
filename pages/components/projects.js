import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import NavBar from './navbar';
import Layout from './layout';
import styles from '../styles/projects.module.css';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';

const GET_PROJECTS = gql`
  query {
    projects {
      id
      name
    }
  }
`

export default function Projects() {
  
      const { loading, error, data, refetch } = useQuery(GET_PROJECTS);

      if(loading) return <p>Loading...</p>
      if(error) return <p>ERROR</p>
    
      return (
        <div>
          <Layout>
          <h1>Current Projects</h1>
    
          {
            data.projects.map((project) => (
              <div key={project.id}>
                {project.name}
              </div>
            ))
          }
    
        </Layout>
        </div>
        
      )
    }