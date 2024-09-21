import express from "express";
import { connectToDatabase } from "./services/database.service";
import http from 'http';
import { ApolloError, ApolloServer, Config, ExpressContext, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { loadSchema, loadTypedefs } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { GraphQLScalarType, Kind } from "graphql";
require('dotenv').config();
import typeDefs from "./graphql/typedefs/typedefs";
import { resolvers } from "./graphql/resolvers/resolvers";
import { ApolloLoggerPlugin } from 'apollo-server-logging';
import path from "path";

(async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const collections = await connectToDatabase()
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloLoggerPlugin({})
    ],
    context: async () => ({
      collections: collections
    })
  });

  await server.start();
    
  // Serve static react files
  app.use(express.static(path.join(__dirname, 'public')));

  // Apollo middleware
  server.applyMiddleware({ app });

  // Handle any requests that don't match the above
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  await new Promise(resolve => httpServer.listen({ port: process.env.PORT }, resolve as () => void));
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
})()






















// const app = express()
// // // app.use(express.json())
// // // app.use(require('body-parser').urlencoded({ extended: true }));


// const dateScalar = new GraphQLScalarType({
//   name: 'Date',
//   description: 'Date custom scalar type',
//   serialize(value: any) {
//     return value.toISOString().substring(0, 10); // Convert outgoing Date to integer for JSON
//   },
//   parseValue(value: any) {
//     //return new Date(value);
//     const dateValue = new Date(value);
//     return isNaN(dateValue as unknown as number) ? undefined : dateValue;
//   },
//   parseLiteral(ast) {
//     if (ast.kind == Kind.INT) {
//       const value = new Date(ast.value);
//       return isNaN(value as unknown as number) ? undefined : value as unknown as number;
//       //return new Date(parseInt(ast.value, 10));
//     } else if (ast.kind == Kind.STRING) {
//       const value = new Date(ast.value);
//       return isNaN(value as unknown as number) ? undefined : value;
//       //return new Date(ast.value)
//     }
//     return null;
//   }
// })

// // const typeDefs = gql`
// //   scalar Date

// //   enum EmployeeType {
// //     fulltime
// //     FullTime
// //     parttime
// //     Parttime
// //     contract
// //     Contract
// //     seasonal
// //     Seasonal
// //   }
// //   type Employee {
// //     _id: ID
// //     age: Int
// //     currentStatus: Boolean
// //     dateOfJoining: Date
// //     department: String
// //     employeeType: EmployeeType
// //     firstName: String
// //     lastName: String
// //     title: String
// //   }
// //   input EmployeeQueryInput {
// //     _id: ID
// //     firstName: String
// //     lastName: String
// //     department: String
// //     age: Int
// //     currentStatus: Boolean
// //     employeeType: String
// //     title: String
// //     dateOfJoining: Date
// //   }
// //   input EmployeeInsertInput {
// //     lastName: String
// //     department: String
// //     age: Int
// //     currentStatus: Boolean
// //     firstName: String
// //     employeeType: String
// //     title: String
// //     _id: ID
// //     dateOfJoining: Date
// //   }
// //   input EmployeeInsertInput2 {
// //     lastName: String
// //     department: String
// //     age: String
// //     currentStatus: String
// //     firstName: String
// //     employeeType: String
// //     title: String
// //     _id: String
// //     dateOfJoining: String
// //   }
// //   type Query {
// //     getEmployees: [Employee]
// //     employee(query: EmployeeQueryInput): Employee
// //   }
// //   type Mutation {
// //     insertOneEmployee(data: EmployeeInsertInput2!): Employee
// //   }
// // `

// class MyError extends ApolloError {
//   constructor(message: any) {
//     super(message, 'MY_ERROR_CODE');

//     Object.defineProperty(this, 'name', { value: 'MyError' });
//   }
// }

// const resolvers = {
//   Date: dateScalar,
//   Query: {
//     getEmployees: async () => {
//       // mongodb.db.collection("employees").find({});
//       try {
//         const { employees } = await connectToDatabase();
//         return await employees.find({}).toArray()
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   },
//   // Mutation: {
//   //   insertOneEmployee: async (parent, args) => {
//   //     const employee = new Employee(args.data)
//   //     try {
//   //       await employee.save()
//   //     } catch (error) {
//   //       const errorsJson = error.errors ? Object.keys(error.errors).reduce(
//   //         (errorObj, key) => ({ ...errorObj, [key]: error.errors[key].message }), {}) : {}
//   //       console.log(errorsJson)
//   //       throw new MyError(JSON.stringify(errorsJson))
//   //     }
//   //     return employee
//   //   }
//   // },
// }

// async function startApolloServer() {
//   const httpServer = http.createServer(app)
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     // mocks: true,
//   });

//   await server.start();
//   server.applyMiddleware({ app });
//   await new Promise(resolve => httpServer.listen(process.env.PORT, resolve as () => void));
//   console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
// }

// (async () => {
//   try {
//     await startApolloServer()
//   } catch (err) {
//     console.log(err);
//   }
// })()