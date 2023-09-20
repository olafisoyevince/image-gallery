import "./App.css";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
