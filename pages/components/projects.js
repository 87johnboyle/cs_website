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

  const renderHeader = () => {
    let headerElement = ['name', 'description', 'frameworks', 'Named Lead', 'Channel Name']

      return headerElement.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
  }

  const renderBody = () => {
    return projects && projects.map(({ id, name, description, frameworks, namedLead, channelName }) => {
        return (
            <tr key={id}>
                <td>{name}</td>
                <td>{description}</td>
                <td>{frameworks}</td>
                <td>{namedLead}</td>
                <td>{channelName}</td>
            </tr>
        )
    })
}

return(
  <Layout>
          <h1>Current Projects</h1>
    
          <table id='projects'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
    
        </Layout>
)

}