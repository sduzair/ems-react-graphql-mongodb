import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { EmployeeType } from "./models/employee";

const collections: { employees?: mongoDB.Collection<EmployeeType> } = {};

export async function connectToDatabase(): Promise<{ employees?: mongoDB.Collection<EmployeeType> }> {
  // Pulls in the .env file so it can be accessed from process.env. No path as .env is in root, the default location
  dotenv.config();

  // Create a new MongoDB client with the connection string from .env
  const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

  // Connect to the cluster
  await client.connect();

  // Connect to the database with the name specified in .env
  const db = client.db(process.env.DB_NAME);

  // Apply schema validation to the collection
  // await applySchemaValidation(db);

  // Connect to the collection with the specific name from .env, found in the database previously specified
  const employeesCollection = db.collection<EmployeeType>(process.env.EMPLOYEES_COLLECTION_NAME);

  // Persist the connection to the employees collection
  collections.employees = employeesCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${employeesCollection.collectionName}`,
  );
  return collections;
}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Game model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
// async function applySchemaValidation(db: mongoDB.Db) {
//     const jsonSchema = {
//         $jsonSchema: {
//             bsonType: "object",
//             required: ["name", "price", "category"],
//             additionalProperties: false,
//             properties: {
//                 _id: {},
//                 name: {
//                     bsonType: "string",
//                     description: "'name' is required and is a string",
//                 },
//                 price: {
//                     bsonType: "number",
//                     description: "'price' is required and is a number",
//                 },
//                 category: {
//                     bsonType: "string",
//                     description: "'category' is required and is a string",
//                 },
//             },
//         },
//     };

//     // Try applying the modification to the collection, if the collection doesn't exist, create it
//    await db.command({
//         collMod: process.env.GAMES_COLLECTION_NAME,
//         validator: jsonSchema
//     }).catch(async (error: mongoDB.MongoServerError) => {
//         if (error.codeName === 'NamespaceNotFound') {
//             await db.createCollection(process.env.GAMES_COLLECTION_NAME, {validator: jsonSchema});
//         }
//     });
// }
// {
//   "title": "employee",
//   "properties": {
//     "_id": {
//       "bsonType": "objectId"
//     },
//     "address": {
//       "bsonType": "object",
//       "properties": {
//         "address": {
//           "bsonType": "string"
//         },
//         "city": {
//           "bsonType": "string"
//         },
//         "coordinates": {
//           "bsonType": "object",
//           "properties": {
//             "lat": {
//               "bsonType": "double"
//             },
//             "lng": {
//               "bsonType": "double"
//             }
//           }
//         },
//         "postalCode": {
//           "bsonType": "string"
//         },
//         "state": {
//           "bsonType": "string"
//         }
//       }
//     },
//     "age": {
//       "bsonType": "int"
//     },
//     "bank": {
//       "bsonType": "object",
//       "properties": {
//         "cardExpire": {
//           "bsonType": "string"
//         },
//         "cardNumber": {
//           "bsonType": "string"
//         },
//         "cardType": {
//           "bsonType": "string"
//         },
//         "currency": {
//           "bsonType": "string"
//         },
//         "iban": {
//           "bsonType": "string"
//         }
//       }
//     },
//     "birthDate": {
//       "bsonType": "string"
//     },
//     "bloodGroup": {
//       "bsonType": "string"
//     },
//     "company": {
//       "bsonType": "object",
//       "properties": {
//         "address": {
//           "bsonType": "object",
//           "properties": {
//             "address": {
//               "bsonType": "string"
//             },
//             "city": {
//               "bsonType": "string"
//             },
//             "coordinates": {
//               "bsonType": "object",
//               "properties": {
//                 "lat": {
//                   "bsonType": "double"
//                 },
//                 "lng": {
//                   "bsonType": "double"
//                 }
//               }
//             },
//             "postalCode": {
//               "bsonType": "string"
//             },
//             "state": {
//               "bsonType": "string"
//             }
//           }
//         },
//         "department": {
//           "bsonType": "string"
//         },
//         "employeeType": {
//           "bsonType": "string"
//         },
//         "name": {
//           "bsonType": "string"
//         },
//         "title": {
//           "bsonType": "string"
//         }
//       }
//     },
//     "domain": {
//       "bsonType": "string"
//     },
//     "ein": {
//       "bsonType": "string"
//     },
//     "email": {
//       "bsonType": "string"
//     },
//     "eyeColor": {
//       "bsonType": "string"
//     },
//     "firstName": {
//       "bsonType": "string"
//     },
//     "gender": {
//       "bsonType": "string"
//     },
//     "hair": {
//       "bsonType": "object",
//       "properties": {
//         "color": {
//           "bsonType": "string"
//         },
//         "type": {
//           "bsonType": "string"
//         }
//       }
//     },
//     "height": {
//       "bsonType": "int"
//     },
//     "id": {
//       "bsonType": "int"
//     },
//     "image": {
//       "bsonType": "string"
//     },
//     "ip": {
//       "bsonType": "string"
//     },
//     "lastName": {
//       "bsonType": "string"
//     },
//     "macAddress": {
//       "bsonType": "string"
//     },
//     "maidenName": {
//       "bsonType": "string"
//     },
//     "password": {
//       "bsonType": "string"
//     },
//     "phone": {
//       "bsonType": "string"
//     },
//     "ssn": {
//       "bsonType": "string"
//     },
//     "university": {
//       "bsonType": "string"
//     },
//     "userAgent": {
//       "bsonType": "string"
//     },
//     "username": {
//       "bsonType": "string"
//     },
//     "weight": {
//       "bsonType": "double"
//     }
//   }
// }