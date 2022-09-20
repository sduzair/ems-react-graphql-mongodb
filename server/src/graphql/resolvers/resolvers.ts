import { EmployeeDepartmentEnum, EmployeeTitleEnum, EmployeeTypeEnum, Resolvers } from "../generated/types"
import GQLMongoQuery from "@konfy/graphql-mongo-query";
import { ObjectId } from "mongodb";
import { EmployeeStatusEnum, EmployeeType } from "../../services/models/employee";
import { GraphQLDateTime, GraphQLEmailAddress, GraphQLDate } from "graphql-scalars"



const resolvers: Resolvers = {
  EmailAddress: GraphQLEmailAddress,
  DateTime: GraphQLDateTime,
  EmployeeTypeEnum,
  EmployeeTitleEnum,
  EmployeeDepartmentEnum,
  EmployeeStatusEnum,
  Query: {
    employee: async (parent, { query }, context, info) => {
      const parsedNested = parserNestedOperator(query)
      const parsedQuery = parserOperator(parsedNested)
      return await context.collections.employees.findOne(parsedQuery)
    },
    // default limit 10
    employees: async (parent, { query = {}, limit, sortBy = 'ID_ASC' }, context, info) => {
      // console.log(JSON.stringify(query));
      const parsedNested = parserNestedOperator(query)
      // console.log(JSON.stringify(parsedNested));
      const parsedQuery = parserOperator(parsedNested)
      const employees = await context.collections.employees.find(parsedQuery ? parsedQuery : {}, { sort: sortOrder[sortBy], limit: limit }).toArray();
      // console.log(JSON.stringify(parsedQuery));
      // console.log(employees);

      return employees
    },
    oneEmployee: async (parent, { query }, context, info) => {
      // console.log(JSON.stringify(query));


      return await context.collections.employees.findOne({ _id: new ObjectId(query._id) })
    }
  },

  Mutation: {
    // insertOneEmployee(data: EmployeeInsertInput!): Employee
    insertOneEmployee: async (_, { data }, context, info) => {
      // console.log(data);

      const res = await context.collections.employees.insertOne(data as EmployeeType)
      // console.log(res.acknowledged);

      return {
        _id: res.insertedId,
        ...data
      }
    },
    deleteOneEmployee: async (_, { query }, context) => {

      const emp = await context.collections.employees.findOne({ _id: new ObjectId(query._id) })
      if (emp.company.status === 'Active') {
        throw new Error('Cannot delete employee of status: \'Active\'')
      }
      const res = await context.collections.employees.deleteOne({ _id: new ObjectId(query._id) })
      return {
        deletedCount: res.deletedCount
      }
      // return {
      //   deletedCount: 0
      // }

    },
    deleteManyEmployees: async (_, { query }, context) => {
      // console.log(JSON.stringify(query));
      // const parsedNested = parserNestedOperator(query)
      // console.log(JSON.stringify(parsedNested));
      // const parsedQuery = parserOperator(parsedNested)
      // console.log(JSON.stringify(parsedQuery));
      const res = await context.collections.employees.deleteMany(query)
      return {
        deletedCount: res.deletedCount
      }
      // return {
      //   deletedCount: 0
      // }  
    },
    updateOneEmployee: async (_, { query, set }, context) => {
      // console.log(JSON.stringify(query));
      // console.log(JSON.stringify(set));
      const parsedNested = parserNestedOperator(set)
      // console.log(JSON.stringify(parsedNested));
      const parsedQuery = parserOperator(parsedNested)
      // console.log(JSON.stringify(parsedQuery));
      const res = await context.collections.employees.updateOne({ _id: new ObjectId(query._id) }, { $set: set })
      // console.log("modifiedCount", res.modifiedCount);

      const updatedEmp = await context.collections.employees.findOne(query)
      return {
        ...updatedEmp
      }
    }
  }
}

const gqlNestedOperatorKeywords = {
  "company": "company",
  "address": "address"
}

const gqlNestedOperatorResolvers = {
  "title_regex"(parent: any) {
    return {
      'title': {
        '$regex': parent["title_regex"],
        '$options': 'i'
      }
    }
  },
  "department_regex"(parent: any) {
    return {
      'department': {
        '$regex': parent["department_regex"],
        '$options': 'i'
      }
    }
  },
  "title_in"(parent: any) {
    return {
      'title': {
        '$in': parent["title_in"]
      }
    }
  },
  "city_in"(parent: any) {
    return {
      'city': {
        '$in': parent["city_in"]
      }
    }
  },
  lat_lt(parent: { lat_lt: number }) {
    return {
      "lat": {
        $lt: parent.lat_lt
      }
    }
  },
  lat_lte(parent: { lat_lte: number }) {
    return {
      "lat": {
        $lte: parent.lat_lte
      }
    }
  },
  lat_gt(parent: { lat_gt: number }) {
    return {
      "lat": {
        $gt: parent.lat_gt
      }
    }
  },
  lat_gte(parent: { lat_gte: number }) {
    return {
      "lat": {
        $gte: parent.lat_gte
      }
    }
  },
  lng_lt(parent: { lng_lt: number }) {
    return {
      "lng": {
        $lt: parent.lng_lt
      }
    }
  },
  lng_lte(parent: { lng_lte: number }) {
    return {
      "lng": {
        $lte: parent.lng_lte
      }
    }
  },
  lng_gt(parent: { lng_gt: number }) {
    return {
      "lng": {
        $gt: parent.lng_gt
      }
    }
  },
  lng_gte(parent: { lng_gte: number }) {
    return {
      "lng": {
        $gte: parent.lng_gte
      }
    }
  },
}

