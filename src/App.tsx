import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

import Button from "./components/shared/button"

import "./App.css"

function App() {
  const navigate = useNavigate()

  const handleOpenFirstModulePage = useCallback(() => {
    navigate("/module_1")
  }, [navigate])

  const handleOpenSecondModulePage = useCallback(() => {
    navigate("/module_2")
  }, [navigate])

  return (
    <div className="flex h-screen flex-col">
      <div className="m-auto">
        <h1 className="text-red mx-auto text-3xl font-bold underline">Menu</h1>
        <Button onClick={handleOpenFirstModulePage} className="mx-auto mt-4">
          Go to module 1
        </Button>
        <Button onClick={handleOpenSecondModulePage} className="mx-auto mt-4">
          Go to module 2
        </Button>
      </div>
    </div>
  )
}

export default App
