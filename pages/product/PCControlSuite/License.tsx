import React from 'react';
import { FileText, Shield, AlertTriangle } from 'lucide-react';

const License: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-brand-100 dark:bg-brand-900/30 p-3 rounded-lg text-brand-600 dark:text-brand-400">
          <FileText size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">License Agreement</h1>
          <p className="text-slate-500 dark:text-slate-400">Terms of use for PC Control Suite</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 mb-8 transition-colors duration-200">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Numidiaware End User License Agreement (EULA)</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Last Updated: March 2024</p>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <Shield size={20} className="text-brand-500" />
              Summary
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
              <li>PC Control Suite is available in both Free and Premium versions.</li>
              <li>The Free version is for personal, non-commercial use only.</li>
              <li>Commercial use requires a Premium license.</li>
              <li>You may not modify, reverse engineer, or redistribute the software.</li>
              <li>The software is provided "as is" without warranty.</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Grant of License</h3>
          <p>Subject to the terms and conditions of this Agreement, Numidiaware grants you a limited, non-exclusive, non-transferable license to install and use PC Control Suite.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Restrictions</h3>
          <p>You may not:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Modify, translate, reverse engineer, decompile, disassemble, or create derivative works based on the Software.</li>
            <li>Rent, lease, lend, sell, redistribute, or sublicense the Software.</li>
            <li>Remove any proprietary notices or labels on the Software.</li>
            <li>Use the Software for any illegal purpose.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Disclaimer of Warranty</h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400 flex gap-3 my-6">
            <AlertTriangle size={24} className="text-yellow-600 dark:text-yellow-500 flex-shrink-0" />
            <p className="text-sm text-yellow-800 dark:text-yellow-200 m-0">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Limitation of Liability</h3>
          <p>In no event will Numidiaware be liable for any damages, including any lost profits, lost savings, or other incidental or consequential damages arising out of the use or inability to use the Software.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Termination</h3>
          <p>This license is effective until terminated. You may terminate it at any time by destroying the Software and all copies thereof. It will also terminate immediately if you fail to comply with any term or condition of this Agreement.</p>
        </div>
      </div>
    </div>
  );
};

export default License;
