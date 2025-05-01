import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import JobFilter from '../components/JobFilter';

// Sample job data - in a real app, this would come from an API
const sampleJobs = [
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
  },
  {
    id: 4,
    title: 'Data Analyst',
    companyName: 'AnalyticsPro',
    companyLogo: null,
    location: 'Chicago, IL',
    jobType: 'Part-time',
    salary: '$40 - $50/hour',
    postedDate: '1 day ago',
    description: 'Data analyst needed to extract insights from large datasets and create visualizations.',
    skills: ['SQL', 'Tableau', 'Excel', 'Python']
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    companyName: 'CloudTech',
    companyLogo: null,
    location: 'Austin, TX',
    jobType: 'Full-time',
    salary: '$110,000 - $150,000',
    postedDate: '5 days ago',
    description: 'Looking for a DevOps engineer to streamline development processes and maintain cloud infrastructure.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  }
];

const Jobs = () => {
  const [jobs, setJobs] = useState(sampleJobs);
  const [filteredJobs, setFilteredJobs] = useState(sampleJobs);
  const [loading, setLoading] = useState(false);

  const handleFilter = (filters) => {
    setLoading(true);
    
    // Apply filters (in a real app, this would be done server-side)
    const filtered = jobs.filter(job => {
      // Search filter
      if (filters.search && !job.title.toLowerCase().includes(filters.search.toLowerCase()) && 
          !job.companyName.toLowerCase().includes(filters.search.toLowerCase()) && 
          !job.description.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      
      // Location filter
      if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      
      // Job type filter
      if (filters.jobType && job.jobType !== filters.jobType) {
        return false;
      }
      
      // For demo purposes, we'll skip category, experience, and salary filters as our sample data doesn't have these fields
      
      return true;
    });
    
    // Simulate API delay
    setTimeout(() => {
      setFilteredJobs(filtered);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Your Dream Job</h1>
        <p className="text-gray-600">Browse through thousands of job opportunities</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar with filters */}
        <div className="md:w-1/3 lg:w-1/4">
          <JobFilter onFilter={handleFilter} />
        </div>
        
        {/* Main content with job listings */}
        <div className="md:w-2/3 lg:w-3/4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">{filteredJobs.length} jobs found</p>
                <select 
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="newest"
                >
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                  <option value="relevance">Relevance</option>
                </select>
              </div>
              
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
              
              <div className="flex justify-center mt-8">
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                  Load More Jobs
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">No jobs found</h3>
              <p className="text-gray-600 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs; 