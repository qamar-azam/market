import Header from "./components/header/Header"
import ProductList from "./components/product/List"
import Basket from "./components/basket/Basket"
import Filter from "./components/filter/Filter"
import Footer from "./components/footer/Footer"
import { StyledContainer } from "./theme/StyledContainer"
import { GlobalStyle } from "./theme/StyledGlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledContainer>
        <Filter />
        <ProductList />
        <Basket />
      </StyledContainer>
      <Footer />
    </>
  )
}

export default App
