import React, {useEffect, useState} from 'react';
import Layout from './layout';
import styles from '../styles/projects.module.css';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';

const GET_PROJECTS = gql`
  query {
    projects {
      id
      name
      description
      frameworks
      namedLead
      channelName
    }
  }
`

export default function Projects() {
  
      const { loading, error, data, refetch } = useQuery(GET_PROJECTS);

      const renderHeader = () => {
      let headerElement = ['id', 'name', 'description', 'frameworks', 'Named Lead', 'Channel Name']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
      return data.projects && data.projects.map(({ id, name, description, frameworks, namedLead, channelName }) => {
          return (
              <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>{frameworks}</td>
                  <td>{namedLead}</td>
                  <td>{channelName}</td>
              </tr>
          )
      })
  }

      if(loading) return <p>Loading...</p>
      if(error) return <p>ERROR</p>
    
      return (
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