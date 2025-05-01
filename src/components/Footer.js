import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JobBoard</h3>
            <p className="text-gray-400">
              Find your dream job or the perfect candidate for your company.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-400 hover:text-white">Browse Jobs</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-white">Create Account</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-white">Sign In</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><Link to="/post-job" className="text-gray-400 hover:text-white">Post a Job</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-white">Create Account</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-white">Sign In</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-semibold">Email:</span> diya2112waryani@gmail.com
              </li>
              <li className="text-gray-400">
                <span className="font-semibold">Phone:</span> +91 9993151377
              </li>
              <li className="text-gray-400">
                <span className="font-semibold">Address:</span> Vellore
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JobBoard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 