import React, { useState, useEffect } from 'react';
import Link from '../../../components/Link';

const Documentation: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'system-requirements', title: '2. System Requirements' },
    { id: 'installation', title: '3. Installation' },
    { id: 'features', title: '4. Features' },
    { id: 'troubleshooting', title: '5. Troubleshooting' },
    { id: 'faq', title: '6. FAQ' },
    { id: 'license-support', title: '7. License & Support' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Table of Contents - Sticky Sidebar */}
      <aside className="lg:w-64 flex-shrink-0">
        <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-4 transition-colors duration-200">
          <h3 className="font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">Table of Contents</h3>
          <nav className="space-y-1">
            {sections.map((section) => (
              <a 
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block text-sm px-2 py-1.5 rounded transition-colors ${
                  activeId === section.id 
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-slate-800 font-medium' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0 prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">PC Control Suite Documentation</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">Complete guide to using PC Control Suite</p>

        {/* 1. Introduction */}
        <section id="introduction" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">1. Introduction</h2>
          <p>Welcome to <strong>PC Control Suite</strong>, a comprehensive solution for managing, automating, and controlling your PC efficiently. This suite provides a centralized dashboard for system administration, performance monitoring, and task automation.</p>
        </section>

        {/* 2. System Requirements */}
        <section id="system-requirements" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">2. System Requirements</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Operating System: Windows 10 or Windows 11</li>
            <li>Architecture: 64-bit (x64)</li>
            <li>RAM: 4 GB minimum (8 GB recommended)</li>
            <li>Disk Space: 500 MB available space</li>
          </ul>
        </section>

        {/* 3. Installation */}
        <section id="installation" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">3. Installation</h2>
          <ol className="list-decimal pl-5 space-y-2 mt-4">
            <li>Download the installer from the <Link href="#/products/pc-control-suite/download" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">Downloads</Link> section.</li>
            <li>Run the downloaded executable file.</li>
            <li>Follow the on-screen instructions to complete the installation.</li>
            <li>Launch PC Control Suite from the Start Menu or desktop shortcut.</li>
          </ol>
        </section>

        {/* 4. Features */}
        <section id="features" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">4. Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>System Monitoring:</strong> Real-time tracking of CPU, RAM, and Disk usage.</li>
            <li><strong>Task Automation:</strong> Schedule repetitive tasks and scripts.</li>
            <li><strong>Remote Control:</strong> Manage your PC remotely via a secure connection.</li>
            <li><strong>Power Management:</strong> Advanced power scheduling and optimization.</li>
          </ul>
        </section>

        {/* 5. Troubleshooting */}
        <section id="troubleshooting" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">5. Troubleshooting</h2>
          <p>If you encounter issues while using PC Control Suite, please check the following:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ensure your system meets the minimum requirements.</li>
            <li>Run the application as an Administrator.</li>
            <li>Check for updates in the settings menu.</li>
          </ul>
        </section>

        {/* 6. FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">6. Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-brand-600">Q: Is PC Control Suite free?</h4>
              <p className="text-sm">A: PC Control Suite offers a free basic version and a premium version with advanced features.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-600">Q: Can I use it on multiple computers?</h4>
              <p className="text-sm">A: Yes, you can install it on multiple computers, but premium features require a valid license per machine.</p>
            </div>
          </div>
        </section>

        {/* 7. License & Support */}
        <section id="license-support" className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">7. License and Support</h2>
          <p>For license details, please refer to the <Link href="#/products/pc-control-suite/license" className="text-brand-600 dark:text-brand-400 font-medium">License Agreement</Link>.</p>
          <p>If you need assistance, visit the <Link href="#/products/pc-control-suite/support" className="text-brand-600 dark:text-brand-400 font-medium">Support</Link> page or contact us at <a href="mailto:support@numidiaware.com" className="text-brand-600 dark:text-brand-400 font-medium">support@numidiaware.com</a>.</p>
        </section>

      </div>
    </div>
  );
};

export default Documentation;
