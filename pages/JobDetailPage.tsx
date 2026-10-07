import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockJobs } from '../constants';
import { Job } from '../types';
import { useAuth } from '../context/AuthContext';
import { generateCoverLetter } from '../services/geminiService';
import Modal from '../components/Modal';

const JobDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated, user, appliedJobs, applyForJob } = useAuth();
  const [job, setJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState<'idle' | 'submitted'>('idle');

  const hasApplied = appliedJobs.includes(id || '');

  useEffect(() => {
    const foundJob = mockJobs.find(j => j.id === id);
    setJob(foundJob || null);
  }, [id]);
  
  const handleGenerateCoverLetter = async () => {
    if (!job || !user) return;
    setIsLoading(true);
    setCoverLetter('');
    const letter = await generateCoverLetter(job, user);
    setCoverLetter(letter);
    setIsLoading(false);
  };
  
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(coverLetter);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  const handleSubmitApplication = () => {
    if (!id) return;
    applyForJob(id);
    setApplicationStatus('submitted');
  };

  const closeModal = () => {
      setIsModalOpen(false);
      // Reset state after modal closes
      setTimeout(() => {
          setApplicationStatus('idle');
          setCoverLetter('');
      }, 300);
  }

  if (!job) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Job not found</h2>
        <Link to="/jobs" className="text-indigo-600 hover:underline mt-4 inline-block">Back to jobs</Link>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200">
        <div className="flex flex-col md:flex-row items-start md:space-x-6">
          <img src={job.logo} alt={`${job.company} logo`} className="w-20 h-20 rounded-lg object-cover mb-4 md:mb-0" />
          <div>
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <p className="text-xl text-slate-600">{job.company}</p>
            <p className="text-md text-slate-500 mt-1">{job.location} • {job.type}</p>
          </div>
        </div>
        <div className="mt-6">
            <button onClick={() => setIsModalOpen(true)} className="w-full md:w-auto bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md disabled:bg-indigo-300 disabled:cursor-not-allowed" disabled={!isAuthenticated || hasApplied}>
                {hasApplied ? 'Applied' : (isAuthenticated ? 'Apply Now' : 'Login to Apply')}
            </button>
            {!isAuthenticated && <p className="text-sm text-slate-500 mt-2">You must be logged in to apply.</p>}
        </div>
        <div className="mt-8 prose max-w-none prose-slate">
          <h2 className="font-bold text-xl">Job Description</h2>
          <p>{job.description}</p>
          
          <h3 className="font-semibold">Responsibilities</h3>
          <ul>
            {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          
          <h3 className="font-semibold">Qualifications</h3>
          <ul>
            {job.qualifications.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={applicationStatus === 'submitted' ? 'Application Sent!' : `Apply to ${job.company}`}>
          {applicationStatus === 'submitted' ? (
              <div className="text-center p-4">
                 <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-xl font-bold">Successfully Applied!</h3>
                <p className="mt-2 text-slate-600">
                    Your application for the <strong>{job.title}</strong> position at <strong>{job.company}</strong> has been submitted.
                    <br /><br />
                    A confirmation email has been sent to <strong>{user?.email}</strong>. 
                    You can contact the hiring team at <a href={`mailto:${job.hiringManagerEmail}`} className="text-indigo-600 font-semibold hover:underline">{job.hiringManagerEmail}</a>.
                </p>
                <button onClick={closeModal} className="mt-6 w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-all duration-300">
                    Close
                </button>
              </div>
          ) : (
            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-lg mb-2">Application Checklist</h3>
                    <div className="p-4 rounded-md bg-slate-50 border border-slate-200 space-y-3">
                        {user?.resumeFilename ? (
                            <div className="flex items-center justify-between">
                                <p className="text-slate-700">
                                    <span className="font-semibold">Your Resume:</span> {user.resumeFilename}
                                </p>
                                {user.resumeVerified ? (
                                    <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">Verified</span>
                                ) : (
                                <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Verifying...</span>
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-2">
                                <p className="text-slate-600">Please upload a resume on your profile page to apply.</p>
                                <Link to="/profile" onClick={closeModal} className="text-indigo-600 hover:underline font-semibold mt-1 inline-block">Go to Profile</Link>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2">AI Cover Letter Assistant</h3>
                    <p className="mb-4 text-slate-600 text-sm">Generate a personalized cover letter for this role. Review and edit it before submitting your application.</p>
                    <button onClick={handleGenerateCoverLetter} disabled={isLoading || !user?.resumeVerified} className="w-full flex justify-center items-center bg-slate-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-slate-900 transition-all duration-300 shadow-sm hover:shadow-md disabled:bg-slate-400 disabled:cursor-not-allowed">
                        {isLoading ? 'Generating...' : '✨ Generate with AI'}
                    </button>
                </div>
                
                {isLoading && (
                    <div className="text-center p-4 rounded-md bg-slate-50">
                        <p className="text-slate-600 animate-pulse">Our AI is crafting your letter...</p>
                    </div>
                )}

                {coverLetter && (
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold">Your Generated Cover Letter:</h4>
                            <button onClick={handleCopyToClipboard} className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-md hover:bg-slate-200 transition-colors">
                                {isCopied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <textarea 
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            className="w-full h-48 p-3 border rounded-md bg-slate-50 text-slate-700 whitespace-pre-wrap"
                        />
                    </div>
                )}

                <div className="border-t pt-4">
                    <button onClick={handleSubmitApplication} disabled={!user?.resumeVerified} className="w-full bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition-all duration-300 shadow-sm hover:shadow-md disabled:bg-green-300 disabled:cursor-not-allowed">
                        Submit Application
                    </button>
                    {!user?.resumeVerified && <p className="text-xs text-center mt-2 text-red-600">You must have a verified resume to submit an application.</p>}
                </div>
            </div>
        )}
      </Modal>
    </>
  );
};

export default JobDetailPage;