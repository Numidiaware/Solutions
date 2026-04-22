import React from 'react';
import { Download as DownloadIcon, Monitor, Shield, FileText, Smartphone } from 'lucide-react';

const Download: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Download PC Control Suite</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Get the latest version of PC Control Suite for Windows and Android.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-12 transition-colors duration-200">
        <div className="p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 mb-6">
            <DownloadIcon size={40} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Version 1.0.0</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Released: March 2024 • Size: 15.2 MB</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-brand-500/30 text-lg w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-brand-500/50">
              <Monitor size={24} />
              Download for Windows
            </button>
            <a 
              href="https://play.google.com/store/apps/details?id=com.numidiaware.pccontrolsuite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-slate-900/30 text-lg w-full sm:w-auto border border-slate-700 dark:border-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-500/50"
            >
              <Smartphone size={24} />
              Get it on Google Play
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Shield size={16} className="text-green-500" />
            <span>100% Free & Secure • No Adware • Digitally Signed</span>
          </div>
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
          <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Monitor size={20} className="text-brand-500" />
            System Requirements
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              Windows 10 / 11
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              64-bit (x64) Architecture
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              4 GB RAM Minimum
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              Android 8.0+ for Mobile App
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200">
          <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <FileText size={20} className="text-brand-500" />
            Installation Guide
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
            Need help installing? Check out our step-by-step installation guide in the documentation.
          </p>
          <a href="#/products/pc-control-suite/docs#installation" className="text-brand-600 dark:text-brand-400 text-sm font-semibold hover:underline">
            View Installation Guide →
          </a>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200">
          <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Shield size={20} className="text-brand-500" />
            Security Information
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
            Our software is digitally signed and regularly scanned for malware to ensure your safety.
          </p>
          <a href="#/products/pc-control-suite/docs#troubleshooting" className="text-brand-600 dark:text-brand-400 text-sm font-semibold hover:underline">
            View Troubleshooting →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
