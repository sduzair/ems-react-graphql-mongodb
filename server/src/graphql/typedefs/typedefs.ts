import { gql } from "apollo-server-express";

export default gql`

type EmployeeBank {
  cardExpire: String
  cardNumber: String
  cardType: String
  currency: String
  iban: String
}

input EmployeeCompanyInsertInput {
  address: EmployeeCompanyAddressInsertInput!
  dateOfJoining: DateTime!
  department: EmployeeDepartmentEnum!
  employeeType: EmployeeTypeEnum!
  name: String!
  title: EmployeeTitleEnum!
  status: EmployeeStatusEnum!
}

type InsertManyPayload {
  insertedIds: [ObjectId]!
}

input EmployeeUpdateInput {
  birthDate_unset: Boolean
  firstName_unset: Boolean
  email: EmailAddress!
  macAddress_unset: Boolean
  weight_inc: Float
  age_unset: Boolean
  id: Int
  weight_unset: Boolean
  eyeColor_unset: Boolean
  lastName_unset: Boolean
  hair: EmployeeHairUpdateInput
  ip_unset: Boolean
  id_unset: Boolean
  bank: EmployeeBankUpdateInput
  address_unset: Boolean
  bank_unset: Boolean
  height_unset: Boolean
  phone_unset: Boolean
  university: String
  username: String
  username_unset: Boolean
  gender_unset: Boolean
  bloodGroup: String
  birthDate: String!
  age: Int
  height_inc: Int
  id_inc: Int
  company: EmployeeCompanyUpdateInput!
  eyeColor: String
  lastName: String!
  ssn_unset: Boolean
  domain_unset: Boolean
  address: EmployeeAddressUpdateInput!
  height: Int
  maidenName: String
  password_unset: Boolean
  email_unset: Boolean
  image: String
  ip: String
  macAddress: String
  _id_unset: Boolean
  image_unset: Boolean
  userAgent: String
  maidenName_unset: Boolean
  password: String
  bloodGroup_unset: Boolean
  firstName: String!
  age_inc: Int
  company_unset: Boolean
  phone: String!
  gender: String!
  domain: String
  weight: Float
  university_unset: Boolean
  ein_unset: Boolean
  _id: ObjectId
  hair_unset: Boolean
  ssn: String
  userAgent_unset: Boolean
  ein: String
}

input EmployeeAddressCoordinateUpdateInput {
  lng: Float
  lng_unset: Boolean
  lng_inc: Float
  lat: Float
  lat_inc: Float
  lat_unset: Boolean
}
 
type EmployeeCompany {
  address: EmployeeCompanyAddress!
  dateOfJoining: DateTime!
  department: EmployeeDepartmentEnum!
  employeeType: EmployeeTypeEnum!
  name: String!
  title: EmployeeTitleEnum!
  status: EmployeeStatusEnum!
}

enum EmployeeStatusEnum {
  Active
  Terminated_Dismissed
  Terminated_Resigned
  On_Leave
}

enum EmployeeTypeEnum {
  Contract
  Full_time
  Part_time
  Seasonal
}

enum EmployeeDepartmentEnum {
  Accounting
  BusinessDevelopment
  Engineering
  HumanResources
  Legal
  Marketing
  ProductManagement
  ResearchandDevelopment
  Sales
  Services
  Support
  Training
}

enum EmployeeTitleEnum {
  AccountCoordinator
  AccountExecutive
  AccountRepresentativeI
  AccountRepresentativeII
  AccountantIII
  AdministrativeAssistantII
  AnalystProgrammer
  AssistantManager
  AssistantProfessor
  AssociateProfessor
  AutomationSpecialistI
  BiostatisticianIV
  ChiefDesignEngineer
  CivilEngineer
  ClinicalSpecialist
  CommunityOutreachSpecialist
  CompensationAnalyst
  CostAccountant
  DesignEngineer
  DeveloperII
  DirectorofSales
  EnvironmentalSpecialist
  ExecutiveSecretary
  FinancialAdvisor
  FinancialAnalyst
  FoodChemist
  GISTechnicalArchitect
  GeologicalEngineer
  GeologistIII
  GraphicDesigner
  HelpDeskOperator
  HelpDeskTechnician
  JuniorExecutive
  LegalAssistant
  Librarian
  MarketingAssistant
  MechanicalSystemsEngineer
  MediaManagerIV
  NursePracticioner
  Operator
  Paralegal
  PaymentAdjustmentCoordinator
  PhysicalTherapyAssistant
  Professor
  ProgrammerAnalystI
  ProgrammerAnalystIV
  ProjectManager
  QualityControlSpecialist
  QualityEngineer
  RecruitingManager
  RegisteredNurse
  ResearchAssociate
  ResearchNurse
  SalesAssociate
  SalesRepresentative
  SeniorCostAccountant
  SeniorEditor
  SeniorQualityEngineer
  SeniorSalesAssociate
  SoftwareConsultant
  SoftwareTestEngineerIV
  SpeechPathologist
  StructuralAnalysisEngineer
  TechnicalWriter
  VPAccounting
  VPQualityControl
  VPSales
  WebDeveloperI
}

type EmployeeCompanyAddress {
  address: String!
  city: String!
  coordinates: EmployeeCompanyAddressCoordinate
  postalCode: String!
  state: String!
}

input EmployeeInsertInput {
  userAgent: String
  id: Int
  bank: EmployeeBankInsertInput
  address: EmployeeAddressInsertInput!
  bloodGroup: String
  domain: String
  maidenName: String
  image: String
  ip: String
  hair: EmployeeHairInsertInput
  eyeColor: String
  company: EmployeeCompanyInsertInput!
  ssn: String
  password: String
  _id: ObjectId
  age: Int
  lastName: String!
  height: Int
  firstName: String!
  university: String
  weight: Float
  birthDate: String!
  phone: String!
  ein: String
  username: String
  macAddress: String
  email: EmailAddress!
  gender: String!
}

input EmployeeAddressCoordinateInsertInput {
  lat: Float
  lng: Float
}

type UpdateManyPayload {
  matchedCount: Int!
  modifiedCount: Int!
}

input EmployeeHairInsertInput {
  color: String
  type: String
}

input EmployeeQueryInput {
  eyeColor_gte: String
  email_nin: [String]
  height: Int
  id_lt: Int
  ip_gt: String
  birthDate_gt: String
  macAddress_gt: String
  maidenName_ne: String
  domain_lte: String
  password_gt: String
  lastName_gt: String
  maidenName: String
  bloodGroup_nin: [String]
  hair: EmployeeHairQueryInput
  ssn_exists: Boolean
  image_nin: [String]
  eyeColor_exists: Boolean
  # AND: [EmployeeQueryInput!]
  ein_ne: String
  userAgent_gt: String
  university_exists: Boolean
  firstName_ne: String
  phone_nin: [String]
  lastName_lt: String
  username_nin: [String]
  username_gt: String
  birthDate_nin: [String]
  _id_lt: ObjectId
  weight_exists: Boolean
  phone_ne: String
  image_ne: String
  image_exists: Boolean
  ip_ne: String
  birthDate_ne: String
  maidenName_nin: [String]
  company: EmployeeCompanyQueryInput
  ssn: String
  _id_gte: ObjectId
  birthDate_exists: Boolean
  image_gte: String
  ssn_ne: String
  age_ne: Int
  firstName: String
  userAgent_lt: String
  password_in: [String]
  ip: String
  macAddress: String
  domain_gte: String
  userAgent: String
  domain_lt: String
  height_lte: Int
  gender_lt: String
  ip_lte: String
  id_nin: [Int]
  firstName_in: [String]
  lastName_in: [String]
  email_lt: String
  age_nin: [Int]
  weight_ne: Float
  height_gt: Int
  maidenName_gt: String
  weight_in: [Float]
  ssn_nin: [String]
  ip_in: [String]
  image_gt: String
  userAgent_nin: [String]
  bloodGroup_lt: String
  lastName_gte: String
  phone_lt: String
  userAgent_gte: String
  domain_exists: Boolean
  ein_lte: String
  password_lt: String
  username_lte: String
  ip_exists: Boolean
  address: EmployeeAddressQueryInput
  company_exists: Boolean
  bloodGroup_gte: String
  birthDate_lte: String
  username_gte: String
  age_gte: Int
  lastName_lte: String
  height_lt: Int
  password_nin: [String]
  age_lte: Int
  gender_gte: String
  age_in: [Int]
  domain_ne: String
  gender: String
  _id_gt: ObjectId
  id: Int
  image: String
  maidenName_lt: String
  email_lte: String
  bloodGroup_in: [String]
  lastName_exists: Boolean
  ein: String
  ein_gte: String
  username: String
  id_exists: Boolean
  lastName_ne: String
  bank: EmployeeBankQueryInput
  age_lt: Int
  weight_gt: Float
  university_lt: String
  eyeColor_lte: String
  ip_lt: String
  domain_in: [String]
  university_gte: String
  university_nin: [String]
  firstName_gte: String
  _id_lte: ObjectId
  userAgent_ne: String
  age_gt: Int
  university: String
  birthDate_lt: String
  password_gte: String
  gender_gt: String
  gender_in: [String]
  university_lte: String
  phone: String
  height_nin: [Int]
  firstName_exists: Boolean
  ein_in: [String]
  address_exists: Boolean
  email_in: [String]
  firstName_lte: String
  _id_ne: ObjectId
  birthDate: String
  phone_lte: String
  eyeColor_nin: [String]
  weight_nin: [Float]
  height_gte: Int
  userAgent_lte: String
  id_gt: Int
  domain: String
  email_gte: String
  bank_exists: Boolean
  lastName_nin: [String]
  username_exists: Boolean
  eyeColor: String
  password_lte: String
  weight_lt: Float
  university_ne: String
  id_lte: Int
  phone_gte: String
  maidenName_in: [String]
  bloodGroup_lte: String
  university_in: [String]
  eyeColor_lt: String
  id_ne: Int
  domain_nin: [String]
  firstName_lt: String
  ein_lt: String
  username_lt: String
  macAddress_exists: Boolean
  domain_gt: String
  ip_nin: [String]
  maidenName_lte: String
  id_gte: Int
  bloodGroup_exists: Boolean
  username_ne: String
  gender_exists: Boolean
  ssn_gte: String
  weight: Float
  macAddress_ne: String
  ip_gte: String
  _id_in: [ObjectId]
  phone_gt: String
  hair_exists: Boolean
  email_gt: String
  email_ne: String
  birthDate_gte: String
  eyeColor_ne: String
  ssn_lt: String
  maidenName_exists: Boolean
  # OR: [EmployeeQueryInput!]
  phone_in: [String]
  ssn_in: [String]
  bloodGroup: String
  ein_exists: Boolean
  ssn_lte: String
  userAgent_in: [String]
  bloodGroup_gt: String
  lastName: String
  gender_ne: String
  macAddress_lt: String
  phone_exists: Boolean
  height_ne: Int
  maidenName_gte: String
  age: Int
  height_in: [Int]
  birthDate_in: [String]
  firstName_nin: [String]
  ein_nin: [String]
  gender_nin: [String]
  ein_gt: String
  bloodGroup_ne: String
  height_exists: Boolean
  gender_lte: String
  image_lte: String
  macAddress_in: [String]
  macAddress_nin: [String]
  username_in: [String]
  eyeColor_gt: String
  id_in: [Int]
  image_lt: String
  userAgent_exists: Boolean
  password_ne: String
  email_exists: Boolean
  weight_gte: Float
  eyeColor_in: [String]
  age_exists: Boolean
  macAddress_gte: String
  image_in: [String]
  password: String
  firstName_gt: String
  _id_nin: [ObjectId]
  macAddress_lte: String
  password_exists: Boolean
  email: EmailAddress
  weight_lte: Float
  ssn_gt: String
  _id: ObjectId
  university_gt: String
  _id_exists: Boolean
}

input DeleteOneEmployeeInput {
  _id: ObjectId!
}

input EmployeeHairQueryInput {
  # OR: [EmployeeHairQueryInput!]
  # AND: [EmployeeHairQueryInput!]
  type_exists: Boolean
  type_in: [String]
  color_gt: String
  type_lte: String
  color_ne: String
  type_nin: [String]
  color_gte: String
  color_nin: [String]
  type_lt: String
  type_gte: String
  type: String
  color_lt: String
  color_in: [String]
  color_exists: Boolean
  color: String
  type_ne: String
  type_gt: String
  color_lte: String
}

input EmployeeAddressQueryInput {
  city_lt: String
  address_gt: String
  coordinates: EmployeeAddressCoordinateQueryInput
  postalCode_exists: Boolean
  city_exists: Boolean
  city_ne: String
  address_in: [String]
  city_lte: String
  address_lt: String
  address_gte: String
  postalCode_gt: String
  city_gte: String
  address_ne: String
  state_exists: Boolean
  state_lte: String
  state_gt: String
  state_ne: String
  state_lt: String
  address: String
  city_nin: [String]
  postalCode_in: [String]
  city: String
  postalCode_gte: String
  state_nin: [String]
  # AND: [EmployeeAddressQueryInput!]
  state_gte: String
  # OR: [EmployeeAddressQueryInput!]
  state_in: [String]
  postalCode_ne: String
  postalCode_nin: [String]
  coordinates_exists: Boolean
  postalCode_lte: String
  address_lte: String
  postalCode_lt: String
  state: String
  address_nin: [String]
  address_exists: Boolean
  postalCode: String
  city_in: [String]
  city_gt: String
}

type EmployeeAddress {
  address: String!
  city: String!
  coordinates: EmployeeAddressCoordinate
  postalCode: String!
  state: String!
}

type EmployeeCompanyAddressCoordinate {
  lat: Float
  lng: Float
}

type Mutation {
  deleteManyEmployees(query: EmployeeQueryInput): DeleteManyPayload
  deleteOneEmployee(query: DeleteOneEmployeeInput!): DeleteOnePayload
  insertManyEmployees(data: [EmployeeInsertInput!]!): InsertManyPayload
  insertOneEmployee(data: EmployeeInsertInput!): Employee
  replaceOneEmployee(query: EmployeeQueryInput, data: EmployeeInsertInput!): Employee
  updateManyEmployees(query: EmployeeQueryInput, set: EmployeeUpdateInput!): UpdateManyPayload
  updateOneEmployee(query: EmployeeUpdateOneQueryInput, set: EmployeeUpdateInput!): Employee
  upsertOneEmployee(query: EmployeeQueryInput, data: EmployeeInsertInput!): Employee
}

input EmployeeUpdateOneQueryInput {
  _id: ObjectId!
}

type DeleteManyPayload {
  deletedCount: Int!
}

type DeleteOnePayload {
  deletedCount: Int!
}

input EmployeeBankUpdateInput {
  currency: String
  iban: String
  cardNumber: String
  cardType: String
  cardExpire_unset: Boolean
  currency_unset: Boolean
  iban_unset: Boolean
  cardExpire: String
  cardNumber_unset: Boolean
  cardType_unset: Boolean
}

type Query {
  employee(query: EmployeeQueryInput): Employee
  employees(sortBy: EmployeeSortByInput, query: EmployeeQueryInput, limit: Int = 10): [Employee]!
  oneEmployee(query: OneEmployeeQueryInput!): Employee!
}

input OneEmployeeQueryInput {
  _id: String!
}

input EmployeeAddressCoordinateQueryInput {
  lat_in: [Float]
  lng_lte: Float
  lat_exists: Boolean
  lng_nin: [Float]
  lat_lte: Float
  lng: Float
  lat_nin: [Float]
  lat: Float
  lng_lt: Float
  lng_ne: Float
  lng_exists: Boolean
  # OR: [EmployeeAddressCoordinateQueryInput!]
  lat_ne: Float
  lat_lt: Float
  lat_gt: Float
  lng_in: [Float]
  # AND: [EmployeeAddressCoordinateQueryInput!]
  lng_gte: Float
  lng_gt: Float
  lat_gte: Float
}

input EmployeeCompanyAddressInsertInput {
  postalCode: String!
  state: String!
  address: String!
  city: String!
  coordinates: EmployeeCompanyAddressCoordinateInsertInput
}

input EmployeeCompanyUpdateInput {
  dateOfJoining_unset: Boolean
  department: EmployeeDepartmentEnum!
  dateOfJoining: DateTime!
  title: EmployeeTitleEnum!
  title_unset: Boolean
  address_unset: Boolean
  department_unset: Boolean
  employeeType_unset: Boolean
  name: String!
  name_unset: Boolean
  address: EmployeeCompanyAddressUpdateInput!
  employeeType: EmployeeTypeEnum!
  status: EmployeeStatusEnum!
}

input EmployeeCompanyAddressCoordinateUpdateInput {
  lat_inc: Float
  lat_unset: Boolean
  lng: Float
  lng_inc: Float
  lng_unset: Boolean
  lat: Float
}

input EmployeeHairUpdateInput {
  type_unset: Boolean
  color: String
  color_unset: Boolean
  type: String
}

input EmployeeCompanyAddressUpdateInput {
  city: String!
  postalCode: String!
  state: String!
  postalCode_unset: Boolean
  address: String!
  address_unset: Boolean
  state_unset: Boolean
  coordinates_unset: Boolean
  city_unset: Boolean
  coordinates: EmployeeCompanyAddressCoordinateUpdateInput
}

input EmployeeAddressUpdateInput {
  city_unset: Boolean
  postalCode_unset: Boolean
  postalCode: String!
  coordinates: EmployeeAddressCoordinateUpdateInput
  coordinates_unset: Boolean
  city: String!
  state: String!
  state_unset: Boolean
  address: String!
  address_unset: Boolean
}

scalar DateTime
scalar EmailAddress

input EmployeeCompanyAddressQueryInput {
  address_exists: Boolean
  coordinates_exists: Boolean
  state: String
  address_nin: [String]
  address_ne: String
  postalCode_in: [String]
  city_in: [String]
  postalCode_nin: [String]
  postalCode_gt: String
  state_lte: String
  state_nin: [String]
  # AND: [EmployeeCompanyAddressQueryInput!]
  address_in: [String]
  city_ne: String
  state_exists: Boolean
  city_exists: Boolean
  city_gt: String
  city: String
  city_nin: [String]
  address: String
  state_ne: String
  address_lte: String
  state_gte: String
  postalCode_gte: String
  address_lt: String
  coordinates: EmployeeCompanyAddressCoordinateQueryInput
  state_lt: String
  address_gt: String
  city_lte: String
  city_gte: String
  postalCode_lt: String
  postalCode_lte: String
  postalCode_exists: Boolean
  postalCode: String
  address_gte: String
  # OR: [EmployeeCompanyAddressQueryInput!]
  postalCode_ne: String
  state_gt: String
  city_lt: String
  state_in: [String]
}

input EmployeeBankQueryInput {
  cardNumber_ne: String
  iban_exists: Boolean
  currency_in: [String]
  iban_nin: [String]
  cardNumber_exists: Boolean
  iban_ne: String
  cardExpire_ne: String
  cardNumber_in: [String]
  cardType_nin: [String]
  cardType_gte: String
  iban_gte: String
  cardNumber_lt: String
  cardType_in: [String]
  cardExpire_lte: String
  cardExpire: String
  cardType_lt: String
  cardExpire_exists: Boolean
  cardNumber_gte: String
  # OR: [EmployeeBankQueryInput!]
  cardNumber: String
  currency_exists: Boolean
  currency_lt: String
  cardExpire_lt: String
  cardType: String
  cardNumber_nin: [String]
  iban_lte: String
  cardType_lte: String
  iban_lt: String
  iban_gt: String
  currency_ne: String
  cardExpire_gte: String
  cardNumber_lte: String
  currency_nin: [String]
  cardType_ne: String
  cardExpire_gt: String
  currency_lte: String
  currency_gt: String
  currency: String
  iban_in: [String]
  cardType_gt: String
  cardNumber_gt: String
  # AND: [EmployeeBankQueryInput!]
  cardExpire_nin: [String]
  iban: String
  currency_gte: String
  cardExpire_in: [String]
  cardType_exists: Boolean
}

enum EmployeeSortByInput {
  MACADDRESS_DESC
  PASSWORD_ASC
  BIRTHDATE_DESC
  DOMAIN_ASC
  DOMAIN_DESC
  EIN_ASC
  EMAIL_DESC
  ID_DESC
  SSN_ASC
  BIRTHDATE_ASC
  BLOODGROUP_ASC
  FIRSTNAME_DESC
  GENDER_ASC
  WEIGHT_ASC
  WEIGHT_DESC
  SSN_DESC
  UNIVERSITY_DESC
  EYECOLOR_ASC
  FIRSTNAME_ASC
  LASTNAME_DESC
  MAIDENNAME_ASC
  MAIDENNAME_DESC
  PHONE_ASC
  LASTNAME_ASC
  MACADDRESS_ASC
  PHONE_DESC
  UNIVERSITY_ASC
  USERAGENT_ASC
  ID_ASC
  IMAGE_ASC
  AGE_ASC
  AGE_DESC
  BLOODGROUP_DESC
  EIN_DESC
  EYECOLOR_DESC
  IMAGE_DESC
  USERAGENT_DESC
  EMAIL_ASC
  IP_ASC
  IP_DESC
  PASSWORD_DESC
  HEIGHT_ASC
  USERNAME_ASC
  GENDER_DESC
  HEIGHT_DESC
  USERNAME_DESC
}

input EmployeeBankInsertInput {
  cardExpire: String
  cardNumber: String
  cardType: String
  currency: String
  iban: String
}

input EmployeeAddressInsertInput {
  postalCode: String!
  state: String!
  address: String!
  city: String!
  coordinates: EmployeeAddressCoordinateInsertInput
}

input EmployeeCompanyQueryInput {
  title_lt: String
  name_lt: String
  dateOfJoining: DateTime
  department_nin: [EmployeeDepartmentEnum]
  dateOfJoining_lte: DateTime
  dateOfJoining_ne: DateTime
  # AND: [EmployeeCompanyQueryInput!]
  name_lte: String
  name_ne: String
  title_exists: Boolean
  department: EmployeeDepartmentEnum
  department_regex: String
  dateOfJoining_in: [DateTime]
  employeeType: EmployeeTypeEnum
  employeeType_regex: String
  employeeType_nin: [EmployeeTypeEnum]
  department_in: [EmployeeDepartmentEnum]
  department_gte: String
  employeeType_lt: String
  # OR: [EmployeeCompanyQueryInput!]
  name_gte: String
  employeeType_exists: Boolean
  title_gt: String
  dateOfJoining_exists: Boolean
  dateOfJoining_gte: DateTime
  address_exists: Boolean
  dateOfJoining_gt: DateTime
  employeeType_gte: String
  name_nin: [String]
  title: EmployeeTitleEnum
  title_regex: String
  employeeType_ne: String
  name_in: [String]
  department_exists: Boolean
  department_lte: String
  title_ne: EmployeeTitleEnum
  title_nin: [EmployeeTitleEnum]
  dateOfJoining_nin: [DateTime]
  employeeType_lte: String
  department_ne: EmployeeDepartmentEnum
  address: EmployeeCompanyAddressQueryInput
  employeeType_in: [EmployeeTypeEnum]
  department_lt: String
  name_gt: String
  employeeType_gt: String
  title_in: [EmployeeTitleEnum]
  dateOfJoining_lt: DateTime
  name: String
  title_gte: String
  department_gt: String
  name_exists: Boolean
  title_lte: String
}

type EmployeeHair {
  color: String
  type: String
}

type EmployeeAddressCoordinate {
  lat: Float
  lng: Float
}

input EmployeeCompanyAddressCoordinateInsertInput {
  lat: Float
  lng: Float
}

scalar ObjectId

input EmployeeCompanyAddressCoordinateQueryInput {
  lat_exists: Boolean
  lat_gte: Float
  lng_lte: Float
  # OR: [EmployeeCompanyAddressCoordinateQueryInput!]
  lat_lte: Float
  lng_gte: Float
  lng_exists: Boolean
  lng_ne: Float
  lat_lt: Float
  lng_nin: [Float]
  lng_gt: Float
  lat: Float
  lng_lt: Float
  # AND: [EmployeeCompanyAddressCoordinateQueryInput!]
  lat_ne: Float
  lng: Float
  lat_gt: Float
  lat_in: [Float]
  lat_nin: [Float]
  lng_in: [Float]
}

type Employee {
  _id: ObjectId
  address: EmployeeAddress!
  age: Int
  bank: EmployeeBank
  birthDate: String!
  bloodGroup: String
  company: EmployeeCompany!
  domain: String
  ein: String
  email: EmailAddress!
  eyeColor: String
  firstName: String!
  gender: String!
  hair: EmployeeHair
  height: Int
  id: Int
  image: String
  ip: String
  lastName: String!
  macAddress: String
  maidenName: String
  password: String
  phone: String!
  ssn: String
  university: String
  userAgent: String
  username: String
  weight: Float
}

`

