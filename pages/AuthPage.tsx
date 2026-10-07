import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Navigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const { login, signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginView) {
      // In a real app, you'd validate credentials
      login();
      navigate('/profile');
    } else {
      // In a real app, you'd register the user
      signup(name, email);
      navigate('/profile', { state: { isNewUser: true } });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  const commonInputClasses = "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500";

  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-slate-200">
        <div className="flex border-b border-slate-200 mb-6">
          <button 
            onClick={() => setIsLoginView(true)}
            className={`w-1/2 py-3 text-center font-semibold transition-colors ${isLoginView ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Login
          </button>
          <button 
            onClick={() => setIsLoginView(false)}
            className={`w-1/2 py-3 text-center font-semibold transition-colors ${!isLoginView ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Sign Up
          </button>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-1">
          {isLoginView ? 'Welcome Back!' : 'Create Your Account'}
        </h2>
        <p className="text-center text-slate-500 mb-8">
          {isLoginView ? 'Sign in to continue your job search.' : 'Get started with your free account.'}
        </p>

        <form onSubmit={handleSubmit}>
          {!isLoginView && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <input type="text" required className={commonInputClasses} placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700">Email Address</label>
            <input type="email" required className={commonInputClasses} placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input type="password" required className={commonInputClasses} placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition-colors">
            {isLoginView ? 'Login' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;