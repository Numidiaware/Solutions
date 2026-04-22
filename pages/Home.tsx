import React from 'react';
import { ArrowRight, Shield, Globe, Zap, Monitor } from 'lucide-react';
import Link from '../components/Link';
import FolderCommentsIcon from '../components/FolderCommentsIcon';
import PCControlSuiteIcon from '../components/PCControlSuiteIcon';

const Home: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white py-20 lg:py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Organize Your Digital Life with <span className="text-brand-500">Intelligent Tools</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Numidiaware builds lightweight, powerful utilities for Windows that enhance your productivity and system organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-brand-500/30"
              >
                View Products
                <ArrowRight size={20} />
              </button>
              <Link 
                href="#/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full backdrop-blur-sm transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Products</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Folder Comments */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800 transition-colors duration-200 flex flex-col">
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 px-3 py-1 rounded-full text-sm font-semibold mb-6 w-fit">
                  Popular Utility
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <FolderCommentsIcon size={32} />
                  Folder Comments
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg flex-grow">
                  A powerful Windows Shell Extension that allows you to add descriptive comments to your folders. View them as tooltips or columns in Explorer.
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Zap className="text-yellow-500 w-5 h-5 shrink-0" /> <span>Native Windows Integration</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Globe className="text-blue-500 w-5 h-5 shrink-0" /> <span>40+ Languages Supported</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Shield className="text-green-500 w-5 h-5 shrink-0" /> <span>Safe & Standard Storage</span>
                  </li>
                </ul>
                <Link 
                  href="#/products/folder-comments/docs" 
                  className="text-brand-600 dark:text-brand-400 font-semibold hover:text-brand-800 dark:hover:text-brand-300 flex items-center justify-center gap-2 group bg-brand-50 dark:bg-slate-800 px-6 py-3 rounded-full hover:bg-brand-100 dark:hover:bg-slate-700 transition-colors mt-auto"
                >
                  Learn more
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* PC Control Suite */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800 transition-colors duration-200 flex flex-col">
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold mb-6 w-fit">
                  New Release
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <PCControlSuiteIcon size={32} />
                  PC Control Suite
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg flex-grow">
                  A comprehensive solution for managing, automating, and controlling your PC efficiently. Centralized dashboard for system administration.
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Monitor className="text-indigo-500 w-5 h-5 shrink-0" /> <span>Real-time System Monitoring</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Zap className="text-yellow-500 w-5 h-5 shrink-0" /> <span>Advanced Task Automation</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Shield className="text-green-500 w-5 h-5 shrink-0" /> <span>Secure Remote Control</span>
                  </li>
                </ul>
                <Link 
                  href="#/products/pc-control-suite/docs" 
                  className="text-brand-600 dark:text-brand-400 font-semibold hover:text-brand-800 dark:hover:text-brand-300 flex items-center justify-center gap-2 group bg-brand-50 dark:bg-slate-800 px-6 py-3 rounded-full hover:bg-brand-100 dark:hover:bg-slate-700 transition-colors mt-auto"
                >
                  Learn more
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;