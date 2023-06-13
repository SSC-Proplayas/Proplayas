"use client";
import CardsBlog from '../../components/CardsBlog'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react'

const blog = () => {
  return (
    <main>
      <Navbar />
      <div className="overflow-hidden">
      <h1 className="text-center font-bold text-[#00A1FF] text-4xl mt-32 mb-20">
          BLOG
        </h1>
      </div>
      <CardsBlog />
      <Footer />
    </main>
  )
}

export default blog