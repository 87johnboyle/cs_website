/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const allProject = /* GraphQL */ `
  query AllProject($count: Int, $nextToken: String) {
    allProject(count: $count, nextToken: $nextToken) {
      projects {
        id
        name
        description
        frameworks
        channelName
        namedLead
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: String) {
    getProject(id: $id) {
      id
      name
      description
      frameworks
      channelName
      namedLead
    }
  }
`;
