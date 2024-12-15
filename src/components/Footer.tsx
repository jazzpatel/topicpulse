import React from 'react';
import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="#github" 
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#twitter" 
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} TopicPulse. All rights reserved.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}