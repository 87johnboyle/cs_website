import React, {useEffect, useState} from 'react';
import Layout from './layout';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { addProject, deleteProject, updateProject } from '../../src/graphql/mutations'
import { allProject, getProject } from '../../src/graphql/queries'
import awsExports from "../../src/aws-exports";


export default function newProject() {

  Amplify.configure(awsExports);

  const initialState = { name: '', description: '', frameworks: '', namedLead: '', channelName: '' }
  const [formState, setFormState] = useState(initialState)
  const [projects, setProjects] = useState([])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function createProject() {
    try {
      if (!formState.name || !formState.description || !formState.frameworks || !formState.namedLead || !formState.channelName) return
      const project = { ...formState }
      setProjects([...projects, project])
      setFormState(initialState)
      await API.graphql(graphqlOperation(addProject, {input: project}))
    } catch (err) {
      console.log('error creating project:', err)
    }
  }

return (


<Layout>
<div>
<h2>Add Project</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        value={formState.description}
        placeholder="Description"
      />
      <input
        onChange={event => setInput('frameworks', event.target.value)}
        value={formState.frameworks}
        placeholder="Frameworks"
      />
      <input
        onChange={event => setInput('namedLead', event.target.value)}
        value={formState.namedLead}
        placeholder="Named Lead"
      />
      <input
        onChange={event => setInput('channelName', event.target.value)}
        value={formState.channelName}
        placeholder="Channel Name"
      />
      <button onClick={createProject}>Create Project</button>
</div></Layout>

)

}