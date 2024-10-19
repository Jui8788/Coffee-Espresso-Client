import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>
      fetch(
        "https://coffee-store-espresso-emporium-gocdd8z9s.vercel.app/coffee"
      ),
  },

  {
    path: "addCoffee",
    element: <AddCoffee />,
  },

  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-espresso-emporium-gocdd8z9s.vercel.app/coffee/${params.id}`
      ),
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/signin",
    element: <SignIn />,
  },

  {
    path: "/users",
    element: <Users />,
    loader: () =>
      fetch(
        "https://coffee-store-espresso-emporium-gocdd8z9s.vercel.app/users"
      ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
