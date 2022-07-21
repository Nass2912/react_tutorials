import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

import { Expenses } from './components/expenses.component';
import { Invoices } from './components/invoices.component';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path='/invoices' element={<Invoices/>}/>
    <Route path='/expenses' element={<Expenses/>}/>
  </Routes>
  </BrowserRouter>
);