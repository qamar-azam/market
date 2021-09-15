import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { dropdownOption } from "./Filter"

import {
  StyledFilterSection,
  StyledFilterForm,
  StyledFilterFormLabel,
  StyledFilterFormInput,
  StyledFilterFormOptionList,
  StyledFilterFormCheckbox,
} from "./filter.styled"
import StyledHeading from "../../theme/StyledHeading"

export interface FilterDropdownProps {
  title: string
  data: { [name: string]: string }[]
  filterCallback: (arg: string | []) => void
}

export default function FilterDropdown({
  title,
  data,
  filterCallback,
}: FilterDropdownProps) {
  const dispatch = useDispatch()
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [formFields, setFormFields] = useState<dropdownOption[]>([])

  useEffect(() => {
    setFormFields(data)
  }, [data])

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const value = target.value

    let selectedValues = selectedItems.includes(value)
      ? selectedItems.filter((e) => e !== value)
      : [...selectedItems, value]

    setSelectedItems(selectedValues)

    dispatch(
      filterCallback(selectedValues.length ? selectedValues.toString() : [])
    )
  }

  const onSearch = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement
    const keyword = target.value

    if (keyword !== "") {
      const results = data.filter((item) => {
        return item.label.toLowerCase().startsWith(keyword.toLowerCase())
      })
      setFormFields(results)
    } else {
      setFormFields(data)
    }
  }

  return (
    <StyledFilterSection>
      <StyledHeading variant='h5' weight='semi' color='#697488'>
        {title}
      </StyledHeading>

      <StyledFilterForm>
        <StyledFilterFormInput
          type='text'
          placeholder='Search Brands'
          onChange={onSearch}
        />
        <StyledFilterFormOptionList>
          {formFields.map((item, index) => (
            <StyledFilterFormLabel htmlFor={item.label} key={index}>
              <StyledFilterFormCheckbox
                type='checkbox'
                id={item.label}
                value={item.value}
                checked={selectedItems.includes(item.value)}
                onChange={handleChange}
              />
              {item.label}
            </StyledFilterFormLabel>
          ))}
        </StyledFilterFormOptionList>
      </StyledFilterForm>
    </StyledFilterSection>
  )
}
