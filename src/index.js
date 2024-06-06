import React from 'react';
import './index.scss';
import App from './App';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App tab="home" />);
