import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BrowserProvider from './Provider/BrowserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserProvider>
       <App />
    </BrowserProvider>
   
);

