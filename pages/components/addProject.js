import React, {useEffect, useState} from 'react';
import Layout from './layout';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';

const CREATE_PROJECT = gql`
mutation CreateProject($name: String!) {
  createProject(name: $name) {
    id
    name
  }
}
`
export default function addProject() {
 
  const [project, setProject] = useState("");
  const [createProject] = useMutation(CREATE_PROJECT);

  const saveProject = async (e) => {
    e.preventDefault();
    await createProject({variables: { name: project }});
    setProject("")
  }

return (


<Layout>
<div>
      <h1>New Project</h1>

      <form onSubmit={saveProject}>
        <label>
          New Project Name
          <input onChange={e => setProject(e.target.value)} value={project} />
        </label>
        <button type="submit">Save</button>
      </form>
</div></Layout>

)

}