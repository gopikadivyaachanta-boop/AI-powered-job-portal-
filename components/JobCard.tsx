
import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200">
      <div className="flex items-start space-x-4">
        <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 rounded-md object-cover" />
        <div className="flex-1">
          <p className="text-sm text-slate-500">{job.company}</p>
          <h3 className="text-lg font-bold text-slate-800 hover:text-indigo-600 transition-colors">
            <Link to={`/job/${job.id}`}>{job.title}</Link>
          </h3>
          <div className="mt-2 flex flex-wrap gap-2 text-sm text-slate-600">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {job.location}
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2H6z" />
              </svg>
              {job.type}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-slate-400">{job.postedDate}</p>
        <Link to={`/job/${job.id}`} className="text-sm bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-100 transition-colors font-semibold">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
