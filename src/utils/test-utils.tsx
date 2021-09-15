import { render as rtlRender } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../app/store"

function render(ui: any) {
  return rtlRender(<Provider store={store}>{ui}</Provider>)
}

export { render }
