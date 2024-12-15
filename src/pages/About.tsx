import React from 'react';
import { BarChart3, Users, TrendingUp, Shield } from 'lucide-react';

export function About() {
  return (
    <main className="flex-grow p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About TopicPulse</h1>
          <p className="text-xl text-gray-600">
            Tracking the pulse of public opinion on today's most important topics
          </p>
        </header>

        <div className="prose prose-lg mx-auto">
          <p className="text-gray-700 mb-8">
            TopicPulse is a platform designed to gather and visualize public sentiment on various contemporary issues. 
            Our mission is to create a space where people can express their views on important topics while gaining 
            insights into collective opinions through beautiful, interactive visualizations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Community Driven</h3>
              </div>
              <p className="text-gray-600">
                Our platform thrives on community participation, ensuring a diverse range of perspectives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Real-time Insights</h3>
              </div>
              <p className="text-gray-600">
                Watch opinions evolve in real-time with our dynamic visualization system.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Safe & Respectful</h3>
              </div>
              <p className="text-gray-600">
                We maintain a respectful environment for sharing opinions without fear of judgment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Data Transparency</h3>
              </div>
              <p className="text-gray-600">
                All our visualizations are based on real user engagement, ensuring transparency.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-gray-700 mb-4">
              Your voice matters! Join our community and contribute to the ongoing discussions about topics 
              that shape our future. Share your perspective and see how it aligns with others in real-time.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}