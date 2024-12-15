import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">TopicPulse</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Topics
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Share Topic
          </button>
        </div>
      </nav>
    </header>
  );
}