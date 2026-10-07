import React, { useState, useMemo } from 'react';
import { mockJobs } from '../constants';
import JobCard from '../components/JobCard';
import { Job } from '../types';

const JobsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState<Job['type'] | 'All'>('All');
  const [isLocating, setIsLocating] = useState(false);

  const handleLocationClick = () => {
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // In a real app, you would use position.coords.latitude and longitude
        // for a search or reverse geocode. For this demo, we'll populate
        // the location field with a sample city.
        setLocation('San Francisco, CA');
        setIsLocating(false);
      },
      (error) => {
        console.error("Error getting location", error);
        alert("Could not get your location. Please check your browser's permissions.");
        setIsLocating(false);
      }
    );
  };

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = job.location.toLowerCase().includes(location.toLowerCase());
      const matchesType = jobType === 'All' || job.type === jobType;
      return matchesSearch && matchesLocation && matchesType;
    });
  }, [searchTerm, location, jobType]);

  const jobTypes: Array<Job['type'] | 'All'> = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-slate-700">Job Title or Company</label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="e.g., React Developer"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="relative">
            <label htmlFor="location" className="block text-sm font-medium text-slate-700">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., San Francisco, CA"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
             <button onClick={handleLocationClick} disabled={isLocating} className="absolute right-2 bottom-2 p-1 text-slate-400 hover:text-indigo-600 disabled:text-slate-300 transition-colors" aria-label="Use my location">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isLocating ? 'animate-spin' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
            </button>
          </div>
          <div>
            <label htmlFor="jobType" className="block text-sm font-medium text-slate-700">Job Type</label>
            <select
              id="jobType"
              value={jobType}
              onChange={(e) => setJobType(e.target.value as Job['type'] | 'All')}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {jobTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold">No Jobs Found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your search filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;