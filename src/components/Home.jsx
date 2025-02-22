import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Python, Linked } from './index';
import '../styles/home.css';

export function Home() {
  return (
    <div className="">
      <h1 className="">Home Page for codes list</h1>
      <h2 className="">There is the list for the topics covered .
      Topics are also covered for Machine Learning & DSA based topics
      </h2>

      <nav className="">
        <div className="">
          <a href="/Home" className="">All Code Lists</a>
          <ul className="">
            <li>
              <Link to="/Python" className="">Python</Link>
            </li>
            <li>
              <Link to="/Linked" className="">Linked List</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="">
        <Routes>
          <Route path="Python" element={<Python />} />
          <Route path="Linked" element={<Linked />} />
        </Routes>
      </div>
    </div>
  );
}
