import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchProducts } from "./productSlice"

import { StyledPagination, StyledPaginationItem } from "./pagination.styled"

export default function Pagination() {
  const dispatch = useDispatch()
  const totalPage = 5
  const [current, setCurrent] = useState(0)

  const pageItem = [...Array(totalPage)].map((e, i) => (
    <StyledPaginationItem
      onClick={() => {
        setCurrent(i)
        dispatch(fetchProducts(i + 1))
      }}
      key={i}
      className={i === current ? "active" : ""}
    >
      {i + 1}
    </StyledPaginationItem>
  ))
  return <StyledPagination>{pageItem}</StyledPagination>
}
