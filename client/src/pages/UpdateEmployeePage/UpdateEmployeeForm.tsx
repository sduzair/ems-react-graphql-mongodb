import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { AiFillCheckCircle } from 'react-icons/ai';
import { LinkContainer } from 'react-router-bootstrap';
import Select from 'react-select';
import SearchableAddressField from '../../components/SearchableAddressField';
import {
  EmployeeStatusEnum, 
} from '../../graphql/generated'
import type { EmployeeUpdateInput, Exact, GetOneEmployeeQuery, OneEmployeeQueryInput } from '../../graphql/generated'
import { useUpdateOneEmployeeMutation } from '../../graphql/generated'
import { type EmployeeCreateForm, employeeDepartmentOptions, employeeTitleOptions, employeeTypeOptions, phoneRegex } from '../CreateEmployeePage';

interface Props {
  initialFormData: GetOneEmployeeQuery,
  getOneEmployeeQueryKey: (string | Exact<{ query: OneEmployeeQueryInput; }>)[]
}

interface TimeTillRetirementType {
  days: number
  months: number
  years: number
}



// function to calculate number of days months and years between two dates
// function timeTillRetirementFunc(birthDate: Date, retirementDate: Date): TimeTillRetirementType {
//   const today = new Date();
//   const birthDateInMs = birthDate.getTime();
//   const retirementDateInMs = retirementDate.getTime();
//   const todayInMs = today.getTime();
//   const timeTillRetirementInMs = retirementDateInMs - todayInMs;
//   const timeTillRetirementInDays = timeTillRetirementInMs / (1000 * 60 * 60 * 24);
//   // const timeTillRetirementInMonths = timeTillRetirementInDays / 30;
//   const timeTillRetirementYears = timeTillRetirementInDays % 365;
//   const timeTillRetirementMonths = timeTillRetirementYears % 30;
//   const timeTillRetirementDays = timeTillRetirementMonths % 365;
//   return {
//     days: Math.floor(timeTillRetirementInDays),
//     months: Math.floor(timeTillRetirementMonths),
//     years: Math.floor(timeTillRetirementYears)
//   }
// }

function timeTillRetirementFunc(datetime: Date): TimeTillRetirementType {
  // datetime.setFullYear(datetime.getFullYear() + 65);
  var daysDiff = Math.ceil(
    Math.abs(new Date().getTime() - datetime.getTime()) / (1000 * 60 * 60 * 24)
  );

  var years = Math.floor(daysDiff / 365.25);
  var remainingDays = Math.floor(daysDiff - years * 365.25);
  var months = Math.floor((remainingDays / 365.25) * 12);
  var days = Math.ceil(daysDiff - (years * 365.25 + (months / 12) * 365.25));
  // return days + " days, " + months + " months, " + years + " years";
  return {
    days: days,
    months: months,
    years: years
  }
};


