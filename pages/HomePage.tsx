
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="text-center py-16 md:py-24">
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
        Find Your <span className="text-indigo-600">Dream Job</span>,
        <br />
        Supercharged by AI.
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
        Our platform not only connects you with top companies but also gives you an edge with AI-powered tools to perfect your application.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link 
          to="/jobs" 
          className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
        >
          Browse Jobs
        </Link>
        <Link 
          to="/auth" 
          className="bg-white text-slate-700 font-semibold px-8 py-3 rounded-md hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-300 text-lg"
        >
          Create Profile
        </Link>
      </div>
      <div className="mt-20 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="font-bold text-lg text-indigo-600">Smart Search</h3>
          <p className="mt-2 text-slate-600 text-sm">Easily filter and find jobs that match your skills, experience, and preferences.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="font-bold text-lg text-indigo-600">AI Cover Letters</h3>
          <p className="mt-2 text-slate-600 text-sm">Generate tailored cover letters in seconds, helping you stand out to recruiters.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="font-bold text-lg text-indigo-600">Profile Management</h3>
          <p className="mt-2 text-slate-600 text-sm">Keep your professional profile updated to attract the best opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
