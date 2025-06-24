import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import Mainlayout from "./layouts/MainLayout"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<HomePage/>} />
        <Route path="/project" element={<ProjectsPage/>} />
      </Route>
    </>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
