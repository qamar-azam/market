import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  sortProducts,
  fetchProducts,
  Product,
  filterByBrands,
  filterByTags,
} from "../product/productSlice"
import { apiFetchProducts } from "../product/productAPI"
import { RootState } from "../../app/store"

import FilterDropdown from "./FilterDropdown"
import {
  StyledFilter,
  StyledFilterSection,
  StyledFilterForm,
  StyledFilterFormLabel,
  StyledFilterFormRadio,
} from "./filter.styled"
import StyledHeading from "../../theme/StyledHeading"

const sorting = [
  { label: "Price low to high", value: "price,asc" },
  { label: "Price high to low", value: "price,desc" },
  { label: "New to old", value: "added,asc" },
  { label: "Old to new", value: "added,desc" },
]

export interface dropdownOption {
  [name: string]: string
}

export default function Filter() {
  const dispatch = useDispatch()
  const sort = useSelector((state: RootState) => state.product.sort)
  const filter = useSelector((state: RootState) => state.product.filter)

  const [brandOptions, setBrandOptions] = useState<dropdownOption[]>([])
  const [tagOptions, setTagOptions] = useState<dropdownOption[]>([])

  useEffect(() => {
    if (sort || filter.brand || filter.tags) {
      dispatch(fetchProducts(1))
    }
  }, [dispatch, sort, filter])
  useEffect(() => {
    getBrandAndTagList()
  }, [])

  const getBrandAndTagList = async () => {
    const response = await apiFetchProducts({})

    let brands = new Set<string>()
    let tags = new Set<string>()
    response.data.forEach((product: Product) => {
      brands.add(product.manufacturer)
      product.tags.map((t) => tags.add(t))
    })

    let brandOptions = [...brands.values()].map((brand) => {
      return { label: brand.replace(/-/g, " "), value: brand }
    })

    let tagOptions = [...tags.values()].map((tag) => {
      return { label: tag, value: tag }
    })
    setBrandOptions(brandOptions)
    setTagOptions(tagOptions)
  }

  return (
    <StyledFilter>
      <StyledFilterSection>
        <StyledHeading variant='h5' weight='semi' color='#697488'>
          Sort
        </StyledHeading>
        <StyledFilterForm>
          {sorting.map((item, index) => (
            <StyledFilterFormLabel htmlFor={item.label} key={index}>
              <StyledFilterFormRadio
                type='radio'
                name='sorting'
                id={item.label}
                value={item.value}
                onChange={(e) => dispatch(sortProducts(e.target.value))}
              />
              {item.label}
            </StyledFilterFormLabel>
          ))}
        </StyledFilterForm>
      </StyledFilterSection>

      <FilterDropdown
        title={"Brands"}
        data={brandOptions}
        filterCallback={filterByBrands}
      />

      <FilterDropdown
        title={"Tag"}
        data={tagOptions}
        filterCallback={filterByTags}
      />
    </StyledFilter>
  )
}
