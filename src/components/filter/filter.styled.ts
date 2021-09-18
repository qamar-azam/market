import styled from "styled-components"

export const StyledFilter = styled.div`
  flex: 1 1 23%;
  margin-right: 2%;
`

export const StyledFilterSection = styled.div`
  margin-bottom: 24px;
`

export const StyledFilterForm = styled.form`
  background-color: ${({ theme }) => theme.form.background};
  padding: 24px;
`

export const StyledFilterFormLabel = styled.label`
  color: ${({ theme }) => theme.form.label.color};
  display: block;
  font-size: ${({ theme }) => theme.form.label.size};
  margin-bottom: 18px;
  padding-left: 30px;
`

export const StyledFilterFormInput = styled.input`
  border: 1px solid ${({ theme }) => theme.form.input.border};
  background: ${({ theme }) => theme.form.input.background};
  border-radius: 2px;

  width: 100%;
  height: 48px;
  margin-bottom: 17px;
  padding-left: 16px;
`

export const StyledFilterFormRadio = styled.input`
  margin-right: 8px;
  margin-left: -30px;
`

export const StyledFilterFormCheckbox = styled.input`
  margin-right: 8px;
  margin-left: -30px;
`

export const StyledFilterFormOptionList = styled.div`
  height: 140px;
  overflow-y: scroll;
`
