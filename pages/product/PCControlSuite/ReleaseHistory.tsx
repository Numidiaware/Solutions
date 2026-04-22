import React from 'react';
import { History, FileText, Bug, Zap, PlusCircle } from 'lucide-react';

const ReleaseHistory: React.FC = () => {
  const releases = [
    {
      version: '1.0.0',
      date: 'March 15, 2024',
      type: 'major',
      changes: [
        { type: 'feature', text: 'Initial release of PC Control Suite.' },
        { type: 'feature', text: 'Added System Monitoring dashboard.' },
        { type: 'feature', text: 'Implemented Task Automation engine.' },
        { type: 'feature', text: 'Added Remote Control capabilities.' },
        { type: 'feature', text: 'Integrated Power Management tools.' },
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'feature': return <PlusCircle size={16} className="text-green-500" />;
      case 'bug': return <Bug size={16} className="text-red-500" />;
      case 'improvement': return <Zap size={16} className="text-blue-500" />;
      default: return <FileText size={16} className="text-slate-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-brand-100 dark:bg-brand-900/30 p-3 rounded-lg text-brand-600 dark:text-brand-400">
          <History size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Release History</h1>
          <p className="text-slate-500 dark:text-slate-400">Track the evolution of PC Control Suite</p>
        </div>
      </div>

      <div className="space-y-8">
        {releases.map((release, index) => (
          <div key={index} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-200">
            <div className={`px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center ${
              release.type === 'major' ? 'bg-brand-50 dark:bg-slate-800/50' : 'bg-slate-50 dark:bg-slate-800/30'
            }`}>
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-slate-900 dark:text-white">v{release.version}</span>
                {release.type === 'major' && (
                  <span className="bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    Major Release
                  </span>
                )}
              </div>
              <span className="text-slate-500 dark:text-slate-400 font-medium">{release.date}</span>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {release.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      {getIcon(change.type)}
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{change.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReleaseHistory;
