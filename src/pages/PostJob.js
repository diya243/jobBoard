import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    jobType: 'Full-time',
    category: '',
    minSalary: '',
    maxSalary: '',
    description: '',
    responsibilities: '',
    requirements: '',
    benefits: '',
    applicationDeadline: '',
    showSalary: true,
    allowRemote: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job posting form submitted:', formData);
    // In a real app, this would call an API to create a job posting
    setFormSubmitted(true);
  };
  
  if (formSubmitted) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Posted Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Your job posting for {formData.title} has been submitted and will be published after review.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
              Go to Dashboard
            </Link>
            <button 
              onClick={() => setFormSubmitted(false)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md"
            >
              Post Another Job
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Post a New Job</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Job Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="title">
                      Job Title <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. Senior Frontend Developer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="company">
                      Company Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="location">
                      Location <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. New York, NY or Remote"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="jobType">
                      Job Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="jobType"
                      name="jobType"
                      required
                      value={formData.jobType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="category">
                      Category <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a category</option>
                      <option value="Technology">Technology</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Design">Design</option>
                      <option value="Sales">Sales</option>
                      <option value="Customer Service">Customer Service</option>
                      <option value="Finance">Finance</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input
                        id="allowRemote"
                        name="allowRemote"
                        type="checkbox"
                        checked={formData.allowRemote}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="allowRemote" className="ml-2 block text-sm text-gray-700">
                        Remote Work Available
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Salary Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Salary Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="minSalary">
                      Minimum Salary
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        id="minSalary"
                        name="minSalary"
                        type="number"
                        value={formData.minSalary}
                        onChange={handleChange}
                        className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="maxSalary">
                      Maximum Salary
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        id="maxSalary"
                        name="maxSalary"
                        type="number"
                        value={formData.maxSalary}
                        onChange={handleChange}
                        className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="showSalary"
                      name="showSalary"
                      type="checkbox"
                      checked={formData.showSalary}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="showSalary" className="ml-2 block text-sm text-gray-700">
                      Display salary on job listing
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Job Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Job Description</h3>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="description">
                    Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Provide a brief overview of the job role"
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="responsibilities">
                    Responsibilities <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="responsibilities"
                    name="responsibilities"
                    rows="4"
                    required
                    value={formData.responsibilities}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="List the key responsibilities for this role (one per line)"
                  ></textarea>
                  <p className="mt-1 text-xs text-gray-500">Enter each responsibility on a new line</p>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="requirements">
                    Requirements <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows="4"
                    required
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="List the key requirements for this role (one per line)"
                  ></textarea>
                  <p className="mt-1 text-xs text-gray-500">Enter each requirement on a new line</p>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="benefits">
                    Benefits
                  </label>
                  <textarea
                    id="benefits"
                    name="benefits"
                    rows="4"
                    value={formData.benefits}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="List the benefits for this role (one per line)"
                  ></textarea>
                  <p className="mt-1 text-xs text-gray-500">Enter each benefit on a new line</p>
                </div>
              </div>
              
              {/* Application Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Details</h3>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="applicationDeadline">
                    Application Deadline
                  </label>
                  <input
                    id="applicationDeadline"
                    name="applicationDeadline"
                    type="date"
                    value={formData.applicationDeadline}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="flex justify-between border-t border-gray-200 pt-6">
                <Link
                  to="/dashboard"
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Post Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
