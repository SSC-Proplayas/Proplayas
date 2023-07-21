"use client"
import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';

export default function Layout({ children }) {
  return (
    <div className='md:grid md:grid-cols-[120px_minmax(120px,_1fr)]'>
      <div>
      <Sidebar/>
      </div>
      <div>
      {children}
      </div>
    </div>
    
  );
}
