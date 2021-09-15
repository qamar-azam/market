import styled from "styled-components"

export const StyledPagination = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

export const StyledPaginationItem = styled.div`
  border-radius: 2px;
  cursor: pointer;
  color: #697488;
  display: inline-block;
  font-size: 14px;
  padding-top: 10px;
  width: 32px;
  height: 40px;

  &.active {
    background-color: #1ea4ce;
    color: #fff;
  }
`
