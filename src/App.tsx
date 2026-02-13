import { Home } from "./pages"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} path="/" />
      </Routes>
    </div>
  )
}

export default App