const parserNestedOperator = GQLMongoQuery(gqlNestedOperatorKeywords, gqlNestedOperatorResolvers, false)

const gqlQueryOperatorKeywords = {
  "$in": "$in",
  "$lt": "$lt",
  "$lte": "$lte",
  "$gt": "$gt",
  "$gte": "$gte",
  "$regex": "$regex"
}

const gqlQueryOperatorResolvers = {
  age_lt(parent: { age_lt: number }) {
    return {
      "age": {
        $lt: parent.age_lt
      }
    }
  },
  age_lte(parent: { age_lte: number }) {
    return {
      "age": {
        $lte: parent.age_lte
      }
    }
  },
  age_gt(parent: { age_gt: number }) {
    return {
      "age": {
        $gt: parent.age_gt
      }
    }
  },
  age_gte(parent: { age_gte: number }) {
    return {
      "age": {
        $gte: parent.age_gte
      }
    }
  },

  "title_in"(parent: any) {
    return {
      'title': {
        '$in': parent["title_in"]
      }
    }
  },
  "_id"(parent: any) {
    return {
      "_id": new ObjectId(parent["_id"])
    }
  }
}

const parserOperator = GQLMongoQuery(gqlQueryOperatorKeywords, gqlQueryOperatorResolvers, false)



const sortOrder: any =
{
  'AGE_ASC': { "age": 1 },
  'AGE_DESC': { "age": -1 },
  'BIRTHDATE_ASC': { "birthDate": 1 },
  'BIRTHDATE_DESC': { "birthDate": -1 },
  'BLOODGROUP_ASC': { "bloodGroup": 1 },
  'BLOODGROUP_DESC': { "bloodGroup": -1 },
  'DOMAIN_ASC': { "domain": 1 },
  'DOMAIN_DESC': { "domain": -1 },
  'EIN_ASC': { "ein": 1 },
  'EIN_DESC': { "ein": -1 },
  'EMAIL_ASC': { "email": 1 },
  'EMAIL_DESC': { "email": -1 },
  'EYECOLOR_ASC': { "eyeColor": 1 },
  'EYECOLOR_DESC': { "eyeColor": -1 },
  'FIRSTNAME_ASC': { "firstName": 1 },
  'FIRSTNAME_DESC': { "firstName": -1 },
  'GENDER_ASC': { "gender": 1 },
  'GENDER_DESC': { "gender": -1 },
  'HEIGHT_ASC': { "height": 1 },
  'HEIGHT_DESC': { "height": -1 },
  'ID_ASC': { "id": 1 },
  'ID_DESC': { "id": -1 },
  'IMAGE_ASC': { "image": 1 },
  'IMAGE_DESC': { "image": -1 },
  'IP_ASC': { "ip": 1 },
  'IP_DESC': { "ip": -1 },
  'LASTNAME_ASC': { "lastName": 1 },
  'LASTNAME_DESC': { "lastName": -1 },
  'MACADDRESS_ASC': { "macAddress": 1 },
  'MACADDRESS_DESC': { "macAddress": -1 },
  'MAIDENNAME_ASC': { "maidenName": 1 },
  'MAIDENNAME_DESC': { "maidenName": -1 },
  'PASSWORD_ASC': { "password": 1 },
  'PASSWORD_DESC': { "password": -1 },
  'PHONE_ASC': { "phone": 1 },
  'PHONE_DESC': { "phone": -1 },
  'SSN_ASC': { "ssn": 1 },
  'SSN_DESC': { "ssn": -1 },
  'UNIVERSITY_ASC': { "university": 1 },
  'UNIVERSITY_DESC': { "university": -1 },
  'USERAGENT_ASC': { "userAgent": 1 },
  'USERAGENT_DESC': { "userAgent": -1 },
  'USERNAME_ASC': { "username": 1 },
  'USERNAME_DESC': { "username": -1 },
  'WEIGHT_ASC': { "weight": 1 },
  'WEIGHT_DESC': { "weight": -1 },
}

export { resolvers }
