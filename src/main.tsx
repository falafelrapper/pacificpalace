import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.tsx"
import "./index.scss"

import Home from "./pages/Home.tsx"
import NotFound from "./pages/NotFound.tsx"
import Bio from "./pages/Bio.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/bio",
        element: <Bio />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
)
