import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('jobseeker'); // 'jobseeker' or 'employer'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // This would typically be handled by auth context in a real app
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Set to true to simulate being logged in for testing
  React.useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">JobBoard</Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/jobs" className="text-gray-600 hover:text-blue-600">Find Jobs</Link>
            <Link to="/post-job" className="text-gray-600 hover:text-blue-600">Post a Job</Link>
            
            {isLoggedIn ? (
              <>
                {userType === 'employer' && (
                  <Link to="/post-job" className="text-gray-600 hover:text-blue-600">Post a Job</Link>
                )}
                <button 
                  onClick={handleLogout} 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-blue-600">Log In</Link>
                <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                  Register
                </Link>
              </>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link to="/" className="block py-2 text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/jobs" className="block py-2 text-gray-600 hover:text-blue-600">Find Jobs</Link>
            <Link to="/post-job" className="block py-2 text-gray-600 hover:text-blue-600">Post a Job</Link>
            
            {isLoggedIn ? (
              <>
                {userType === 'employer' && (
                  <Link to="/post-job" className="block py-2 text-gray-600 hover:text-blue-600">Post a Job</Link>
                )}
                <button 
                  onClick={handleLogout} 
                  className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2 text-gray-600 hover:text-blue-600">Log In</Link>
                <Link to="/register" className="block py-2 text-gray-600 hover:text-blue-600">Register</Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 