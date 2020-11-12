/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteProject = /* GraphQL */ `
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      name
      description
      frameworks
      channelName
      namedLead
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $id: String
    $name: String
    $description: String
    $frameworks: String
    $channelName: String
    $namedLead: String
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      frameworks: $frameworks
      channelName: $channelName
      namedLead: $namedLead
    ) {
      id
      name
      description
      frameworks
      channelName
      namedLead
    }
  }
`;
export const addProject = /* GraphQL */ `
  mutation AddProject($input: createProjectInput) {
    addProject(input: $input) {
      id
      name
      description
      frameworks
      channelName
      namedLead
    }
  }
`;
