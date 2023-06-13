"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import CardsHomeWeb from "../../components/CardsHomeWeb";
import Footer from "../../components/Footer";

const page = () => {
  return (
    <main>
      <Navbar />
      <div className="relative overflow-hidden bg-cover bg-no-repeat bg-center h-[350px] md:h-[100px]"></div>
      <div>
        <h1 className="text-center font-bold text-[#00A1FF] text-4xl mb-12">
          WEBINARS
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-24 gap-8 mb-48">
          <div className="order-2 lg:order-1 mt-16 px-2 lg:px-10">
            <p className="font-normal text-xl text-justify text-gray-700 dark:text-gray-400 lg:mt-10">
              lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus sed rhoncus arcu. Nunc sed tincidunt enim. Fusce lacinia
              lorem ac elit sollicitudin gravida. Quisque sodales tincidunt
              gravida. Integer dapibus erat risus, vitae rutrum ligula
              ullamcorper gravida. lorem Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vivamus sed rhoncus arcu. Nunc sed tincidunt
              enim. Fusce lacinia lorem ac elit sollicitudin gravida. Quisque
              sodales tincidunt gravida. Integer dapibus erat risus, vitae
              rutrum ligula ullamcorper gravida. lorem Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vivamus sed rhoncus arcu. Nunc
              sed tincidunt enim. Fusce lacinia lorem ac
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image src="/assets/Webinar2.jpg" alr="" width="800" height="200" />
          </div>
        </div>
        <CardsHomeWeb />
      </div>
      <Footer />
    </main>
  );
};

export default page;
