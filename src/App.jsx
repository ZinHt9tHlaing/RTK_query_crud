import { Route, Routes } from "react-router-dom"

import { CreateUser, EditUser, HeaderPage, UserPage } from "./components"

const App = () => {
  return (
    <div className=" bg-gray-200 h-screen">
      <HeaderPage/>
      <Routes>
        <Route path="/" element={<UserPage/>} />
        <Route path="/create" element={<CreateUser/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>
    </div>
  )
}

export default App