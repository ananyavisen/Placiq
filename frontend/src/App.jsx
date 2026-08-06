import { useState } from 'react'
import Login from './Components/Login/Login'
import bg from "./assets/bg.png";

function App() {
  return (
    <>
     <div
        className="min-h-screen bg-cover bg-center bg-no-repeat p-5 sm:p-4 lg:p-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
      <Login />
      </div>
    </>
  )
}

export default App
