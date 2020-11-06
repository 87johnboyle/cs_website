import React, {useEffect, useState} from 'react';
import Layout from './layout';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';

const CREATE_PROJECT = gql`
mutation CreateProject($name: String!, $description: String!, $frameworks: String!, $namedLead: String!, $channelName: String!) {
  createProject(name: $name, description: $description, frameworks: $frameworks, namedLead: $namedLead, channelName: $channelName) {
    id
    name
    description
    frameworks
    namedLead
    channelName
  }
}
`
export default function addProject() {
 
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [frameworks, setFrameworks] = useState("");
  const [namedLead, setNamedLead] = useState("");
  const [channelName, setChannelName] = useState("");

  const [createProject] = useMutation(CREATE_PROJECT);

  const saveProject = async (e) => {
    e.preventDefault();
    await createProject({variables: { name: name, description: description, frameworks, frameworks, namedLead, namedLead, channelName, channelName}});
    setName("")
    setDescription("")
    setFrameworks("")
    setNamedLead("")
    setChannelName("")
  }

return (


<Layout>
<div>
      <h1>New Project</h1>

      <form onSubmit={saveProject}>
        <label>
          Project Name
          <input onChange={e => setName(e.target.value)} value={name} />
        </label>
        <label>
          Project Description
          <input onChange={e => setDescription(e.target.value)} value={description} />
        </label>
        <label>
          Frameworks Used (seperated by comma)
          <input onChange={e => setFrameworks(e.target.value)} value={frameworks} />
        </label>
        <label>
          Name of Lead Dev
          <input onChange={e => setNamedLead(e.target.value)} value={namedLead} />
        </label>
        <label>
          Slack Channel Name
          <input onChange={e => setChannelName(e.target.value)} value={channelName} />
        </label>
        <button type="submit">Save</button>
      </form>
</div></Layout>

)

}