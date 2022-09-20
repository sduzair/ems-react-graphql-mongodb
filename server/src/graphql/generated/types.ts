import { EmployeeTypeEnum } from '../../services/models/employee';
import { EmployeeDepartmentEnum } from '../../services/models/employee';
import { EmployeeTitleEnum } from '../../services/models/employee';
import { EmployeeStatusEnum } from '../../services/models/employee';
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { EmployeeType } from '../../services/models/employee';
import { GraphQLContext } from '../graphqlContextType';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
  EmailAddress: string;
  ObjectId: any;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type DeleteOneEmployeeInput = {
  _id: Scalars['ObjectId'];
};

export type DeleteOnePayload = {
  __typename?: 'DeleteOnePayload';
  deletedCount: Scalars['Int'];
};

export type Employee = {
  __typename?: 'Employee';
  _id?: Maybe<Scalars['ObjectId']>;
  address: EmployeeAddress;
  age?: Maybe<Scalars['Int']>;
  bank?: Maybe<EmployeeBank>;
  birthDate: Scalars['String'];
  bloodGroup?: Maybe<Scalars['String']>;
  company: EmployeeCompany;
  domain?: Maybe<Scalars['String']>;
  ein?: Maybe<Scalars['String']>;
  email: Scalars['EmailAddress'];
  eyeColor?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender: Scalars['String'];
  hair?: Maybe<EmployeeHair>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  macAddress?: Maybe<Scalars['String']>;
  maidenName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  ssn?: Maybe<Scalars['String']>;
  university?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type EmployeeAddress = {
  __typename?: 'EmployeeAddress';
  address: Scalars['String'];
  city: Scalars['String'];
  coordinates?: Maybe<EmployeeAddressCoordinate>;
  postalCode: Scalars['String'];
  state: Scalars['String'];
};

export type EmployeeAddressCoordinate = {
  __typename?: 'EmployeeAddressCoordinate';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type EmployeeAddressCoordinateInsertInput = {
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
};

export type EmployeeAddressCoordinateQueryInput = {
  lat?: InputMaybe<Scalars['Float']>;
  lat_exists?: InputMaybe<Scalars['Boolean']>;
  lat_gt?: InputMaybe<Scalars['Float']>;
  lat_gte?: InputMaybe<Scalars['Float']>;
  lat_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lat_lt?: InputMaybe<Scalars['Float']>;
  lat_lte?: InputMaybe<Scalars['Float']>;
  lat_ne?: InputMaybe<Scalars['Float']>;
  lat_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lng?: InputMaybe<Scalars['Float']>;
  lng_exists?: InputMaybe<Scalars['Boolean']>;
  lng_gt?: InputMaybe<Scalars['Float']>;
  lng_gte?: InputMaybe<Scalars['Float']>;
  lng_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lng_lt?: InputMaybe<Scalars['Float']>;
  lng_lte?: InputMaybe<Scalars['Float']>;
  lng_ne?: InputMaybe<Scalars['Float']>;
  lng_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type EmployeeAddressCoordinateUpdateInput = {
  lat?: InputMaybe<Scalars['Float']>;
  lat_inc?: InputMaybe<Scalars['Float']>;
  lat_unset?: InputMaybe<Scalars['Boolean']>;
  lng?: InputMaybe<Scalars['Float']>;
  lng_inc?: InputMaybe<Scalars['Float']>;
  lng_unset?: InputMaybe<Scalars['Boolean']>;
};

export type EmployeeAddressInsertInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  coordinates?: InputMaybe<EmployeeAddressCoordinateInsertInput>;
  postalCode: Scalars['String'];
  state: Scalars['String'];
};

export type EmployeeAddressQueryInput = {
  address?: InputMaybe<Scalars['String']>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_ne?: InputMaybe<Scalars['String']>;
  address_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  city?: InputMaybe<Scalars['String']>;
  city_exists?: InputMaybe<Scalars['Boolean']>;
  city_gt?: InputMaybe<Scalars['String']>;
  city_gte?: InputMaybe<Scalars['String']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  city_lt?: InputMaybe<Scalars['String']>;
  city_lte?: InputMaybe<Scalars['String']>;
  city_ne?: InputMaybe<Scalars['String']>;
  city_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coordinates?: InputMaybe<EmployeeAddressCoordinateQueryInput>;
  coordinates_exists?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  postalCode_exists?: InputMaybe<Scalars['Boolean']>;
  postalCode_gt?: InputMaybe<Scalars['String']>;
  postalCode_gte?: InputMaybe<Scalars['String']>;
  postalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  postalCode_lt?: InputMaybe<Scalars['String']>;
  postalCode_lte?: InputMaybe<Scalars['String']>;
  postalCode_ne?: InputMaybe<Scalars['String']>;
  postalCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Scalars['String']>;
  state_exists?: InputMaybe<Scalars['Boolean']>;
  state_gt?: InputMaybe<Scalars['String']>;
  state_gte?: InputMaybe<Scalars['String']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_lt?: InputMaybe<Scalars['String']>;
  state_lte?: InputMaybe<Scalars['String']>;
  state_ne?: InputMaybe<Scalars['String']>;
  state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EmployeeAddressUpdateInput = {
  address: Scalars['String'];
  address_unset?: InputMaybe<Scalars['Boolean']>;
  city: Scalars['String'];
  city_unset?: InputMaybe<Scalars['Boolean']>;
  coordinates?: InputMaybe<EmployeeAddressCoordinateUpdateInput>;
  coordinates_unset?: InputMaybe<Scalars['Boolean']>;
  postalCode: Scalars['String'];
  postalCode_unset?: InputMaybe<Scalars['Boolean']>;
  state: Scalars['String'];
  state_unset?: InputMaybe<Scalars['Boolean']>;
};

export type EmployeeBank = {
  __typename?: 'EmployeeBank';
  cardExpire?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  cardType?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
};

export type EmployeeBankInsertInput = {
  cardExpire?: InputMaybe<Scalars['String']>;
  cardNumber?: InputMaybe<Scalars['String']>;
  cardType?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  iban?: InputMaybe<Scalars['String']>;
};

export type EmployeeBankQueryInput = {
  cardExpire?: InputMaybe<Scalars['String']>;
  cardExpire_exists?: InputMaybe<Scalars['Boolean']>;
  cardExpire_gt?: InputMaybe<Scalars['String']>;
  cardExpire_gte?: InputMaybe<Scalars['String']>;
  cardExpire_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cardExpire_lt?: InputMaybe<Scalars['String']>;
  cardExpire_lte?: InputMaybe<Scalars['String']>;
  cardExpire_ne?: InputMaybe<Scalars['String']>;
  cardExpire_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cardNumber?: InputMaybe<Scalars['String']>;
  cardNumber_exists?: InputMaybe<Scalars['Boolean']>;
  cardNumber_gt?: InputMaybe<Scalars['String']>;
  cardNumber_gte?: InputMaybe<Scalars['String']>;
  cardNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cardNumber_lt?: InputMaybe<Scalars['String']>;
  cardNumber_lte?: InputMaybe<Scalars['String']>;
  cardNumber_ne?: InputMaybe<Scalars['String']>;
  cardNumber_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cardType?: InputMaybe<Scalars['String']>;
  cardType_exists?: InputMaybe<Scalars['Boolean']>;
  cardType_gt?: InputMaybe<Scalars['String']>;
  cardType_gte?: InputMaybe<Scalars['String']>;
  cardType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cardType_lt?: InputMaybe<Scalars['String']>;
  cardType_lte?: InputMaybe<Scalars['String']>;
  cardType_ne?: InputMaybe<Scalars['String']>;
  cardType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency?: InputMaybe<Scalars['String']>;
  currency_exists?: InputMaybe<Scalars['Boolean']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_ne?: InputMaybe<Scalars['String']>;
  currency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iban?: InputMaybe<Scalars['String']>;
  iban_exists?: InputMaybe<Scalars['Boolean']>;
  iban_gt?: InputMaybe<Scalars['String']>;
  iban_gte?: InputMaybe<Scalars['String']>;
  iban_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iban_lt?: InputMaybe<Scalars['String']>;
  iban_lte?: InputMaybe<Scalars['String']>;
  iban_ne?: InputMaybe<Scalars['String']>;
  iban_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EmployeeBankUpdateInput = {
  cardExpire?: InputMaybe<Scalars['String']>;
  cardExpire_unset?: InputMaybe<Scalars['Boolean']>;
  cardNumber?: InputMaybe<Scalars['String']>;
  cardNumber_unset?: InputMaybe<Scalars['Boolean']>;
  cardType?: InputMaybe<Scalars['String']>;
  cardType_unset?: InputMaybe<Scalars['Boolean']>;
  currency?: InputMaybe<Scalars['String']>;
  currency_unset?: InputMaybe<Scalars['Boolean']>;
  iban?: InputMaybe<Scalars['String']>;
  iban_unset?: InputMaybe<Scalars['Boolean']>;
};

export type EmployeeCompany = {
  __typename?: 'EmployeeCompany';
  address: EmployeeCompanyAddress;
  dateOfJoining: Scalars['DateTime'];
  department: EmployeeDepartmentEnum;
  employeeType: EmployeeTypeEnum;
  name: Scalars['String'];
  status: EmployeeStatusEnum;
  title: EmployeeTitleEnum;
};

export type EmployeeCompanyAddress = {
  __typename?: 'EmployeeCompanyAddress';
  address: Scalars['String'];
  city: Scalars['String'];
  coordinates?: Maybe<EmployeeCompanyAddressCoordinate>;
  postalCode: Scalars['String'];
  state: Scalars['String'];
};

export type EmployeeCompanyAddressCoordinate = {
  __typename?: 'EmployeeCompanyAddressCoordinate';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type EmployeeCompanyAddressCoordinateInsertInput = {
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
};

export type EmployeeCompanyAddressCoordinateQueryInput = {
  lat?: InputMaybe<Scalars['Float']>;
  lat_exists?: InputMaybe<Scalars['Boolean']>;
  lat_gt?: InputMaybe<Scalars['Float']>;
  lat_gte?: InputMaybe<Scalars['Float']>;
  lat_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lat_lt?: InputMaybe<Scalars['Float']>;
  lat_lte?: InputMaybe<Scalars['Float']>;
  lat_ne?: InputMaybe<Scalars['Float']>;
  lat_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lng?: InputMaybe<Scalars['Float']>;
  lng_exists?: InputMaybe<Scalars['Boolean']>;
  lng_gt?: InputMaybe<Scalars['Float']>;
  lng_gte?: InputMaybe<Scalars['Float']>;
  lng_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lng_lt?: InputMaybe<Scalars['Float']>;
  lng_lte?: InputMaybe<Scalars['Float']>;
  lng_ne?: InputMaybe<Scalars['Float']>;
  lng_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type EmployeeCompanyAddressCoordinateUpdateInput = {
  lat?: InputMaybe<Scalars['Float']>;
  lat_inc?: InputMaybe<Scalars['Float']>;
  lat_unset?: InputMaybe<Scalars['Boolean']>;
  lng?: InputMaybe<Scalars['Float']>;
  lng_inc?: InputMaybe<Scalars['Float']>;
  lng_unset?: InputMaybe<Scalars['Boolean']>;
};

export type EmployeeCompanyAddressInsertInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  coordinates?: InputMaybe<EmployeeCompanyAddressCoordinateInsertInput>;
  postalCode: Scalars['String'];
  state: Scalars['String'];
};

export type EmployeeCompanyAddressQueryInput = {
  address?: InputMaybe<Scalars['String']>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_ne?: InputMaybe<Scalars['String']>;
  address_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  city?: InputMaybe<Scalars['String']>;
  city_exists?: InputMaybe<Scalars['Boolean']>;
  city_gt?: InputMaybe<Scalars['String']>;
  city_gte?: InputMaybe<Scalars['String']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  city_lt?: InputMaybe<Scalars['String']>;
  city_lte?: InputMaybe<Scalars['String']>;
  city_ne?: InputMaybe<Scalars['String']>;
  city_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coordinates?: InputMaybe<EmployeeCompanyAddressCoordinateQueryInput>;
  coordinates_exists?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  postalCode_exists?: InputMaybe<Scalars['Boolean']>;
  postalCode_gt?: InputMaybe<Scalars['String']>;
  postalCode_gte?: InputMaybe<Scalars['String']>;
  postalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  postalCode_lt?: InputMaybe<Scalars['String']>;
  postalCode_lte?: InputMaybe<Scalars['String']>;
  postalCode_ne?: InputMaybe<Scalars['String']>;
  postalCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Scalars['String']>;
  state_exists?: InputMaybe<Scalars['Boolean']>;
  state_gt?: InputMaybe<Scalars['String']>;
  state_gte?: InputMaybe<Scalars['String']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_lt?: InputMaybe<Scalars['String']>;
  state_lte?: InputMaybe<Scalars['String']>;
  state_ne?: InputMaybe<Scalars['String']>;
  state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EmployeeCompanyAddressUpdateInput = {
  address: Scalars['String'];
  address_unset?: InputMaybe<Scalars['Boolean']>;
  city: Scalars['String'];
  city_unset?: InputMaybe<Scalars['Boolean']>;
  coordinates?: InputMaybe<EmployeeCompanyAddressCoordinateUpdateInput>;
  coordinates_unset?: InputMaybe<Scalars['Boolean']>;
  postalCode: Scalars['String'];
  postalCode_unset?: InputMaybe<Scalars['Boolean']>;
  state: Scalars['String'];
  state_unset?: InputMaybe<Scalars['Boolean']>;
};

export type EmployeeCompanyInsertInput = {
  address: EmployeeCompanyAddressInsertInput;
  dateOfJoining: Scalars['DateTime'];
  department: EmployeeDepartmentEnum;
  employeeType: EmployeeTypeEnum;
  name: Scalars['String'];
  status: EmployeeStatusEnum;
  title: EmployeeTitleEnum;
};

export type EmployeeCompanyQueryInput = {
  address?: InputMaybe<EmployeeCompanyAddressQueryInput>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  dateOfJoining?: InputMaybe<Scalars['DateTime']>;
  dateOfJoining_exists?: InputMaybe<Scalars['Boolean']>;
  dateOfJoining_gt?: InputMaybe<Scalars['DateTime']>;
  dateOfJoining_gte?: InputMaybe<Scalars['DateTime']>;
  dateOfJoining_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  dateOfJoining_lt?: InputMaybe<Scalars['DateTime']>;
  dateOfJoining_lte?: InputMaybe<Scalars['DateTime']>;
  dateOfJoining_ne?: InputMaybe<Scalars['DateTime']>;
  dateOfJoining_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  department?: InputMaybe<EmployeeDepartmentEnum>;
  department_exists?: InputMaybe<Scalars['Boolean']>;
  department_gt?: InputMaybe<Scalars['String']>;
  department_gte?: InputMaybe<Scalars['String']>;
  department_in?: InputMaybe<Array<InputMaybe<EmployeeDepartmentEnum>>>;
  department_lt?: InputMaybe<Scalars['String']>;
  department_lte?: InputMaybe<Scalars['String']>;
  department_ne?: InputMaybe<EmployeeDepartmentEnum>;
  department_nin?: InputMaybe<Array<InputMaybe<EmployeeDepartmentEnum>>>;
  department_regex?: InputMaybe<Scalars['String']>;
  employeeType?: InputMaybe<EmployeeTypeEnum>;
  employeeType_exists?: InputMaybe<Scalars['Boolean']>;
  employeeType_gt?: InputMaybe<Scalars['String']>;
  employeeType_gte?: InputMaybe<Scalars['String']>;
  employeeType_in?: InputMaybe<Array<InputMaybe<EmployeeTypeEnum>>>;
  employeeType_lt?: InputMaybe<Scalars['String']>;
  employeeType_lte?: InputMaybe<Scalars['String']>;
  employeeType_ne?: InputMaybe<Scalars['String']>;
  employeeType_nin?: InputMaybe<Array<InputMaybe<EmployeeTypeEnum>>>;
  employeeType_regex?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<EmployeeTitleEnum>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<EmployeeTitleEnum>>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_ne?: InputMaybe<EmployeeTitleEnum>;
  title_nin?: InputMaybe<Array<InputMaybe<EmployeeTitleEnum>>>;
  title_regex?: InputMaybe<Scalars['String']>;
};

export type EmployeeCompanyUpdateInput = {
  address: EmployeeCompanyAddressUpdateInput;
  address_unset?: InputMaybe<Scalars['Boolean']>;
  dateOfJoining: Scalars['DateTime'];
  dateOfJoining_unset?: InputMaybe<Scalars['Boolean']>;
  department: EmployeeDepartmentEnum;
  department_unset?: InputMaybe<Scalars['Boolean']>;
  employeeType: EmployeeTypeEnum;
  employeeType_unset?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  name_unset?: InputMaybe<Scalars['Boolean']>;
  status: EmployeeStatusEnum;
  title: EmployeeTitleEnum;
  title_unset?: InputMaybe<Scalars['Boolean']>;
};

export { EmployeeDepartmentEnum };

export type EmployeeHair = {
  __typename?: 'EmployeeHair';
  color?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type EmployeeHairInsertInput = {
  color?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type EmployeeHairQueryInput = {
  color?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_gt?: InputMaybe<Scalars['String']>;
  color_gte?: InputMaybe<Scalars['String']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_lt?: InputMaybe<Scalars['String']>;
  color_lte?: InputMaybe<Scalars['String']>;
  color_ne?: InputMaybe<Scalars['String']>;
  color_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EmployeeHairUpdateInput = {
  color?: InputMaybe<Scalars['String']>;
  color_unset?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  type_unset?: InputMaybe<Scalars['Boolean']>;
};

export type EmployeeInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  address: EmployeeAddressInsertInput;
  age?: InputMaybe<Scalars['Int']>;
  bank?: InputMaybe<EmployeeBankInsertInput>;
  birthDate: Scalars['String'];
  bloodGroup?: InputMaybe<Scalars['String']>;
  company: EmployeeCompanyInsertInput;
  domain?: InputMaybe<Scalars['String']>;
  ein?: InputMaybe<Scalars['String']>;
  email: Scalars['EmailAddress'];
  eyeColor?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender: Scalars['String'];
  hair?: InputMaybe<EmployeeHairInsertInput>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  ip?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  macAddress?: InputMaybe<Scalars['String']>;
  maidenName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  ssn?: InputMaybe<Scalars['String']>;
  university?: InputMaybe<Scalars['String']>;
  userAgent?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type EmployeeQueryInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  address?: InputMaybe<EmployeeAddressQueryInput>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  age?: InputMaybe<Scalars['Int']>;
  age_exists?: InputMaybe<Scalars['Boolean']>;
  age_gt?: InputMaybe<Scalars['Int']>;
  age_gte?: InputMaybe<Scalars['Int']>;
  age_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  age_lt?: InputMaybe<Scalars['Int']>;
  age_lte?: InputMaybe<Scalars['Int']>;
  age_ne?: InputMaybe<Scalars['Int']>;
  age_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  bank?: InputMaybe<EmployeeBankQueryInput>;
  bank_exists?: InputMaybe<Scalars['Boolean']>;
  birthDate?: InputMaybe<Scalars['String']>;
  birthDate_exists?: InputMaybe<Scalars['Boolean']>;
  birthDate_gt?: InputMaybe<Scalars['String']>;
  birthDate_gte?: InputMaybe<Scalars['String']>;
  birthDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  birthDate_lt?: InputMaybe<Scalars['String']>;
  birthDate_lte?: InputMaybe<Scalars['String']>;
  birthDate_ne?: InputMaybe<Scalars['String']>;
  birthDate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bloodGroup?: InputMaybe<Scalars['String']>;
  bloodGroup_exists?: InputMaybe<Scalars['Boolean']>;
  bloodGroup_gt?: InputMaybe<Scalars['String']>;
  bloodGroup_gte?: InputMaybe<Scalars['String']>;
  bloodGroup_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bloodGroup_lt?: InputMaybe<Scalars['String']>;
  bloodGroup_lte?: InputMaybe<Scalars['String']>;
  bloodGroup_ne?: InputMaybe<Scalars['String']>;
  bloodGroup_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  company?: InputMaybe<EmployeeCompanyQueryInput>;
  company_exists?: InputMaybe<Scalars['Boolean']>;
  domain?: InputMaybe<Scalars['String']>;
  domain_exists?: InputMaybe<Scalars['Boolean']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_ne?: InputMaybe<Scalars['String']>;
  domain_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ein?: InputMaybe<Scalars['String']>;
  ein_exists?: InputMaybe<Scalars['Boolean']>;
  ein_gt?: InputMaybe<Scalars['String']>;
  ein_gte?: InputMaybe<Scalars['String']>;
  ein_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ein_lt?: InputMaybe<Scalars['String']>;
  ein_lte?: InputMaybe<Scalars['String']>;
  ein_ne?: InputMaybe<Scalars['String']>;
  ein_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Scalars['EmailAddress']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_gt?: InputMaybe<Scalars['String']>;
  email_gte?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_lt?: InputMaybe<Scalars['String']>;
  email_lte?: InputMaybe<Scalars['String']>;
  email_ne?: InputMaybe<Scalars['String']>;
  email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyeColor?: InputMaybe<Scalars['String']>;
  eyeColor_exists?: InputMaybe<Scalars['Boolean']>;
  eyeColor_gt?: InputMaybe<Scalars['String']>;
  eyeColor_gte?: InputMaybe<Scalars['String']>;
  eyeColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyeColor_lt?: InputMaybe<Scalars['String']>;
  eyeColor_lte?: InputMaybe<Scalars['String']>;
  eyeColor_ne?: InputMaybe<Scalars['String']>;
  eyeColor_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Scalars['String']>;
  firstName_exists?: InputMaybe<Scalars['Boolean']>;
  firstName_gt?: InputMaybe<Scalars['String']>;
  firstName_gte?: InputMaybe<Scalars['String']>;
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName_lt?: InputMaybe<Scalars['String']>;
  firstName_lte?: InputMaybe<Scalars['String']>;
  firstName_ne?: InputMaybe<Scalars['String']>;
  firstName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender?: InputMaybe<Scalars['String']>;
  gender_exists?: InputMaybe<Scalars['Boolean']>;
  gender_gt?: InputMaybe<Scalars['String']>;
  gender_gte?: InputMaybe<Scalars['String']>;
  gender_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender_lt?: InputMaybe<Scalars['String']>;
  gender_lte?: InputMaybe<Scalars['String']>;
  gender_ne?: InputMaybe<Scalars['String']>;
  gender_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hair?: InputMaybe<EmployeeHairQueryInput>;
  hair_exists?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_ne?: InputMaybe<Scalars['Int']>;
  height_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_gt?: InputMaybe<Scalars['Int']>;
  id_gte?: InputMaybe<Scalars['Int']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id_lt?: InputMaybe<Scalars['Int']>;
  id_lte?: InputMaybe<Scalars['Int']>;
  id_ne?: InputMaybe<Scalars['Int']>;
  id_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  image?: InputMaybe<Scalars['String']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_ne?: InputMaybe<Scalars['String']>;
  image_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ip?: InputMaybe<Scalars['String']>;
  ip_exists?: InputMaybe<Scalars['Boolean']>;
  ip_gt?: InputMaybe<Scalars['String']>;
  ip_gte?: InputMaybe<Scalars['String']>;
  ip_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ip_lt?: InputMaybe<Scalars['String']>;
  ip_lte?: InputMaybe<Scalars['String']>;
  ip_ne?: InputMaybe<Scalars['String']>;
  ip_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_exists?: InputMaybe<Scalars['Boolean']>;
  lastName_gt?: InputMaybe<Scalars['String']>;
  lastName_gte?: InputMaybe<Scalars['String']>;
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName_lt?: InputMaybe<Scalars['String']>;
  lastName_lte?: InputMaybe<Scalars['String']>;
  lastName_ne?: InputMaybe<Scalars['String']>;
  lastName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  macAddress?: InputMaybe<Scalars['String']>;
  macAddress_exists?: InputMaybe<Scalars['Boolean']>;
  macAddress_gt?: InputMaybe<Scalars['String']>;
  macAddress_gte?: InputMaybe<Scalars['String']>;
  macAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  macAddress_lt?: InputMaybe<Scalars['String']>;
  macAddress_lte?: InputMaybe<Scalars['String']>;
  macAddress_ne?: InputMaybe<Scalars['String']>;
  macAddress_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maidenName?: InputMaybe<Scalars['String']>;
  maidenName_exists?: InputMaybe<Scalars['Boolean']>;
  maidenName_gt?: InputMaybe<Scalars['String']>;
  maidenName_gte?: InputMaybe<Scalars['String']>;
  maidenName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maidenName_lt?: InputMaybe<Scalars['String']>;
  maidenName_lte?: InputMaybe<Scalars['String']>;
  maidenName_ne?: InputMaybe<Scalars['String']>;
  maidenName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  password?: InputMaybe<Scalars['String']>;
  password_exists?: InputMaybe<Scalars['Boolean']>;
  password_gt?: InputMaybe<Scalars['String']>;
  password_gte?: InputMaybe<Scalars['String']>;
  password_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  password_lt?: InputMaybe<Scalars['String']>;
  password_lte?: InputMaybe<Scalars['String']>;
  password_ne?: InputMaybe<Scalars['String']>;
  password_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_exists?: InputMaybe<Scalars['Boolean']>;
  phone_gt?: InputMaybe<Scalars['String']>;
  phone_gte?: InputMaybe<Scalars['String']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_lt?: InputMaybe<Scalars['String']>;
  phone_lte?: InputMaybe<Scalars['String']>;
  phone_ne?: InputMaybe<Scalars['String']>;
  phone_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ssn?: InputMaybe<Scalars['String']>;
  ssn_exists?: InputMaybe<Scalars['Boolean']>;
  ssn_gt?: InputMaybe<Scalars['String']>;
  ssn_gte?: InputMaybe<Scalars['String']>;
  ssn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ssn_lt?: InputMaybe<Scalars['String']>;
  ssn_lte?: InputMaybe<Scalars['String']>;
  ssn_ne?: InputMaybe<Scalars['String']>;
  ssn_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  university?: InputMaybe<Scalars['String']>;
  university_exists?: InputMaybe<Scalars['Boolean']>;
  university_gt?: InputMaybe<Scalars['String']>;
  university_gte?: InputMaybe<Scalars['String']>;
  university_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  university_lt?: InputMaybe<Scalars['String']>;
  university_lte?: InputMaybe<Scalars['String']>;
  university_ne?: InputMaybe<Scalars['String']>;
  university_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userAgent?: InputMaybe<Scalars['String']>;
  userAgent_exists?: InputMaybe<Scalars['Boolean']>;
  userAgent_gt?: InputMaybe<Scalars['String']>;
  userAgent_gte?: InputMaybe<Scalars['String']>;
  userAgent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userAgent_lt?: InputMaybe<Scalars['String']>;
  userAgent_lte?: InputMaybe<Scalars['String']>;
  userAgent_ne?: InputMaybe<Scalars['String']>;
  userAgent_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Scalars['String']>;
  username_exists?: InputMaybe<Scalars['Boolean']>;
  username_gt?: InputMaybe<Scalars['String']>;
  username_gte?: InputMaybe<Scalars['String']>;
  username_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username_lt?: InputMaybe<Scalars['String']>;
  username_lte?: InputMaybe<Scalars['String']>;
  username_ne?: InputMaybe<Scalars['String']>;
  username_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  weight?: InputMaybe<Scalars['Float']>;
  weight_exists?: InputMaybe<Scalars['Boolean']>;
  weight_gt?: InputMaybe<Scalars['Float']>;
  weight_gte?: InputMaybe<Scalars['Float']>;
  weight_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  weight_lt?: InputMaybe<Scalars['Float']>;
  weight_lte?: InputMaybe<Scalars['Float']>;
  weight_ne?: InputMaybe<Scalars['Float']>;
  weight_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum EmployeeSortByInput {
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  BirthdateAsc = 'BIRTHDATE_ASC',
  BirthdateDesc = 'BIRTHDATE_DESC',
  BloodgroupAsc = 'BLOODGROUP_ASC',
  BloodgroupDesc = 'BLOODGROUP_DESC',
  DomainAsc = 'DOMAIN_ASC',
  DomainDesc = 'DOMAIN_DESC',
  EinAsc = 'EIN_ASC',
  EinDesc = 'EIN_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  EyecolorAsc = 'EYECOLOR_ASC',
  EyecolorDesc = 'EYECOLOR_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  HeightAsc = 'HEIGHT_ASC',
  HeightDesc = 'HEIGHT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ImageAsc = 'IMAGE_ASC',
  ImageDesc = 'IMAGE_DESC',
  IpAsc = 'IP_ASC',
  IpDesc = 'IP_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  MacaddressAsc = 'MACADDRESS_ASC',
  MacaddressDesc = 'MACADDRESS_DESC',
  MaidennameAsc = 'MAIDENNAME_ASC',
  MaidennameDesc = 'MAIDENNAME_DESC',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  SsnAsc = 'SSN_ASC',
  SsnDesc = 'SSN_DESC',
  UniversityAsc = 'UNIVERSITY_ASC',
  UniversityDesc = 'UNIVERSITY_DESC',
  UseragentAsc = 'USERAGENT_ASC',
  UseragentDesc = 'USERAGENT_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  WeightAsc = 'WEIGHT_ASC',
  WeightDesc = 'WEIGHT_DESC'
}

export { EmployeeStatusEnum };

export { EmployeeTitleEnum };

export { EmployeeTypeEnum };

export type EmployeeUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  address: EmployeeAddressUpdateInput;
  address_unset?: InputMaybe<Scalars['Boolean']>;
  age?: InputMaybe<Scalars['Int']>;
  age_inc?: InputMaybe<Scalars['Int']>;
  age_unset?: InputMaybe<Scalars['Boolean']>;
  bank?: InputMaybe<EmployeeBankUpdateInput>;
  bank_unset?: InputMaybe<Scalars['Boolean']>;
  birthDate: Scalars['String'];
  birthDate_unset?: InputMaybe<Scalars['Boolean']>;
  bloodGroup?: InputMaybe<Scalars['String']>;
  bloodGroup_unset?: InputMaybe<Scalars['Boolean']>;
  company: EmployeeCompanyUpdateInput;
  company_unset?: InputMaybe<Scalars['Boolean']>;
  domain?: InputMaybe<Scalars['String']>;
  domain_unset?: InputMaybe<Scalars['Boolean']>;
  ein?: InputMaybe<Scalars['String']>;
  ein_unset?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['EmailAddress'];
  email_unset?: InputMaybe<Scalars['Boolean']>;
  eyeColor?: InputMaybe<Scalars['String']>;
  eyeColor_unset?: InputMaybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  firstName_unset?: InputMaybe<Scalars['Boolean']>;
  gender: Scalars['String'];
  gender_unset?: InputMaybe<Scalars['Boolean']>;
  hair?: InputMaybe<EmployeeHairUpdateInput>;
  hair_unset?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  height_inc?: InputMaybe<Scalars['Int']>;
  height_unset?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  id_inc?: InputMaybe<Scalars['Int']>;
  id_unset?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Scalars['String']>;
  image_unset?: InputMaybe<Scalars['Boolean']>;
  ip?: InputMaybe<Scalars['String']>;
  ip_unset?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  lastName_unset?: InputMaybe<Scalars['Boolean']>;
  macAddress?: InputMaybe<Scalars['String']>;
  macAddress_unset?: InputMaybe<Scalars['Boolean']>;
  maidenName?: InputMaybe<Scalars['String']>;
  maidenName_unset?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  password_unset?: InputMaybe<Scalars['Boolean']>;
  phone: Scalars['String'];
  phone_unset?: InputMaybe<Scalars['Boolean']>;
  ssn?: InputMaybe<Scalars['String']>;
  ssn_unset?: InputMaybe<Scalars['Boolean']>;
  university?: InputMaybe<Scalars['String']>;
  university_unset?: InputMaybe<Scalars['Boolean']>;
  userAgent?: InputMaybe<Scalars['String']>;
  userAgent_unset?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
  username_unset?: InputMaybe<Scalars['Boolean']>;
  weight?: InputMaybe<Scalars['Float']>;
  weight_inc?: InputMaybe<Scalars['Float']>;
  weight_unset?: InputMaybe<Scalars['Boolean']>;
};

export type EmployeeUpdateOneQueryInput = {
  _id: Scalars['ObjectId'];
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyEmployees?: Maybe<DeleteManyPayload>;
  deleteOneEmployee?: Maybe<DeleteOnePayload>;
  insertManyEmployees?: Maybe<InsertManyPayload>;
  insertOneEmployee?: Maybe<Employee>;
  replaceOneEmployee?: Maybe<Employee>;
  updateManyEmployees?: Maybe<UpdateManyPayload>;
  updateOneEmployee?: Maybe<Employee>;
  upsertOneEmployee?: Maybe<Employee>;
};


export type MutationDeleteManyEmployeesArgs = {
  query?: InputMaybe<EmployeeQueryInput>;
};


export type MutationDeleteOneEmployeeArgs = {
  query: DeleteOneEmployeeInput;
};


export type MutationInsertManyEmployeesArgs = {
  data: Array<EmployeeInsertInput>;
};


export type MutationInsertOneEmployeeArgs = {
  data: EmployeeInsertInput;
};


export type MutationReplaceOneEmployeeArgs = {
  data: EmployeeInsertInput;
  query?: InputMaybe<EmployeeQueryInput>;
};


export type MutationUpdateManyEmployeesArgs = {
  query?: InputMaybe<EmployeeQueryInput>;
  set: EmployeeUpdateInput;
};


export type MutationUpdateOneEmployeeArgs = {
  query?: InputMaybe<EmployeeUpdateOneQueryInput>;
  set: EmployeeUpdateInput;
};


export type MutationUpsertOneEmployeeArgs = {
  data: EmployeeInsertInput;
  query?: InputMaybe<EmployeeQueryInput>;
};

export type OneEmployeeQueryInput = {
  _id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  employee?: Maybe<Employee>;
  employees: Array<Maybe<Employee>>;
  oneEmployee: Employee;
};


export type QueryEmployeeArgs = {
  query?: InputMaybe<EmployeeQueryInput>;
};


export type QueryEmployeesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<EmployeeQueryInput>;
  sortBy?: InputMaybe<EmployeeSortByInput>;
};


export type QueryOneEmployeeArgs = {
  query: OneEmployeeQueryInput;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteManyPayload: ResolverTypeWrapper<DeleteManyPayload>;
  DeleteOneEmployeeInput: DeleteOneEmployeeInput;
  DeleteOnePayload: ResolverTypeWrapper<DeleteOnePayload>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  Employee: ResolverTypeWrapper<EmployeeType>;
  EmployeeAddress: ResolverTypeWrapper<EmployeeAddress>;
  EmployeeAddressCoordinate: ResolverTypeWrapper<EmployeeAddressCoordinate>;
  EmployeeAddressCoordinateInsertInput: EmployeeAddressCoordinateInsertInput;
  EmployeeAddressCoordinateQueryInput: EmployeeAddressCoordinateQueryInput;
  EmployeeAddressCoordinateUpdateInput: EmployeeAddressCoordinateUpdateInput;
  EmployeeAddressInsertInput: EmployeeAddressInsertInput;
  EmployeeAddressQueryInput: EmployeeAddressQueryInput;
  EmployeeAddressUpdateInput: EmployeeAddressUpdateInput;
  EmployeeBank: ResolverTypeWrapper<EmployeeBank>;
  EmployeeBankInsertInput: EmployeeBankInsertInput;
  EmployeeBankQueryInput: EmployeeBankQueryInput;
  EmployeeBankUpdateInput: EmployeeBankUpdateInput;
  EmployeeCompany: ResolverTypeWrapper<EmployeeCompany>;
  EmployeeCompanyAddress: ResolverTypeWrapper<EmployeeCompanyAddress>;
  EmployeeCompanyAddressCoordinate: ResolverTypeWrapper<EmployeeCompanyAddressCoordinate>;
  EmployeeCompanyAddressCoordinateInsertInput: EmployeeCompanyAddressCoordinateInsertInput;
  EmployeeCompanyAddressCoordinateQueryInput: EmployeeCompanyAddressCoordinateQueryInput;
  EmployeeCompanyAddressCoordinateUpdateInput: EmployeeCompanyAddressCoordinateUpdateInput;
  EmployeeCompanyAddressInsertInput: EmployeeCompanyAddressInsertInput;
  EmployeeCompanyAddressQueryInput: EmployeeCompanyAddressQueryInput;
  EmployeeCompanyAddressUpdateInput: EmployeeCompanyAddressUpdateInput;
  EmployeeCompanyInsertInput: EmployeeCompanyInsertInput;
  EmployeeCompanyQueryInput: EmployeeCompanyQueryInput;
  EmployeeCompanyUpdateInput: EmployeeCompanyUpdateInput;
  EmployeeDepartmentEnum: EmployeeDepartmentEnum;
  EmployeeHair: ResolverTypeWrapper<EmployeeHair>;
  EmployeeHairInsertInput: EmployeeHairInsertInput;
  EmployeeHairQueryInput: EmployeeHairQueryInput;
  EmployeeHairUpdateInput: EmployeeHairUpdateInput;
  EmployeeInsertInput: EmployeeInsertInput;
  EmployeeQueryInput: EmployeeQueryInput;
  EmployeeSortByInput: EmployeeSortByInput;
  EmployeeStatusEnum: EmployeeStatusEnum;
  EmployeeTitleEnum: EmployeeTitleEnum;
  EmployeeTypeEnum: EmployeeTypeEnum;
  EmployeeUpdateInput: EmployeeUpdateInput;
  EmployeeUpdateOneQueryInput: EmployeeUpdateOneQueryInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  InsertManyPayload: ResolverTypeWrapper<InsertManyPayload>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  ObjectId: ResolverTypeWrapper<Scalars['ObjectId']>;
  OneEmployeeQueryInput: OneEmployeeQueryInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateManyPayload: ResolverTypeWrapper<UpdateManyPayload>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  DeleteManyPayload: DeleteManyPayload;
  DeleteOneEmployeeInput: DeleteOneEmployeeInput;
  DeleteOnePayload: DeleteOnePayload;
  EmailAddress: Scalars['EmailAddress'];
  Employee: EmployeeType;
  EmployeeAddress: EmployeeAddress;
  EmployeeAddressCoordinate: EmployeeAddressCoordinate;
  EmployeeAddressCoordinateInsertInput: EmployeeAddressCoordinateInsertInput;
  EmployeeAddressCoordinateQueryInput: EmployeeAddressCoordinateQueryInput;
  EmployeeAddressCoordinateUpdateInput: EmployeeAddressCoordinateUpdateInput;
  EmployeeAddressInsertInput: EmployeeAddressInsertInput;
  EmployeeAddressQueryInput: EmployeeAddressQueryInput;
  EmployeeAddressUpdateInput: EmployeeAddressUpdateInput;
  EmployeeBank: EmployeeBank;
  EmployeeBankInsertInput: EmployeeBankInsertInput;
  EmployeeBankQueryInput: EmployeeBankQueryInput;
  EmployeeBankUpdateInput: EmployeeBankUpdateInput;
  EmployeeCompany: EmployeeCompany;
  EmployeeCompanyAddress: EmployeeCompanyAddress;
  EmployeeCompanyAddressCoordinate: EmployeeCompanyAddressCoordinate;
  EmployeeCompanyAddressCoordinateInsertInput: EmployeeCompanyAddressCoordinateInsertInput;
  EmployeeCompanyAddressCoordinateQueryInput: EmployeeCompanyAddressCoordinateQueryInput;
  EmployeeCompanyAddressCoordinateUpdateInput: EmployeeCompanyAddressCoordinateUpdateInput;
  EmployeeCompanyAddressInsertInput: EmployeeCompanyAddressInsertInput;
  EmployeeCompanyAddressQueryInput: EmployeeCompanyAddressQueryInput;
  EmployeeCompanyAddressUpdateInput: EmployeeCompanyAddressUpdateInput;
  EmployeeCompanyInsertInput: EmployeeCompanyInsertInput;
  EmployeeCompanyQueryInput: EmployeeCompanyQueryInput;
  EmployeeCompanyUpdateInput: EmployeeCompanyUpdateInput;
  EmployeeHair: EmployeeHair;
  EmployeeHairInsertInput: EmployeeHairInsertInput;
  EmployeeHairQueryInput: EmployeeHairQueryInput;
  EmployeeHairUpdateInput: EmployeeHairUpdateInput;
  EmployeeInsertInput: EmployeeInsertInput;
  EmployeeQueryInput: EmployeeQueryInput;
  EmployeeUpdateInput: EmployeeUpdateInput;
  EmployeeUpdateOneQueryInput: EmployeeUpdateOneQueryInput;
  Float: Scalars['Float'];
  InsertManyPayload: InsertManyPayload;
  Int: Scalars['Int'];
  Mutation: {};
  ObjectId: Scalars['ObjectId'];
  OneEmployeeQueryInput: OneEmployeeQueryInput;
  Query: {};
  String: Scalars['String'];
  UpdateManyPayload: UpdateManyPayload;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteManyPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DeleteManyPayload'] = ResolversParentTypes['DeleteManyPayload']> = ResolversObject<{
  deletedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteOnePayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DeleteOnePayload'] = ResolversParentTypes['DeleteOnePayload']> = ResolversObject<{
  deletedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type EmployeeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['EmployeeAddress'], ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bank?: Resolver<Maybe<ResolversTypes['EmployeeBank']>, ParentType, ContextType>;
  birthDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bloodGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['EmployeeCompany'], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ein?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>;
  eyeColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hair?: Resolver<Maybe<ResolversTypes['EmployeeHair']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  macAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maidenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ssn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  university?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userAgent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeAddressResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['EmployeeAddress'] = ResolversParentTypes['EmployeeAddress']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coordinates?: Resolver<Maybe<ResolversTypes['EmployeeAddressCoordinate']>, ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeAddressCoordinateResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['EmployeeAddressCoordinate'] = ResolversParentTypes['EmployeeAddressCoordinate']> = ResolversObject<{
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeBankResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['EmployeeBank'] = ResolversParentTypes['EmployeeBank']> = ResolversObject<{
  cardExpire?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cardNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cardType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iban?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeCompanyResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['EmployeeCompany'] = ResolversParentTypes['EmployeeCompany']> = ResolversObject<{
  address?: Resolver<ResolversTypes['EmployeeCompanyAddress'], ParentType, ContextType>;
  dateOfJoining?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  department?: Resolver<ResolversTypes['EmployeeDepartmentEnum'], ParentType, ContextType>;
  employeeType?: Resolver<ResolversTypes['EmployeeTypeEnum'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['EmployeeStatusEnum'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['EmployeeTitleEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeCompanyAddressResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['EmployeeCompanyAddress'] = ResolversParentTypes['EmployeeCompanyAddress']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coordinates?: Resolver<Maybe<ResolversTypes['EmployeeCompanyAddressCoordinate']>, ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeCompanyAddressCoordinateResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['EmployeeCompanyAddressCoordinate'] = ResolversParentTypes['EmployeeCompanyAddressCoordinate']> = ResolversObject<{
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeDepartmentEnumResolvers = EnumResolverSignature<{ Accounting?: any, BusinessDevelopment?: any, Engineering?: any, HumanResources?: any, Legal?: any, Marketing?: any, ProductManagement?: any, ResearchandDevelopment?: any, Sales?: any, Services?: any, Support?: any, Training?: any }, ResolversTypes['EmployeeDepartmentEnum']>;

export type EmployeeHairResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['EmployeeHair'] = ResolversParentTypes['EmployeeHair']> = ResolversObject<{
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeStatusEnumResolvers = EnumResolverSignature<{ Active?: any, On_Leave?: any, Terminated_Dismissed?: any, Terminated_Resigned?: any }, ResolversTypes['EmployeeStatusEnum']>;

export type EmployeeTitleEnumResolvers = EnumResolverSignature<{ AccountCoordinator?: any, AccountExecutive?: any, AccountRepresentativeI?: any, AccountRepresentativeII?: any, AccountantIII?: any, AdministrativeAssistantII?: any, AnalystProgrammer?: any, AssistantManager?: any, AssistantProfessor?: any, AssociateProfessor?: any, AutomationSpecialistI?: any, BiostatisticianIV?: any, ChiefDesignEngineer?: any, CivilEngineer?: any, ClinicalSpecialist?: any, CommunityOutreachSpecialist?: any, CompensationAnalyst?: any, CostAccountant?: any, DesignEngineer?: any, DeveloperII?: any, DirectorofSales?: any, EnvironmentalSpecialist?: any, ExecutiveSecretary?: any, FinancialAdvisor?: any, FinancialAnalyst?: any, FoodChemist?: any, GISTechnicalArchitect?: any, GeologicalEngineer?: any, GeologistIII?: any, GraphicDesigner?: any, HelpDeskOperator?: any, HelpDeskTechnician?: any, JuniorExecutive?: any, LegalAssistant?: any, Librarian?: any, MarketingAssistant?: any, MechanicalSystemsEngineer?: any, MediaManagerIV?: any, NursePracticioner?: any, Operator?: any, Paralegal?: any, PaymentAdjustmentCoordinator?: any, PhysicalTherapyAssistant?: any, Professor?: any, ProgrammerAnalystI?: any, ProgrammerAnalystIV?: any, ProjectManager?: any, QualityControlSpecialist?: any, QualityEngineer?: any, RecruitingManager?: any, RegisteredNurse?: any, ResearchAssociate?: any, ResearchNurse?: any, SalesAssociate?: any, SalesRepresentative?: any, SeniorCostAccountant?: any, SeniorEditor?: any, SeniorQualityEngineer?: any, SeniorSalesAssociate?: any, SoftwareConsultant?: any, SoftwareTestEngineerIV?: any, SpeechPathologist?: any, StructuralAnalysisEngineer?: any, TechnicalWriter?: any, VPAccounting?: any, VPQualityControl?: any, VPSales?: any, WebDeveloperI?: any }, ResolversTypes['EmployeeTitleEnum']>;

export type EmployeeTypeEnumResolvers = EnumResolverSignature<{ Contract?: any, Full_time?: any, Part_time?: any, Seasonal?: any }, ResolversTypes['EmployeeTypeEnum']>;

export type InsertManyPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['InsertManyPayload'] = ResolversParentTypes['InsertManyPayload']> = ResolversObject<{
  insertedIds?: Resolver<Array<Maybe<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  deleteManyEmployees?: Resolver<Maybe<ResolversTypes['DeleteManyPayload']>, ParentType, ContextType, Partial<MutationDeleteManyEmployeesArgs>>;
  deleteOneEmployee?: Resolver<Maybe<ResolversTypes['DeleteOnePayload']>, ParentType, ContextType, RequireFields<MutationDeleteOneEmployeeArgs, 'query'>>;
  insertManyEmployees?: Resolver<Maybe<ResolversTypes['InsertManyPayload']>, ParentType, ContextType, RequireFields<MutationInsertManyEmployeesArgs, 'data'>>;
  insertOneEmployee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<MutationInsertOneEmployeeArgs, 'data'>>;
  replaceOneEmployee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<MutationReplaceOneEmployeeArgs, 'data'>>;
  updateManyEmployees?: Resolver<Maybe<ResolversTypes['UpdateManyPayload']>, ParentType, ContextType, RequireFields<MutationUpdateManyEmployeesArgs, 'set'>>;
  updateOneEmployee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<MutationUpdateOneEmployeeArgs, 'set'>>;
  upsertOneEmployee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<MutationUpsertOneEmployeeArgs, 'data'>>;
}>;

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectId'], any> {
  name: 'ObjectId';
}

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  employee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, Partial<QueryEmployeeArgs>>;
  employees?: Resolver<Array<Maybe<ResolversTypes['Employee']>>, ParentType, ContextType, RequireFields<QueryEmployeesArgs, 'limit'>>;
  oneEmployee?: Resolver<ResolversTypes['Employee'], ParentType, ContextType, RequireFields<QueryOneEmployeeArgs, 'query'>>;
}>;

export type UpdateManyPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UpdateManyPayload'] = ResolversParentTypes['UpdateManyPayload']> = ResolversObject<{
  matchedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  modifiedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GraphQLContext> = ResolversObject<{
  DateTime?: GraphQLScalarType;
  DeleteManyPayload?: DeleteManyPayloadResolvers<ContextType>;
  DeleteOnePayload?: DeleteOnePayloadResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  Employee?: EmployeeResolvers<ContextType>;
  EmployeeAddress?: EmployeeAddressResolvers<ContextType>;
  EmployeeAddressCoordinate?: EmployeeAddressCoordinateResolvers<ContextType>;
  EmployeeBank?: EmployeeBankResolvers<ContextType>;
  EmployeeCompany?: EmployeeCompanyResolvers<ContextType>;
  EmployeeCompanyAddress?: EmployeeCompanyAddressResolvers<ContextType>;
  EmployeeCompanyAddressCoordinate?: EmployeeCompanyAddressCoordinateResolvers<ContextType>;
  EmployeeDepartmentEnum?: EmployeeDepartmentEnumResolvers;
  EmployeeHair?: EmployeeHairResolvers<ContextType>;
  EmployeeStatusEnum?: EmployeeStatusEnumResolvers;
  EmployeeTitleEnum?: EmployeeTitleEnumResolvers;
  EmployeeTypeEnum?: EmployeeTypeEnumResolvers;
  InsertManyPayload?: InsertManyPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ObjectId?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  UpdateManyPayload?: UpdateManyPayloadResolvers<ContextType>;
}>;