export default function UpdateEmployeeForm({ initialFormData, getOneEmployeeQueryKey }: Props) {
  const queryClient = useQueryClient();
  const [timeTillRetirement, setTimeTillRetirement] = useState<TimeTillRetirementType>()

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(initialFormData.oneEmployee.birthDate)
    const dateOfRetirement = new Date(birthDate.setFullYear(birthDate.getFullYear() + 65))
    const sixMonthsFromNow = new Date()
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6)
    console.log(dateOfRetirement);

    setTimeTillRetirement(timeTillRetirementFunc(dateOfRetirement))
  }, [])

  const updateEmployeeMutation = useUpdateOneEmployeeMutation({ endpoint: "graphql", fetchParams: { headers: { "Content-type": "application/json" } } })
  const { register, handleSubmit, watch, formState: { errors }, control, setValue } = useForm<EmployeeCreateForm>({
    defaultValues: {
      firstName: initialFormData?.oneEmployee?.firstName,
      lastName: initialFormData?.oneEmployee?.lastName,
      maidenName: initialFormData?.oneEmployee?.maidenName,
      email: initialFormData?.oneEmployee?.email,
      gender: initialFormData?.oneEmployee.gender,
      phone: initialFormData?.oneEmployee?.phone,
      birthDate: initialFormData?.oneEmployee.birthDate,
      address: {
        address: { label: initialFormData?.oneEmployee?.address?.address, value: initialFormData?.oneEmployee?.address?.address },
        city: initialFormData?.oneEmployee?.address?.city,
        state: initialFormData?.oneEmployee?.address?.state,
        postalCode: initialFormData?.oneEmployee?.address?.postalCode
      },
      company: {
        name: initialFormData?.oneEmployee?.company?.name,
        title: { label: initialFormData?.oneEmployee?.company.title, value: initialFormData?.oneEmployee?.company.title },
        department: { label: initialFormData?.oneEmployee?.company.department, value: initialFormData?.oneEmployee?.company.department },
        dateOfJoining: new Date(initialFormData?.oneEmployee?.company.dateOfJoining).toLocaleDateString('en-CA', { timeZone: 'Canada/Eastern' }) as unknown as Date,
        employeeType: { label: initialFormData?.oneEmployee?.company.employeeType, value: initialFormData?.oneEmployee?.company.employeeType },
        status: initialFormData?.oneEmployee?.company.status,
        address: {
          address: { label: initialFormData?.oneEmployee?.company?.address?.address, value: initialFormData?.oneEmployee?.company?.address?.address },
          city: initialFormData?.oneEmployee?.company?.address?.city,
          state: initialFormData?.oneEmployee?.company?.address?.state,
          postalCode: initialFormData?.oneEmployee?.company?.address?.postalCode
        }
      }
    },
    mode: "onBlur",

  });

  const onSubmit: SubmitHandler<EmployeeCreateForm> = async data => {
    // console.log("submit", data);

    const submissionData: EmployeeUpdateInput = {
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
        dateOfJoining: new Date(data.company.dateOfJoining),
        status: data.company.status,
        title: data.company.title.value,
        department: data.company.department.value,
        employeeType: data.company.employeeType.value
      }
    }
    console.log('submissionData', submissionData);
    await updateEmployeeMutation.mutateAsync({
      query: {
        _id: initialFormData?.oneEmployee?._id,
      },
      set: { ...submissionData }
    })
    // console.log(getOneEmployeeQueryKey)

    queryClient.invalidateQueries(getOneEmployeeQueryKey)
    queryClient.invalidateQueries(["GetEmployees", { "limit": 100 }])

    // await refetch()

    // insertEmployeeMutation.mutateAsync({ data: submissionData })
    // insertEmployeeMutation.reset()
    // queryClient.invalidateQueries(['GetEmployees'], {

    // })
    // queryClient.refetchQueries(['GetEmployees'])
  };
  return (
    <Container fluid="lg" className='mt-2'>
      <form onSubmit={handleSubmit(onSubmit)} className='mx-3'>
        <legend className='h4 font-monospace'>Details</legend>
        <Row className='mb-3'>
          <Col>
            <label htmlFor='timeTillRetirement'>Time till retirement:</label>
            <input type='text' className='form-control' id='timeTillRetirement' value={`${timeTillRetirement?.years} years, ${timeTillRetirement?.months} months, ${timeTillRetirement?.days} days`} readOnly />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col sm={true}>
            <label htmlFor='firstName'>First Name</label>
            <input id='firstName' {...register("firstName", { required: 'First Name is required.' })} readOnly className={`form-control form-control-sm ${errors.firstName?.message ? "is-invalid" : ""}`}></input>
            <div className='invalid-feedback'>{errors.firstName?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='lastName'>Last Name</label>
            <input id='lastName' {...register("lastName", { required: 'Last Name is required.' })} readOnly className={`form-control form-control-sm ${errors.lastName?.message ? 'is-invalid' : ''}`}></input>
            <div className='invalid-feedback'>{errors.lastName?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='maidenName'>Maiden Name</label>
            <input id='maidenName' {...register("maidenName")} className={`form-control form-control-sm`} readOnly placeholder='Optional'></input>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col sm={true}>
            <label htmlFor='email'>Email</label>
            <input id="email" readOnly {...register("email", {
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
            <select disabled id='gender' {...register("gender", { required: "Gender is required." })} className={`form-select form-select-sm ${errors.gender?.message ? 'is-invalid' : ''}`}>
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
            <input readOnly id='phone' {...register("phone", {
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
            <input readOnly id='birthDate' {...register("birthDate", {
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
                <SearchableAddressField isDisabled={true} id="address.address" className={`${errors.address?.address?.message ? 'is-invalid' : ''}`} field={field} error={error} setValue={setValue} setValueFields={['address.address', 'address.city', 'address.state', 'address.postalCode']} />
              )}
            />
            <div className='invalid-feedback'>{errors.address?.address?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='address.city'>City</label>
            <input readOnly id='address.city' {...register("address.city", { required: 'City is required.' })} className={`form-control form-control-sm ${errors.address?.city?.message ? 'is-invalid' : ''}`} ></input>
            <div className='invalid-feedback'>{errors.address?.city?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='address.state'>State</label>
            <input readOnly id='address.state' {...register("address.state", { required: 'State is required.' })} className={`form-control form-control-sm ${errors.address?.state?.message ? 'is-invalid' : ''}`} ></input>
            <div className='invalid-feedback'>{errors.address?.state?.message}</div>
          </Col>
          <Col>
            <label htmlFor='address.postalCode'>Postal Code</label>
            <input readOnly id='address.postalCode' {...register("address.postalCode", { required: 'Postal Code is required.' })} className={`form-control form-control-sm ${errors.address?.postalCode?.message ? 'is-invalid' : ''}`} ></input>
            <div className='invalid-feedback'>{errors.address?.postalCode?.message}</div>
          </Col>
        </Row>
        <legend className='h4 font-monospace'>Company</legend>
        <Row className='mb-3'>
          <Col sm={true}>
            <label htmlFor='company.name'>Name</label>
            <input readOnly id='company.name' {...register("company.name", { required: 'Company Name is required.' })} className={`form-control form-control-sm ${errors.company?.name?.message ? 'is-invalid' : ''}`}></input>
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
            <input readOnly id='company.dateOfJoining' {...register("company.dateOfJoining", {
              required: 'Date of Joining is required.',
              // setValueAs(value) {
              //   return value ? new Date(value) : null;
              // },
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
                  isDisabled={true}
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
            <select id='company.status' {...register("company.status", { required: 'Employee Status is required.' })} className="form-select form-select-sm">
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
                <SearchableAddressField isDisabled={true} id="company.address.address" className={`${errors.company?.address?.address?.message ? 'is-invalid' : ''}`} field={field} error={error} setValue={setValue} setValueFields={['company.address.address', 'company.address.city', 'company.address.state', 'company.address.postalCode']} />
              )}
            />
            <div className='invalid-feedback'>{errors.company?.address?.address?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='company.address.city'>City</label>
            <input readOnly id='company.address.city' {...register("company.address.city", { required: 'Company City is required.' })} className={`form-control form-control-sm ${errors.company?.address?.city?.message ? 'is-invalid' : ''}`} ></input>
            <div className='invalid-feedback'>{errors.company?.address?.city?.message}</div>
          </Col>
          <Col sm={true}>
            <label htmlFor='company.address.state'>State</label>
            <input readOnly id='company.address.state' {...register("company.address.state", { required: 'Company State is required.' })} className={`form-control form-control-sm ${errors.company?.address?.state?.message ? 'is-invalid' : ''}`}></input>
            <div className='invalid-feedback'>{errors.company?.address?.state?.message}</div>
          </Col>
          <Col>
            <label htmlFor='company.address.postalCode'>Postal Code</label>
            <input readOnly id='company.address.postalCode' {...register("company.address.postalCode", { required: 'Company Postal Code is required.' })} className={`form-control form-control-sm ${errors.company?.address?.postalCode?.message ? 'is-invalid' : ''}`}></input>
            <div className='invalid-feedback'>{errors.company?.address?.postalCode?.message}</div>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-end'>
            {updateEmployeeMutation.isIdle && <button className='btn btn-outline-primary btn-lg' type="submit">
              Update</button>}
            {updateEmployeeMutation.isLoading && <button className='btn btn-outline-primary btn-lg'><><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Updating...</></button>}
            {updateEmployeeMutation.isSuccess &&
              <>
                <div className='position-absolute bottom-0 end-0 p-0 fs-5'>
                  <Alert variant={"success"} className='p-2 d-flex justify-content-between align-content-center align-items-center'><AiFillCheckCircle /><div className='ms-2'>Employee Updated</div></Alert>
                </div>
                <LinkContainer to="/">
                  <button className='btn btn-outline-primary btn-lg' >Go to Home</button>
                </LinkContainer>
              </>
            }
            {updateEmployeeMutation.isError && <button className='btn btn-danger btn-lg'>{updateEmployeeMutation.error as string}</button>}
          </Col>
        </Row>
      </form>
    </Container>
  )
}