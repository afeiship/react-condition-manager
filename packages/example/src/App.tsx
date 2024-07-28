import Rcm from '../../lib/src';
// import '@jswork/react-condition-manager/src/style.scss';
import React, { useState } from 'react';

function App() {
  const [status, setStatus] = useState('init');
  return (
    <div className="m-10 p-4 y-5 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <div className="y-2">
        <h2>React Condition Manager</h2>
        <p>Current Status: {status}</p>
        <nav className="x-2">
          <button className="btn btn-primary btn-sm" onClick={() => setStatus('init')}>set init</button>
          <button className="btn btn-primary btn-sm" onClick={() => setStatus('show')}>set show</button>
          <button className="btn btn-primary btn-sm" onClick={() => setStatus('hide')}>set hide</button>
        </nav>
        <Rcm items={[status === 'init', status === 'show', status === 'hide']}>
          <div className="bg-slate-300">Hello World - init</div>
          <div className="bg-slate-400">Hello World - show</div>
          <div className="bg-slate-500">Hello World - hide</div>
        </Rcm>
      </div>
      <div className="y-2">
        <h2>Only one condition</h2>
        <Rcm items={[status === 'init']}>
          <div className="bg-green-400">Hello World - init</div>
        </Rcm>
      </div>
    </div>
  );
}

export default App;
