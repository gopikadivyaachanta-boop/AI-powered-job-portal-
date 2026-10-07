
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const activeLinkClass = "text-indigo-500 font-semibold";
  const inactiveLinkClass = "text-slate-600 hover:text-indigo-500 transition-colors";

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-indigo-600">
          JobPortal AI
        </NavLink>
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>Home</NavLink>
          <NavLink to="/jobs" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>Jobs</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <NavLink to="/profile" className="flex items-center space-x-2 group">
                <span className="font-medium group-hover:text-indigo-500 transition-colors">{user?.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500 group-hover:text-indigo-500 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </NavLink>
              <button onClick={handleLogout} className="text-sm bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md">
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/auth" className="text-sm bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md">
              Login / Sign Up
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
