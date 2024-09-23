import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Select from 'react-select';
import SearchableAddressField from '../components/SearchableAddressField';
import { Employee, EmployeeDepartmentEnum, EmployeeStatusEnum, EmployeeTitleEnum, EmployeeTypeEnum, useInsertEmployeeMutation, useUpdateOneEmployeeMutation } from '../graphql/generated';
import { AiFillCheckCircle } from 'react-icons/ai'
import { useQueryClient } from '@tanstack/react-query';

export const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const employeeTitleOptions = Object.values(EmployeeTitleEnum).map((value) => ({ value, label: value }));
export const employeeTypeOptions = Object.values(EmployeeTypeEnum).map((value) => ({ value, label: value }));
export const employeeDepartmentOptions = Object.values(EmployeeDepartmentEnum).map((value) => ({ value, label: value }));

interface Props { }

export interface EmployeeCreateForm extends Omit<Employee, 'address' | 'company'> {
  address: {
    address: {
      label: string;
      value: string;
    },
    city: string,
    postalCode: string,
    state: string,
  },
  company: {
    address: {
      address: {
        label: string;
        value: string;
      },
      city: string,
      postalCode: string,
      state: string,
    },
    dateOfJoining: Date,
    department: {
      label: EmployeeDepartmentEnum,
      value: EmployeeDepartmentEnum
    },
    employeeType: {
      label: EmployeeTypeEnum,
      value: EmployeeTypeEnum
    },
    name: string,
    status: EmployeeStatusEnum,
    title: {
      label: EmployeeTitleEnum,
      value: EmployeeTitleEnum
    }
  }
}



