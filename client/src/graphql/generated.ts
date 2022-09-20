import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
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

export enum EmployeeDepartmentEnum {
  Accounting = 'Accounting',
  BusinessDevelopment = 'BusinessDevelopment',
  Engineering = 'Engineering',
  HumanResources = 'HumanResources',
  Legal = 'Legal',
  Marketing = 'Marketing',
  ProductManagement = 'ProductManagement',
  ResearchandDevelopment = 'ResearchandDevelopment',
  Sales = 'Sales',
  Services = 'Services',
  Support = 'Support',
  Training = 'Training'
}

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

export enum EmployeeStatusEnum {
  Active = 'Active',
  OnLeave = 'On_Leave',
  TerminatedDismissed = 'Terminated_Dismissed',
  TerminatedResigned = 'Terminated_Resigned'
}

export enum EmployeeTitleEnum {
  AccountCoordinator = 'AccountCoordinator',
  AccountExecutive = 'AccountExecutive',
  AccountRepresentativeI = 'AccountRepresentativeI',
  AccountRepresentativeIi = 'AccountRepresentativeII',
  AccountantIii = 'AccountantIII',
  AdministrativeAssistantIi = 'AdministrativeAssistantII',
  AnalystProgrammer = 'AnalystProgrammer',
  AssistantManager = 'AssistantManager',
  AssistantProfessor = 'AssistantProfessor',
  AssociateProfessor = 'AssociateProfessor',
  AutomationSpecialistI = 'AutomationSpecialistI',
  BiostatisticianIv = 'BiostatisticianIV',
  ChiefDesignEngineer = 'ChiefDesignEngineer',
  CivilEngineer = 'CivilEngineer',
  ClinicalSpecialist = 'ClinicalSpecialist',
  CommunityOutreachSpecialist = 'CommunityOutreachSpecialist',
  CompensationAnalyst = 'CompensationAnalyst',
  CostAccountant = 'CostAccountant',
  DesignEngineer = 'DesignEngineer',
  DeveloperIi = 'DeveloperII',
  DirectorofSales = 'DirectorofSales',
  EnvironmentalSpecialist = 'EnvironmentalSpecialist',
  ExecutiveSecretary = 'ExecutiveSecretary',
  FinancialAdvisor = 'FinancialAdvisor',
  FinancialAnalyst = 'FinancialAnalyst',
  FoodChemist = 'FoodChemist',
  GisTechnicalArchitect = 'GISTechnicalArchitect',
  GeologicalEngineer = 'GeologicalEngineer',
  GeologistIii = 'GeologistIII',
  GraphicDesigner = 'GraphicDesigner',
  HelpDeskOperator = 'HelpDeskOperator',
  HelpDeskTechnician = 'HelpDeskTechnician',
  JuniorExecutive = 'JuniorExecutive',
  LegalAssistant = 'LegalAssistant',
  Librarian = 'Librarian',
  MarketingAssistant = 'MarketingAssistant',
  MechanicalSystemsEngineer = 'MechanicalSystemsEngineer',
  MediaManagerIv = 'MediaManagerIV',
  NursePracticioner = 'NursePracticioner',
  Operator = 'Operator',
  Paralegal = 'Paralegal',
  PaymentAdjustmentCoordinator = 'PaymentAdjustmentCoordinator',
  PhysicalTherapyAssistant = 'PhysicalTherapyAssistant',
  Professor = 'Professor',
  ProgrammerAnalystI = 'ProgrammerAnalystI',
  ProgrammerAnalystIv = 'ProgrammerAnalystIV',
  ProjectManager = 'ProjectManager',
  QualityControlSpecialist = 'QualityControlSpecialist',
  QualityEngineer = 'QualityEngineer',
  RecruitingManager = 'RecruitingManager',
  RegisteredNurse = 'RegisteredNurse',
  ResearchAssociate = 'ResearchAssociate',
  ResearchNurse = 'ResearchNurse',
  SalesAssociate = 'SalesAssociate',
  SalesRepresentative = 'SalesRepresentative',
  SeniorCostAccountant = 'SeniorCostAccountant',
  SeniorEditor = 'SeniorEditor',
  SeniorQualityEngineer = 'SeniorQualityEngineer',
  SeniorSalesAssociate = 'SeniorSalesAssociate',
  SoftwareConsultant = 'SoftwareConsultant',
  SoftwareTestEngineerIv = 'SoftwareTestEngineerIV',
  SpeechPathologist = 'SpeechPathologist',
  StructuralAnalysisEngineer = 'StructuralAnalysisEngineer',
  TechnicalWriter = 'TechnicalWriter',
  VpAccounting = 'VPAccounting',
  VpQualityControl = 'VPQualityControl',
  VpSales = 'VPSales',
  WebDeveloperI = 'WebDeveloperI'
}

