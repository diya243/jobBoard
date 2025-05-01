import React from 'react';
import { Link } from 'react-router-dom';

// Sample job data for the home page
const featuredJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    companyName: 'TechCorp',
    companyLogo: null,
    location: 'San Francisco, CA',
    jobType: 'Full-time',
    salary: '$90,000 - $120,000',
    postedDate: '2 days ago',
    description: 'We are looking for a skilled frontend developer with experience in React, CSS, and modern JavaScript frameworks to join our team.',
    skills: ['React', 'JavaScript', 'CSS', 'HTML']
  },
  {
    id: 2,
    title: 'Backend Engineer',
    companyName: 'DataSystems',
    companyLogo: null,
    location: 'New York, NY',
    jobType: 'Full-time',
    salary: '$100,000 - $140,000',
    postedDate: '1 week ago',
    description: 'Backend engineer needed to develop and maintain high-performance APIs and services.',
    skills: ['Node.js', 'Python', 'SQL', 'AWS']
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    companyName: 'DesignHub',
    companyLogo: null,
    location: 'Remote',
    jobType: 'Contract',
    salary: '$75/hour',
    postedDate: '3 days ago',
    description: 'Seeking an experienced UX/UI designer to create intuitive and engaging user experiences for our web and mobile applications.',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'User Research']
  }
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Job Today</h1>
            <p className="text-xl mb-8">
              Connect with top employers and discover job opportunities tailored to your skills and experience.
            </p>
            <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row shadow-lg">
              <input
                type="text"
                placeholder="Job title, keyword, or company"
                className="flex-1 p-3 rounded-md focus:outline-none text-gray-800"
              />
              <input
                type="text"
                placeholder="Location or remote"
                className="flex-1 p-3 rounded-md focus:outline-none text-gray-800 md:mx-2 my-2 md:my-0"
              />
              <Link 
                to="/jobs"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md"
              >
                Search Jobs
              </Link>
            </div>
            <div className="mt-6 text-sm">
              Popular searches: Web Developer, Data Analyst, UX Designer, Product Manager, Remote
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-600">10k+</h3>
              <p className="text-gray-600">Job Listings</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-600">5k+</h3>
              <p className="text-gray-600">Companies</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-600">8M+</h3>
              <p className="text-gray-600">Candidates</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-600">2k+</h3>
              <p className="text-gray-600">Jobs Filled</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Jobs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map(job => (
              <div key={job.id} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold text-xl">
                      {job.companyName.charAt(0)}
                    </div>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {job.salary}
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>
                
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
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/jobs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            >
              Browse All Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Jobs by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Technology', 'Marketing', 'Design', 'Sales', 'Finance', 'Healthcare', 'Education', 'Customer Service'].map((category) => (
              <Link 
                key={category}
                to={`/jobs?category=${category}`}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category}</h3>
                <p className="text-gray-600 text-sm">100+ jobs available</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">For Employers</h2>
              <p className="text-lg text-gray-600 mb-6">
                Find the right talent for your open positions. Post jobs, screen applicants, and make great hires.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Post job openings
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Review applications
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Communicate with candidates
                </li>
              </ul>
              <Link
                to="/post-job"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
              >
                Post a Job
              </Link>
            </div>
            <div className="md:w-2/5">
              <img 
                src={process.env.PUBLIC_URL + '/dashboard.png'} 
                alt="Employer Dashboard Preview" 
                className="rounded-lg h-64 w-full object-cover shadow-md bg-gray-200"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 