export default function CreateEmployeePage({ }: Props) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, watch, formState: { errors }, control, setValue } = useForm<EmployeeCreateForm>({
    // initialValues for testing purposes
    // defaultValues: {
    //   firstName: "Uzair",
    //   lastName: "Ahmed",
    //   maidenName: "Syed",
    //   email: "sduzair@gmail.com",
    //   gender: "Female",
    //   phone: "4355678975",
    //   birthDate: "2022-08-03",
    //   address: {
    //     address: { label: "123 Main St", value: "123 Main St" },
    //     city: "Waterloo",
    //     state: "ON",
    //     postalCode: "23487M"
    //   },
    //   company: {
    //     name: "RBC",
    //     address: {
    //       address: { label: "123 Main St", value: "123 Main St" },
    //       city: "Waterloo",
    //       postalCode: "234234",
    //       state: "ON",
    //     },
    //     dateOfJoining: new Date("2020-08-03"),
    //     status: EmployeeStatusEnum.Active,
    //     title: { label: EmployeeTitleEnum.AccountCoordinator, value: EmployeeTitleEnum.AccountCoordinator },
    //     department: { label: EmployeeDepartmentEnum.Accounting, value: EmployeeDepartmentEnum.Accounting },
    //     employeeType: { label: EmployeeTypeEnum.FullTime, value: EmployeeTypeEnum.FullTime },
    //   }
    // },
    defaultValues: {
      company: {
        status: EmployeeStatusEnum.Active,
      }
    },
    mode: "onBlur",

  });
  const insertEmployeeMutation = useInsertEmployeeMutation({ endpoint: "graphql", fetchParams: { headers: { "Content-type": "application/json" } } })
  const onSubmit: SubmitHandler<EmployeeCreateForm> = async data => {
    // console.log("submit", data);

    const submissionData = {
      firstName: data.firstName,
      lastName: data.lastName,
      maidenName: data.maidenName,
      email: data.email,
      gender: data.gender,
      phone: data.phone,
      birthDate: data.birthDate,
      address: {
        address: data.address.address.value,
        city: data.address.city,
        state: data.address.state,
        postalCode: data.address.postalCode
      },
      company: {
        name: data.company.name,
        address: {
          address: data.company.address.address.value,
          city: data.company.address.city,
          state: data.company.address.state,
          postalCode: data.company.address.postalCode
        },
        dateOfJoining: data.company.dateOfJoining,
        status: data.company.status,
        title: data.company.title.value,
        department: data.company.department.value,
        employeeType: data.company.employeeType.value
      }
    }
    // console.log("submissionData", submissionData);

    await insertEmployeeMutation.mutateAsync({ data: submissionData })
    // insertEmployeeMutation.reset()
    queryClient.invalidateQueries(['GetEmployees'])
    // queryClient.refetchQueries(['GetEmployees'])
  };

  return (
    <Container fluid="lg" className='mt-2'>
      <form onSubmit={handleSubmit(onSubmit)} className='mx-3'>
        <legend className='h4 font-monospace'>Details</legend>
        <Row className='mb-3'>
          <Col sm={true}>
            <label htmlFor='firstName'>First Name</label>
            <input id='firstName' {...register("firstName", { required: 'First Name is required.' })} className={`form-control form-control-sm ${errors.firstName?.message ? "is-invalid" : ""}`}></input>
            <div className='invalid-feedback'>{errors.firstName?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='lastName'>Last Name</label>
            <input id='lastName' {...register("lastName", { required: 'Last Name is required.' })} className={`form-control form-control-sm ${errors.lastName?.message ? 'is-invalid' : ''}`}></input>
            <div className='invalid-feedback'>{errors.lastName?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='maidenName'>Maiden Name</label>
            <input id='maidenName' {...register("maidenName")} className={`form-control form-control-sm`} placeholder='Optional'></input>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col sm={true}>
            <label htmlFor='email'>Email</label>
            <input id="email" {...register("email", {
              required: 'Email is required.', pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid e-mail."
              }
            })} className={`form-control form-control-sm ${errors.email?.message ? 'is-invalid' : ''}`} ></input>
            <div className='invalid-feedback'>{errors.email?.message}</div>
            <div className='invalid-feedback'></div>
          </Col>
          <Col sm={true}>
            <label htmlFor='gender'>Gender</label>
            <select id='gender' {...register("gender", { required: "Gender is required." })} className={`form-select form-select-sm ${errors.gender?.message ? 'is-invalid' : ''}`}>
              <option value=''>Choose...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Unspecified">Unspecified</option>
            </select>
            <div className='invalid-feedback'>{errors.gender?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='phone'>Phone</label>
            <input id='phone' {...register("phone", {
              required: "Phone is required.",
              validate: (value) => {
                if (!value) { return true; }
                if (value.length === 0) {
                  return true;
                }
                if (phoneRegex.test(value)) {
                  return true;
                }
                return "Invalid phone number.";
              },
              onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
                if (event.type === "blur") {
                  var formattedPhoneNumber = event.target.value.replace(phoneRegex, "($1) $2-$3");
                  setValue("phone", formattedPhoneNumber);
                }
              }
            })} className={`form-control form-control-sm ${errors.phone?.message ? 'is-invalid' : ''}`} ></input>
            <div className='invalid-feedback'>{errors.phone?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='birthDate'>Birth Date</label>
            <input id='birthDate' {...register("birthDate", {
              required: "Birth Date is required.",
              validate: (value) => {
                if (!value) return true;
                const date = new Date(value);
                const now = new Date();
                if (date > now) return "Birth date cannot be in the future.";
                return true;
              }
            }
            )} className={`form-control form-control-sm ${errors.birthDate?.message ? 'is-invalid' : ''}`} type="date"></input>
            <div className='invalid-feedback'>{errors.birthDate?.message}</div>
          </Col>
        </Row>
        <legend className='h4 font-monospace'>Address</legend>
        <Row className='mb-3'>
          <Col sm="4">
            <label htmlFor='address.address'>Street Address</label>
            <Controller
              name="address.address"
              control={control}
              rules={{ required: 'Street Address is required.' }}
              render={({ field, fieldState: { error } }) => (
                <SearchableAddressField isDisabled={false} id="address.address" className={`${errors.address?.address?.message ? 'is-invalid' : ''}`} field={field} error={error} setValue={setValue} setValueFields={['address.address', 'address.city', 'address.state', 'address.postalCode']} />
              )}
            />
            <div className='invalid-feedback'>{errors.address?.address?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='address.city'>City</label>
            <input id='address.city' {...register("address.city", { required: 'City is required.' })} className={`form-control form-control-sm ${errors.address?.city?.message ? 'is-invalid' : ''}`} ></input>
            <div className='invalid-feedback'>{errors.address?.city?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='address.state'>State</label>
            <input id='address.state' {...register("address.state", { required: 'State is required.' })} className={`form-control form-control-sm ${errors.address?.state?.message ? 'is-invalid' : ''}`} ></input>
            <div className='invalid-feedback'>{errors.address?.state?.message}</div>
          </Col>
          <Col>
            <label htmlFor='address.postalCode'>Postal Code</label>
            <input id='address.postalCode' {...register("address.postalCode", { required: 'Postal Code is required.' })} className={`form-control form-control-sm ${errors.address?.postalCode?.message ? 'is-invalid' : ''}`} ></input>
            <div className='invalid-feedback'>{errors.address?.postalCode?.message}</div>
          </Col>
        </Row>
        <legend className='h4 font-monospace'>Company</legend>
        <Row className='mb-3'>
          <Col sm={true}>
            <label htmlFor='company.name'>Name</label>
            <input id='company.name' {...register("company.name", { required: 'Company Name is required.' })} className={`form-control form-control-sm ${errors.company?.name?.message ? 'is-invalid' : ''}`}></input>
            <div className='invalid-feedback'>{errors.company?.name?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='company.title'>Employee Title</label>
            <Controller
              name="company.title"
              control={control}
              rules={{ required: 'Employee Title is required.' }}
              render={({ field, fieldState: { error } }) => (
                <Select
                  inputId='company.title'
                  {...field}
                  options={employeeTitleOptions}
                  className={`${errors.company?.title?.message ? 'is-invalid' : ''}`}
                  theme={theme => ({
                    ...theme,
                    spacing: {
                      controlHeight: 10,
                      baseUnit: 2,
                      menuGutter: 1,
                    },
                  })}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderColor: error?.message ? '#dc3545' : state.isFocused ? '#86b7fe' : '#ced4da',
                      boxShadow: state.isFocused ? error?.message ? '0 0 0 0.25rem rgb(220 53 69 / 25%)' : '0 0 0 .25rem rgba(13,110,253,.25)' : 'none',
                      '&:hover': {
                        borderColor: 'none',
                      },
                    })
                  }}
                />
              )}

            />
            <div className='invalid-feedback'>{errors.company?.title?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='company.department'>Department</label>
            <Controller
              name="company.department"
              control={control}
              rules={{ required: 'Department is required.' }}
              render={({ field, fieldState: { error } }) => (
                <Select
                  id='company.department'
                  {...field}
                  options={employeeDepartmentOptions}
                  className={`${errors.company?.department?.message ? 'is-invalid' : ''}`}
                  theme={(theme) => ({
                    ...theme,
                    spacing: {
                      controlHeight: 10,
                      baseUnit: 2,
                      menuGutter: 1,
                    },
                  })}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderColor: error?.message ? '#dc3545' : state.isFocused ? '#86b7fe' : '#ced4da',
                      boxShadow: state.isFocused ? error?.message ? '0 0 0 0.25rem rgb(220 53 69 / 25%)' : '0 0 0 .25rem rgba(13,110,253,.25)' : 'none',
                      '&:hover': {
                        borderColor: 'none',
                      },
                    })
                  }}
                />
              )}
            />
            <div className='invalid-feedback'>{errors.company?.department?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='company.dateOfJoining'>Date Of Joining</label>
            <input id='company.dateOfJoining' {...register("company.dateOfJoining", {
              required: 'Date of Joining is required.',
              setValueAs(value) {
                return value ? new Date(value) : null;
              },
              validate: (value) => {
                if (value) {
                  const today = new Date();
                  const doj = new Date(value);
                  if (doj > today) {
                    return 'Date of Joining cannot be in future.';
                  }
                }
                return undefined;
              }
            })} className={`form-control form-control-sm ${errors.company?.dateOfJoining?.message ? 'is-invalid' : ''}`} type="date"></input>
            <div className='invalid-feedback'>{errors.company?.dateOfJoining?.message}</div>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col sm="3" lg="2">
            <label htmlFor='company.employeeType'>Employee Type</label>
            <Controller
              name="company.employeeType"
              control={control}
              rules={{ required: 'Employee Type  is required.' }}
              render={({ field, fieldState: { error } }) => (
                <Select
                  // id='company.employeeType'
                  inputId='company.employeeType'
                  {...field}
                  options={employeeTypeOptions}
                  className={`${errors.company?.employeeType?.message ? 'is-invalid' : ''}`}
                  theme={(theme) => ({
                    ...theme,
                    spacing: {
                      controlHeight: 10,
                      baseUnit: 2,
                      menuGutter: 1,
                    },
                  })}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderColor: error?.message ? '#dc3545' : state.isFocused ? '#86b7fe' : '#ced4da',
                      boxShadow: state.isFocused ? error?.message ? '0 0 0 0.25rem rgb(220 53 69 / 25%)' : '0 0 0 .25rem rgba(13,110,253,.25)' : 'none',
                      '&:hover': {
                        borderColor: 'none',
                      },
                    })
                  }}
                />
              )}
            />
            <div className='invalid-feedback'>{errors.company?.employeeType?.message}</div>
          </Col>
          <Col sm="3" lg="2">
            <label htmlFor='company.status'>Employee Status</label>
            <select disabled id='company.status' {...register("company.status", { required: 'Employee Status is required.' })} className="form-select form-select-sm">
              <option value={EmployeeStatusEnum.Active}>Active</option>
              <option value={EmployeeStatusEnum.OnLeave}>On_Leave</option>
              <option value={EmployeeStatusEnum.TerminatedDismissed}>Terminated - Dismissed</option>
              <option value={EmployeeStatusEnum.TerminatedResigned}>Terminated - Resigned</option>
            </select>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col sm="4">
            <label htmlFor='company.address.address'>Street Address</label>
            <Controller
              name="company.address.address"
              control={control}
              rules={{ required: 'Street Address is required.' }}
              render={({ field, fieldState: { error } }) => (
                <SearchableAddressField isDisabled={false} id="company.address.address" className={`${errors.company?.address?.address?.message ? 'is-invalid' : ''}`} field={field} error={error} setValue={setValue} setValueFields={['company.address.address', 'company.address.city', 'company.address.state', 'company.address.postalCode']} />
              )}
            />
            <div className='invalid-feedback'>{errors.company?.address?.address?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='company.address.city'>City</label>
            <input id='company.address.city' {...register("company.address.city", { required: 'Company City is required.' })} className={`form-control form-control-sm ${errors.company?.address?.city?.message ? 'is-invalid' : ''}`} ></input>
            <div className='invalid-feedback'>{errors.company?.address?.city?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='company.address.state'>State</label>
            <input id='company.address.state' {...register("company.address.state", { required: 'Company State is required.' })} className={`form-control form-control-sm ${errors.company?.address?.state?.message ? 'is-invalid' : ''}`}></input>
            <div className='invalid-feedback'>{errors.company?.address?.state?.message}</div>
          </Col>
          <Col>
            <label htmlFor='company.address.postalCode'>Postal Code</label>
            <input id='company.address.postalCode' {...register("company.address.postalCode", { required: 'Company Postal Code is required.' })} className={`form-control form-control-sm ${errors.company?.address?.postalCode?.message ? 'is-invalid' : ''}`}></input>
            <div className='invalid-feedback'>{errors.company?.address?.postalCode?.message}</div>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-end'>
            {insertEmployeeMutation.isIdle && <button className='btn btn-outline-primary btn-lg' type="submit">
              Submit</button>}
            {insertEmployeeMutation.isLoading && <button className='btn btn-outline-primary btn-lg'><><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...</></button>}
            {insertEmployeeMutation.isSuccess &&
              <>
                <div className='position-absolute bottom-0 end-0 p-0 fs-5'>
                  <Alert variant={"success"} className='p-2 d-flex justify-content-between align-content-center align-items-center'><AiFillCheckCircle /><div className='ms-2'>Employee Added</div></Alert>
                </div>
                <button className='btn btn-outline-primary btn-lg' onClick={(e) => { e.preventDefault(); insertEmployeeMutation.reset() }}>
                  Add another employee?</button>
              </>
            }
            {insertEmployeeMutation.isError && <button className='btn btn-danger btn-lg'>{insertEmployeeMutation.error as string}</button>}
          </Col>
        </Row>
      </form>
    </Container>

  )
}