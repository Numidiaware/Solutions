import React from 'react';
import { LifeBuoy, Mail, BookOpen, MessageCircle } from 'lucide-react';
import Link from '../../../components/Link';

const Support: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-brand-100 dark:bg-brand-900/30 p-3 rounded-lg text-brand-600 dark:text-brand-400">
          <LifeBuoy size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Support & Help</h1>
          <p className="text-slate-500 dark:text-slate-400">Get assistance with PC Control Suite</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 transition-colors duration-200">
          <div className="flex items-center gap-3 mb-4 text-brand-600 dark:text-brand-400">
            <BookOpen size={24} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Documentation</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Our comprehensive documentation covers everything from installation to advanced features.
          </p>
          <Link href="#/products/pc-control-suite/docs" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">
            Read the Docs →
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 transition-colors duration-200">
          <div className="flex items-center gap-3 mb-4 text-brand-600 dark:text-brand-400">
            <MessageCircle size={24} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">FAQ</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Find quick answers to the most common questions about PC Control Suite.
          </p>
          <Link href="#/products/pc-control-suite/docs#faq" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">
            View FAQ →
          </Link>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 text-center transition-colors duration-200">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 mb-4">
          <Mail size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Contact Support</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
          Can't find what you're looking for? Our support team is here to help. Send us an email and we'll get back to you as soon as possible.
        </p>
        <a 
          href="mailto:support@numidiaware.com" 
          className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-brand-500/30"
        >
          Email Support
        </a>
      </div>
    </div>
  );
};

export default Support;
