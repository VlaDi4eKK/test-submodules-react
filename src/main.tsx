import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import App from "./App"
import "./index.css"
import Module1 from "./modules/module_1_old/page"
import Module2 from "./modules/module_2_old/page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/module_1_old",
    element: <Module1 />,
  },
  {
    path: "/module_2_old",
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
