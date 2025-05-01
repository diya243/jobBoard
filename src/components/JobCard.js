import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-4">
          {job.companyLogo ? (
            <img 
              src={job.companyLogo} 
              alt={job.companyName} 
              className="h-12 w-12 object-contain"
            />
          ) : (
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold text-xl">
              {job.companyName.charAt(0)}
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
            <p className="text-gray-600">{job.companyName}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          job.jobType === 'Full-time' ? 'bg-blue-100 text-blue-800' :
          job.jobType === 'Part-time' ? 'bg-green-100 text-green-800' :
          job.jobType === 'Contract' ? 'bg-yellow-100 text-yellow-800' :
          'bg-purple-100 text-purple-800'
        }`}>
          {job.jobType}
        </span>
      </div>
      
      <div className="mt-4 flex items-center text-gray-500 text-sm space-x-4">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          {job.location}
        </div>
        
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          {job.postedDate}
        </div>
        
        {job.salary && (
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {job.salary}
          </div>
        )}
      </div>
      
      <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills && job.skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <Link 
          to={`/jobs/${job.id}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          View Details
        </Link>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard; 