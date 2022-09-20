import { Collection } from "mongodb";
import { EmployeeType } from "../services/models/employee";

export type GraphQLContext = {
  collections: {
    employees?: Collection<EmployeeType>;
  }
}