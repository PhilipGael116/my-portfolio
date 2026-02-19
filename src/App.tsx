import { Home, Blogs } from "./pages"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} path="/" />
        <Route element={<Blogs />} path="/blogs" />
      </Routes>
    </div>
  )
}

export default App