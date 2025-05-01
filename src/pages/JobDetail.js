import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample job data for demo
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
    responsibilities: [
      'Build stable and maintainable codebase using React',
      'Implement responsive designs that work across all devices',
      'Optimize components for maximum performance',
      'Collaborate with backend developers and designers'
    ],
    requirements: [
      '3+ years of experience with React and modern JavaScript',
      'Strong proficiency in HTML, CSS, and responsive design',
      'Experience with RESTful APIs and GraphQL',
      'Knowledge of Git version control'
    ],
    benefits: [
      'Competitive salary',
      'Health, dental, and vision insurance',
      'Flexible work schedule',
      '401(k) matching',
      'Professional development budget'
    ],
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
    responsibilities: [
      'Design and develop scalable backend services',
      'Build efficient database schemas',
      'Implement security and data protection measures',
      'Optimize application performance'
    ],
    requirements: [
      '4+ years of backend development experience',
      'Proficiency in Python, Node.js, or similar languages',
      'Experience with database design (SQL and NoSQL)',
      'Understanding of cloud services (AWS, Google Cloud)'
    ],
    benefits: [
      'Competitive salary',
      'Remote work options',
      'Health insurance',
      'Stock options',
      'Unlimited PTO'
    ],
    skills: ['Node.js', 'Python', 'SQL', 'AWS']
  }
];

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real app, this would be an API call
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      try {
        const jobId = parseInt(id);
        const foundJob = sampleJobs.find(j => j.id === jobId);
        
        if (foundJob) {
          setJob(foundJob);
          setError(null);
        } else {
          setError('Job not found');
        }
      } catch (err) {
        setError('Error loading job details');
      } finally {
        setLoading(false);
      }
    }, 700);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="bg-red-50 p-6 rounded-lg text-center">
        <h2 className="text-xl font-semibold text-red-700 mb-2">Error</h2>
        <p className="text-red-600">{error || 'Job not found'}</p>
        <Link to="/jobs" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        {/* Job Header */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mr-4">
                {job.companyName.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
                <p className="text-gray-600">{job.companyName} • {job.location}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className={`px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                job.jobType === 'Full-time' ? 'bg-blue-100 text-blue-800' :
                job.jobType === 'Part-time' ? 'bg-green-100 text-green-800' :
                job.jobType === 'Contract' ? 'bg-yellow-100 text-yellow-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {job.jobType}
              </span>
              <span className="text-gray-600 text-sm">Posted {job.postedDate}</span>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <span className="text-gray-700 font-semibold">Salary: </span>
              <span className="text-gray-800">{job.salary}</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              Apply Now
            </button>
          </div>
        </div>
        
        {/* Job Description */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Job Description</h2>
          <p className="text-gray-700 mb-6">{job.description}</p>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Responsibilities</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {job.responsibilities.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {job.requirements.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Benefits</h3>
          <ul className="list-disc list-inside text-gray-700">
            {job.benefits.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Skills and Apply */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {job.skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-100 px-3 py-1 rounded-full text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How to Apply</h2>
            <p className="text-gray-700 mb-4">
              Submit your application now to be considered for this position.
            </p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-center font-medium">
              Apply for this position
            </button>
          </div>
        </div>
        
        {/* Back to jobs */}
        <div className="mt-6">
          <Link to="/jobs" className="text-blue-600 hover:underline flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to all jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
