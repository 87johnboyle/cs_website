import { ApolloServer, gql } from 'apollo-server-micro';
import Cors from "micro-cors";
import knex from "knex";

//Constant to help manage db within our code

const db = knex({
    client: "pg",
    connection: "postgres://postgres@localhost:5432/projects"
})

// Let micro-corse clean up any issues with cors

const cors = Cors({
    allowMethods: ["POST", "OPTIONS"]
})

//Schema for our api, queries and mutations to create data

const schema = gql`

type Mutation {
    createProject(name:String!, description:String!, frameworks:String!, namedLead:String!, channelName:String!, active: Boolean!): Project
    completeProject(id: ID!): Project
}

  type Query {
    projects: [Project]!
    project(id: ID!): Project
  }

  type Project {
      id: ID!
      name: String!
      description: String!
      frameworks: String!
      namedLead: String!
      channelName: String!
      active: Boolean!
  }
`;

//Resolver to tell graphql where to fetch data from and what queries will be in use

const resolvers = {
    Query: {
      projects: (_parent, _args, _context) => {
          return db
          .select("*")
          .from("projects")
          .orderBy("id")
      },
      project: (_parent, _args, _context) => {
        return db
        .select("*")
        .from("projects")
        .orderBy("id")
        .first()
        }
    },

    Mutation: {
        createProject: async (_, { name, description, frameworks, namedLead, channelName, active}, _c) => {
          return (await db("projects").insert({name, description, frameworks, namedLead, channelName, active}).returning("*"))[0]
        },
        completeProject: async (_, { id }, _c) => {
          return (await db("projects").select("*").where({ id }).returning("*"))[0];
        }
      }
  }

  //set up of server

  const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: () => {
      return {}
    }
  })

//handler to handle all requests and responses

const handler = apolloServer.createHandler({ path: "/api/graphql" });

//standard export hook, body parser false needed in nextjs

  export const config = {
    api: {
      bodyParser: false
    }
  };
  
  export default cors(handler);