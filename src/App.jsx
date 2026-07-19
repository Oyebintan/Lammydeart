import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import Mainlayout from "./layouts/MainLayout"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import { MotionConfig } from "framer-motion"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<HomePage/>} />
        <Route path="/project" element={<ProjectsPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Route>
    </>
  )
)

function App() {

  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  )
}

export default App
