import React, {useEffect, useState} from 'react';
import Layout from './layout';
import styles from '../styles/projects.module.css';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { addProject, deleteProject, updateProject } from '../../src/graphql/mutations'
import { allProject, getProject } from '../../src/graphql/queries'
import awsExports from "../../src/aws-exports";

export default function Projects() {

  Amplify.configure(awsExports)

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])
  
  async function fetchProjects() {
    try {
      const projectData = await API.graphql(graphqlOperation(allProject))
      const projects = projectData.data.allProject.projects
      setProjects(projects)
    } catch (err) { console.log('error fetching projects') }
  }

return(
  <Layout>
    <div>
    {
        projects.map((project, index) => (
          <div key={project.id ? project.id : index}>
            <p>{project.name}</p>
            <p>{project.description}</p>
          </div>
        ))
      }
    </div>
  </Layout>
)

}