export enum EmployeeTypeEnum {
  Contract = 'Contract',
  FullTime = 'Full_time',
  PartTime = 'Part_time',
  Seasonal = 'Seasonal'
}

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

export type GetEmployeesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetEmployeesQuery = { __typename?: 'Query', employees: Array<{ __typename?: 'Employee', _id?: any | null, age?: number | null, birthDate: string, bloodGroup?: string | null, domain?: string | null, ein?: string | null, email: string, eyeColor?: string | null, firstName: string, gender: string, height?: number | null, id?: number | null, image?: string | null, ip?: string | null, lastName: string, macAddress?: string | null, maidenName?: string | null, password?: string | null, phone: string, ssn?: string | null, university?: string | null, userAgent?: string | null, username?: string | null, weight?: number | null, address: { __typename?: 'EmployeeAddress', address: string, city: string, postalCode: string, state: string, coordinates?: { __typename?: 'EmployeeAddressCoordinate', lat?: number | null, lng?: number | null } | null }, bank?: { __typename?: 'EmployeeBank', cardExpire?: string | null, cardNumber?: string | null, cardType?: string | null, currency?: string | null, iban?: string | null } | null, company: { __typename?: 'EmployeeCompany', dateOfJoining: Date, department: EmployeeDepartmentEnum, employeeType: EmployeeTypeEnum, name: string, title: EmployeeTitleEnum, status: EmployeeStatusEnum, address: { __typename?: 'EmployeeCompanyAddress', address: string, city: string, postalCode: string, state: string, coordinates?: { __typename?: 'EmployeeCompanyAddressCoordinate', lat?: number | null, lng?: number | null } | null } }, hair?: { __typename?: 'EmployeeHair', color?: string | null, type?: string | null } | null } | null> };

