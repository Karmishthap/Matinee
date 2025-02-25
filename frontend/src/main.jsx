import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from './App';
import Books from "./Components/Books";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import Music from "./Components/Music";
import Signup from "@loginComponents/Signup";
import Login from "@loginComponents/Login"; // Add this import
import ErrorBoundary from './ErrorBoundary';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Header />} />
      <Route path="movies" element={<Movies />} />
      <Route path="books" element={<Books />} />
      <Route path="music" element={<Music />} />
      <Route path="register" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="header" element={<Header />} /> {/* Add this route */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
