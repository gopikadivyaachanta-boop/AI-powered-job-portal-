import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User } from '../types';
import { mockUser } from '../constants';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  appliedJobs: string[];
  login: () => void;
  logout: () => void;
  signup: (name: string, email: string) => void;
  applyForJob: (jobId: string) => void;
  uploadResume: (file: File) => void;
  updateProfile: (updatedUser: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const item = window.localStorage.getItem('job-portal-user');
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error reading user from localStorage", error);
      return null;
    }
  });
  
  const [appliedJobs, setAppliedJobs] = useState<string[]>(() => {
    try {
      const item = window.localStorage.getItem('job-portal-applied-jobs');
      return item ? JSON.parse(item) : [];
    } catch (error) {
        console.error("Error reading applied jobs from localStorage", error);
        return [];
    }
  });

  useEffect(() => {
    try {
      if (user) {
        window.localStorage.setItem('job-portal-user', JSON.stringify(user));
      } else {
        window.localStorage.removeItem('job-portal-user');
      }
    } catch (error) {
      console.error("Error saving user to localStorage", error);
    }
  }, [user]);

  useEffect(() => {
    try {
        window.localStorage.setItem('job-portal-applied-jobs', JSON.stringify(appliedJobs));
    } catch (error) {
        console.error("Error saving applied jobs to localStorage", error);
    }
  }, [appliedJobs]);


  const login = () => {
    setUser(mockUser);
    // In a real app, applied jobs would come from the backend.
    setAppliedJobs(['job-004']); 
  };

  const logout = () => {
    setUser(null);
    setAppliedJobs([]);
    // Also clear from localStorage explicitly
    try {
        window.localStorage.removeItem('job-portal-user');
        window.localStorage.removeItem('job-portal-applied-jobs');
    } catch (error) {
        console.error("Error clearing localStorage", error);
    }
  };

  const signup = (name: string, email: string) => {
    const newUser: User = {
        id: `user-${Date.now()}`,
        name: name,
        email: email,
        headline: '',
        skills: [],
        experience: '',
        resumeSummary: '',
        resumeFilename: null,
        resumeVerified: false,
    };
    setUser(newUser);
    setAppliedJobs([]);
  }

  const applyForJob = (jobId: string) => {
    setAppliedJobs(prev => [...new Set([...prev, jobId])]);
  };

  const uploadResume = (file: File) => {
    if(!user) return;
    setUser(prev => prev ? { ...prev, resumeFilename: 'Verifying...', resumeVerified: false } : null);
    setTimeout(() => {
        setUser(prev => prev ? { ...prev, resumeFilename: file.name, resumeVerified: true } : null);
    }, 2000);
  };
  
  const updateProfile = (updatedUser: User) => {
      setUser(updatedUser);
  }

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, signup, appliedJobs, applyForJob, uploadResume, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
