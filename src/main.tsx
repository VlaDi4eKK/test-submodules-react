import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import App from "./App"
import "./index.css"
import Module1 from "./modules/module_1/page"
import Module2 from "./modules/module_2/page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/module_1",
    element: <Module1 />,
  },
  {
    path: "/module_2",
    element: <Module2 />,
  },
])

const rootElement: Element | null = document.getElementById("root")

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}
