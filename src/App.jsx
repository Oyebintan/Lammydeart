import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import Mainlayout from "./layouts/MainLayout"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"
import { Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import { MotionConfig } from "framer-motion"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path="/project" element={<ProjectsPage />} />
        {/* "/projects" is the more natural guess — send it to the real route
            instead of letting it 404 */}
        <Route path="/projects" element={<Navigate to="/project" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Anything unrecognised used to render an empty layout */}
        <Route path="*" element={<NotFoundPage />} />
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
