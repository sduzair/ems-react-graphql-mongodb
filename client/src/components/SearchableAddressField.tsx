import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { ControllerRenderProps, DeepRequired, FieldError, FieldErrors, FieldErrorsImpl, FieldPath, UseFormSetValue } from 'react-hook-form'
import Select, { ActionMeta, GroupBase, InputActionMeta, OptionsOrGroups, SingleValue } from 'react-select'
import { EmployeeCreateForm } from '../pages/CreateEmployeePage';

interface Props<TName extends FieldPath<EmployeeCreateForm>> {
  field: ControllerRenderProps<EmployeeCreateForm, TName>
  error: FieldError | undefined
  // errors: FieldErrorsImpl<DeepRequired<EmployeeCreateForm>>
  setValue: UseFormSetValue<EmployeeCreateForm>
  setValueFields: FieldPath<EmployeeCreateForm>[]
  id: string
  className: string
  isDisabled: boolean
}

interface SelectOptions<T> {
  value: T
  label: T
}

// ['123 Main St, Flin Flon, MB, R8A1J9', '123 Main St, Fredericton, NB, E3A1C6'].map((street: any) => ({ value: street, label: street })) as unknown as GroupBase<string>[]

export default function SearchableAddressField<TName extends FieldPath<EmployeeCreateForm>>({ id, className, field, error, setValue, setValueFields, isDisabled }: Props<TName>) {
  const [addressQuery, setAddressQuery] = React.useState<string>();
  const [addressOptions, setAddressOptions] = React.useState<GroupBase<SelectOptions<string>>[]>([{ options: [] }]);
  const { data, isLoading, error: fetchError } = useQuery(['addressesQuery', addressQuery], () => addressQuery ? fetch(`https://geocoder.ca/?autocomplete=1&locate=${encodeURI(addressQuery)}&country=canada&geoit=xml&auth=test&json=1`).then(r => r.json()) : null);
  useEffect(() => {
    if (data?.streets?.street) {
      if (Array.isArray(data.streets.street)) {
        setAddressOptions([{ options: data.streets.street.map((street: any) => ({ value: street, label: street })) }]);
      } else {
        // const singleAddress: GroupBase<string> = [];
        // singleAddress.push(({ value: data.streets.street, label: data.streets.street } as unknown as GroupBase<string>))
        setAddressOptions([{ options: [{ value: data.streets.street, label: data.streets.street }] }]);
      }
    } else {
      setAddressOptions([{ options: [] }]);
    }
  }, [data]);
  return (
    <Select
      isDisabled={isDisabled}      
      id={id}
      {...field}
      isSearchable={true}
      isClearable={true}
      isLoading={isLoading}
      options={(addressOptions as unknown as GroupBase<string>[])}
      // value={addressFieldVAlue}
      placeholder='Enter an address'
      onInputChange={(value: string, actionMeta: InputActionMeta) => {
        if (actionMeta.action == 'input-change') setAddressQuery(value)
      }}
      onChange={(newValue: SingleValue<string>, actionMeta: ActionMeta<string>) => {
        if (actionMeta.action == 'select-option' && newValue) {
          const [street, city, state, postalCode] = (newValue as unknown as { label: string, value: string }).value.split(', ');
          // console.log(street, city, state, postalCode);
          setValue(setValueFields[0], ({ label: street, value: street } as unknown as string), { shouldValidate: true });
          setValue(setValueFields[1], city, { shouldValidate: true });
          setValue(setValueFields[2], state, { shouldValidate: true });
          setValue(setValueFields[3], postalCode, { shouldValidate: true });
        } else if (actionMeta.action == 'clear') {
          setValue(setValueFields[0], '', { shouldValidate: true });
          setValue(setValueFields[1], '', { shouldValidate: true });
          setValue(setValueFields[2], '', { shouldValidate: true });
          setValue(setValueFields[3], '', { shouldValidate: true });
          setAddressOptions([{ options: [] }]);
        }
      }}
      className={className}
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
  )
}