export type EmployeeTitleRegexQueryVariables = Exact<{
  query?: InputMaybe<EmployeeQueryInput>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type EmployeeTitleRegexQuery = { __typename?: 'Query', employees: Array<{ __typename?: 'Employee', company: { __typename?: 'EmployeeCompany', title: EmployeeTitleEnum } } | null> };

export type InsertEmployeeMutationVariables = Exact<{
  data: EmployeeInsertInput;
}>;


export type InsertEmployeeMutation = { __typename?: 'Mutation', insertOneEmployee?: { __typename?: 'Employee', age?: number | null, birthDate: string, bloodGroup?: string | null, domain?: string | null, ein?: string | null, email: string, eyeColor?: string | null, firstName: string, gender: string, height?: number | null, id?: number | null, image?: string | null, ip?: string | null, lastName: string, macAddress?: string | null, maidenName?: string | null, password?: string | null, phone: string, ssn?: string | null, university?: string | null, userAgent?: string | null, username?: string | null, weight?: number | null, address: { __typename?: 'EmployeeAddress', address: string, city: string, postalCode: string, state: string, coordinates?: { __typename?: 'EmployeeAddressCoordinate', lat?: number | null, lng?: number | null } | null }, bank?: { __typename?: 'EmployeeBank', cardExpire?: string | null, cardNumber?: string | null, cardType?: string | null, currency?: string | null, iban?: string | null } | null, company: { __typename?: 'EmployeeCompany', dateOfJoining: Date, department: EmployeeDepartmentEnum, employeeType: EmployeeTypeEnum, name: string, title: EmployeeTitleEnum, status: EmployeeStatusEnum, address: { __typename?: 'EmployeeCompanyAddress', address: string, city: string, postalCode: string, state: string, coordinates?: { __typename?: 'EmployeeCompanyAddressCoordinate', lat?: number | null, lng?: number | null } | null } }, hair?: { __typename?: 'EmployeeHair', color?: string | null, type?: string | null } | null } | null };

export type DeleteOneEmployeeMutationVariables = Exact<{
  query: DeleteOneEmployeeInput;
}>;


export type DeleteOneEmployeeMutation = { __typename?: 'Mutation', deleteOneEmployee?: { __typename?: 'DeleteOnePayload', deletedCount: number } | null };

export type UpdateOneEmployeeMutationVariables = Exact<{
  set: EmployeeUpdateInput;
  query?: InputMaybe<EmployeeUpdateOneQueryInput>;
}>;


export type UpdateOneEmployeeMutation = { __typename?: 'Mutation', updateOneEmployee?: { __typename?: 'Employee', _id?: any | null } | null };

export type GetOneEmployeeQueryVariables = Exact<{
  query: OneEmployeeQueryInput;
}>;


export type GetOneEmployeeQuery = { __typename?: 'Query', oneEmployee: { __typename?: 'Employee', _id?: any | null, age?: number | null, birthDate: string, bloodGroup?: string | null, domain?: string | null, ein?: string | null, email: string, eyeColor?: string | null, firstName: string, gender: string, height?: number | null, id?: number | null, image?: string | null, ip?: string | null, lastName: string, macAddress?: string | null, maidenName?: string | null, password?: string | null, phone: string, ssn?: string | null, university?: string | null, userAgent?: string | null, username?: string | null, weight?: number | null, address: { __typename?: 'EmployeeAddress', address: string, city: string, postalCode: string, state: string, coordinates?: { __typename?: 'EmployeeAddressCoordinate', lat?: number | null, lng?: number | null } | null }, bank?: { __typename?: 'EmployeeBank', cardExpire?: string | null, cardNumber?: string | null, cardType?: string | null, currency?: string | null, iban?: string | null } | null, company: { __typename?: 'EmployeeCompany', dateOfJoining: Date, department: EmployeeDepartmentEnum, employeeType: EmployeeTypeEnum, name: string, title: EmployeeTitleEnum, status: EmployeeStatusEnum, address: { __typename?: 'EmployeeCompanyAddress', address: string, city: string, postalCode: string, state: string, coordinates?: { __typename?: 'EmployeeCompanyAddressCoordinate', lat?: number | null, lng?: number | null } | null } }, hair?: { __typename?: 'EmployeeHair', color?: string | null, type?: string | null } | null } };


export const GetEmployeesDocument = `
    query GetEmployees($limit: Int) {
  employees(limit: $limit) {
    _id
    address {
      address
      city
      coordinates {
        lat
        lng
      }
      postalCode
      state
    }
    age
    bank {
      cardExpire
      cardNumber
      cardType
      currency
      iban
    }
    birthDate
    bloodGroup
    company {
      address {
        address
        city
        coordinates {
          lat
          lng
        }
        postalCode
        state
      }
      dateOfJoining
      department
      employeeType
      name
      title
      status
    }
    domain
    ein
    email
    eyeColor
    firstName
    gender
    hair {
      color
      type
    }
    height
    id
    image
    ip
    lastName
    macAddress
    maidenName
    password
    phone
    ssn
    university
    userAgent
    username
    weight
  }
}
    `;
export const useGetEmployeesQuery = <
      TData = GetEmployeesQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetEmployeesQueryVariables,
      options?: UseQueryOptions<GetEmployeesQuery, TError, TData>
    ) =>
    useQuery<GetEmployeesQuery, TError, TData>(
      variables === undefined ? ['GetEmployees'] : ['GetEmployees', variables],
      fetcher<GetEmployeesQuery, GetEmployeesQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetEmployeesDocument, variables),
      options
    );

useGetEmployeesQuery.getKey = (variables?: GetEmployeesQueryVariables) => variables === undefined ? ['GetEmployees'] : ['GetEmployees', variables];
;

export const EmployeeTitleRegexDocument = `
    query EmployeeTitleRegex($query: EmployeeQueryInput, $limit: Int) {
  employees(query: $query, limit: $limit) {
    company {
      title
    }
  }
}
    `;
export const useEmployeeTitleRegexQuery = <
      TData = EmployeeTitleRegexQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: EmployeeTitleRegexQueryVariables,
      options?: UseQueryOptions<EmployeeTitleRegexQuery, TError, TData>
    ) =>
    useQuery<EmployeeTitleRegexQuery, TError, TData>(
      variables === undefined ? ['EmployeeTitleRegex'] : ['EmployeeTitleRegex', variables],
      fetcher<EmployeeTitleRegexQuery, EmployeeTitleRegexQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, EmployeeTitleRegexDocument, variables),
      options
    );

useEmployeeTitleRegexQuery.getKey = (variables?: EmployeeTitleRegexQueryVariables) => variables === undefined ? ['EmployeeTitleRegex'] : ['EmployeeTitleRegex', variables];
;

