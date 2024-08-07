import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import About from './Components/About';
import Footer from './Components/Footer';
import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/music">Music</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav> */}
      <main>
        <Outlet />
      </main>
      <About />
      <Footer />
    </div>
  );
}

export default App;
