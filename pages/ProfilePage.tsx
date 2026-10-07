import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { User } from '../types';
import { useLocation, Link } from 'react-router-dom';
import { mockJobs } from '../constants';

const ProfilePage: React.FC = () => {
  const { user, updateProfile, uploadResume, appliedJobs } = useAuth();
  const location = useLocation();
  const isNewUser = location.state?.isNewUser;

  const [profile, setProfile] = useState<User | null>(user);
  const [isEditing, setIsEditing] = useState(!!isNewUser);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const userAppliedJobs = mockJobs.filter(job => appliedJobs.includes(job.id));

  useEffect(() => {
    setProfile(user);
  }, [user]);

  if (!profile) {
    return <div>Loading profile...</div>;
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => prev ? { ...prev, [name]: value } : null);
  };
  
  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setProfile(prev => prev ? { ...prev, skills: e.target.value.split(',').map(s => s.trim()) } : null);
  };

  const handleSave = () => {
    if (profile) {
      updateProfile(profile);
    }
    setIsEditing(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadResume(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
        {isNewUser && !isEditing && (
            <div className="bg-indigo-50 border-l-4 border-indigo-500 text-indigo-700 p-4 mb-6 rounded-r-lg" role="alert">
                <p className="font-bold">Welcome!</p>
                <p>Your profile has been saved. You can edit it any time.</p>
            </div>
        )}
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">{isNewUser && isEditing ? "Complete Your Profile" : "Your Profile"}</h1>
            {isEditing ? (
                <button onClick={handleSave} className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    Save Changes
                </button>
            ) : (
                <button onClick={() => setIsEditing(true)} className="bg-slate-200 text-slate-800 font-semibold px-6 py-2 rounded-md hover:bg-slate-300 transition-colors">
                    Edit Profile
                </button>
            )}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" name="name" value={profile.name} onChange={handleInputChange} disabled={!isEditing} className="mt-1 w-full p-2 border rounded-md bg-slate-50 disabled:bg-slate-100" />
            </div>
            <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" value={profile.email} onChange={handleInputChange} disabled={!isEditing} className="mt-1 w-full p-2 border rounded-md bg-slate-50 disabled:bg-slate-100" />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700">Headline</label>
                <input type="text" name="headline" placeholder="e.g., Senior Frontend Developer" value={profile.headline} onChange={handleInputChange} disabled={!isEditing} className="mt-1 w-full p-2 border rounded-md bg-slate-50 disabled:bg-slate-100" />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700">Experience</label>
                <input type="text" name="experience" placeholder="e.g., 5 years" value={profile.experience} onChange={handleInputChange} disabled={!isEditing} className="mt-1 w-full p-2 border rounded-md bg-slate-50 disabled:bg-slate-100" />
            </div>
            <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Skills (comma-separated)</label>
                <input type="text" name="skills" placeholder="e.g., React, TypeScript, Node.js" value={profile.skills.join(', ')} onChange={handleSkillsChange} disabled={!isEditing} className="mt-1 w-full p-2 border rounded-md bg-slate-50 disabled:bg-slate-100" />
            </div>
            <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Resume Summary</label>
                <textarea name="resumeSummary" value={profile.resumeSummary} placeholder="A brief summary of your professional background..." onChange={handleInputChange} disabled={!isEditing} rows={5} className="mt-1 w-full p-2 border rounded-md bg-slate-50 disabled:bg-slate-100" />
            </div>
        </div>
        
        <div className="mt-8 bg-white p-8 rounded-lg shadow-md border border-slate-200">
          <h2 className="text-xl font-bold">Resume Management</h2>
          <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold">Your Resume</h3>
              {profile.resumeFilename ? (
                <div className="flex items-center space-x-3 mt-1">
                  <p className="text-slate-600 text-sm">{profile.resumeFilename}</p>
                   {profile.resumeVerified ? (
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">Verified</span>
                    ) : (
                       <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full animate-pulse">Verifying...</span>
                    )}
                </div>
              ) : (
                <p className="text-slate-600 text-sm">Upload your resume to start applying for jobs.</p>
              )}
            </div>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{display: 'none'}} accept=".pdf,.doc,.docx"/>
            <button onClick={() => fileInputRef.current?.click()} className="bg-slate-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm">
              {profile.resumeFilename ? 'Upload New Resume' : 'Upload Resume'}
            </button>
          </div>
        </div>

        <div className="mt-8 bg-white p-8 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-xl font-bold mb-4">Applied Jobs</h2>
            {userAppliedJobs.length > 0 ? (
                <ul className="space-y-4">
                    {userAppliedJobs.map(job => (
                        <li key={job.id} className="p-4 border rounded-md flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors">
                            <div>
                                <h3 className="font-semibold text-slate-800">{job.title}</h3>
                                <p className="text-sm text-slate-600">{job.company} - {job.location}</p>
                            </div>
                            <Link to={`/job/${job.id}`} className="text-sm bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-full hover:bg-slate-50 transition-colors font-semibold">
                                View Job
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center py-6">
                    <p className="text-slate-600">You haven't applied for any jobs yet.</p>
                    <Link to="/jobs" className="text-indigo-600 hover:underline font-semibold mt-2 inline-block">
                        Browse Jobs
                    </Link>
                </div>
            )}
        </div>
    </div>
  );
};

export default ProfilePage;