export const InsertEmployeeDocument = `
    mutation InsertEmployee($data: EmployeeInsertInput!) {
  insertOneEmployee(data: $data) {
    address {
      address
      city
      coordinates {
        lat
        lng
      }
      postalCode
      state
    }
    age
    bank {
      cardExpire
      cardNumber
      cardType
      currency
      iban
    }
    birthDate
    bloodGroup
    company {
      address {
        address
        city
        coordinates {
          lat
          lng
        }
        postalCode
        state
      }
      dateOfJoining
      department
      employeeType
      name
      title
      status
    }
    domain
    ein
    email
    eyeColor
    firstName
    gender
    hair {
      color
      type
    }
    height
    id
    image
    ip
    lastName
    macAddress
    maidenName
    password
    phone
    ssn
    university
    userAgent
    username
    weight
  }
}
    `;
export const useInsertEmployeeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<InsertEmployeeMutation, TError, InsertEmployeeMutationVariables, TContext>
    ) =>
    useMutation<InsertEmployeeMutation, TError, InsertEmployeeMutationVariables, TContext>(
      ['InsertEmployee'],
      (variables?: InsertEmployeeMutationVariables) => fetcher<InsertEmployeeMutation, InsertEmployeeMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, InsertEmployeeDocument, variables)(),
      options
    );
useInsertEmployeeMutation.getKey = () => ['InsertEmployee'];

export const DeleteOneEmployeeDocument = `
    mutation DeleteOneEmployee($query: DeleteOneEmployeeInput!) {
  deleteOneEmployee(query: $query) {
    deletedCount
  }
}
    `;
export const useDeleteOneEmployeeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<DeleteOneEmployeeMutation, TError, DeleteOneEmployeeMutationVariables, TContext>
    ) =>
    useMutation<DeleteOneEmployeeMutation, TError, DeleteOneEmployeeMutationVariables, TContext>(
      ['DeleteOneEmployee'],
      (variables?: DeleteOneEmployeeMutationVariables) => fetcher<DeleteOneEmployeeMutation, DeleteOneEmployeeMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, DeleteOneEmployeeDocument, variables)(),
      options
    );
useDeleteOneEmployeeMutation.getKey = () => ['DeleteOneEmployee'];

export const UpdateOneEmployeeDocument = `
    mutation UpdateOneEmployee($set: EmployeeUpdateInput!, $query: EmployeeUpdateOneQueryInput) {
  updateOneEmployee(set: $set, query: $query) {
    _id
  }
}
    `;
export const useUpdateOneEmployeeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<UpdateOneEmployeeMutation, TError, UpdateOneEmployeeMutationVariables, TContext>
    ) =>
    useMutation<UpdateOneEmployeeMutation, TError, UpdateOneEmployeeMutationVariables, TContext>(
      ['UpdateOneEmployee'],
      (variables?: UpdateOneEmployeeMutationVariables) => fetcher<UpdateOneEmployeeMutation, UpdateOneEmployeeMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdateOneEmployeeDocument, variables)(),
      options
    );
useUpdateOneEmployeeMutation.getKey = () => ['UpdateOneEmployee'];

export const GetOneEmployeeDocument = `
    query GetOneEmployee($query: OneEmployeeQueryInput!) {
  oneEmployee(query: $query) {
    _id
    address {
      address
      city
      coordinates {
        lat
        lng
      }
      postalCode
      state
    }
    age
    bank {
      cardExpire
      cardNumber
      cardType
      currency
      iban
    }
    birthDate
    bloodGroup
    company {
      address {
        address
        city
        coordinates {
          lat
          lng
        }
        postalCode
        state
      }
      dateOfJoining
      department
      employeeType
      name
      title
      status
    }
    domain
    ein
    email
    eyeColor
    firstName
    gender
    hair {
      color
      type
    }
    height
    id
    image
    ip
    lastName
    macAddress
    maidenName
    password
    phone
    ssn
    university
    userAgent
    username
    weight
  }
}
    `;
export const useGetOneEmployeeQuery = <
      TData = GetOneEmployeeQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: GetOneEmployeeQueryVariables,
      options?: UseQueryOptions<GetOneEmployeeQuery, TError, TData>
    ) =>
    useQuery<GetOneEmployeeQuery, TError, TData>(
      ['GetOneEmployee', variables],
      fetcher<GetOneEmployeeQuery, GetOneEmployeeQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetOneEmployeeDocument, variables),
      options
    );

useGetOneEmployeeQuery.getKey = (variables: GetOneEmployeeQueryVariables) => ['GetOneEmployee', variables];
;
