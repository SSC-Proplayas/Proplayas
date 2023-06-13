"use client"
import React from "react";
import Link from "next/link";

const CardsHomeWeb = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
      {/** Card */}
      <div className="max-w-md bg-[#00A1FF] rounded-lg mb-20 mx-auto">
        <img
          className="rounded-lg w-96 h-auto m-5 mx-auto flex justify-center items-center"
          src="/assets/placeholder.png"
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
            Título
          </h5>
          <p className="mb-3 font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex justify-center text-lg font-bold text-[#00A1FF] text-4xl mt-20 mb-20 bg-white px-4 py-2 rounded-lg"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>

      {/** Card */}
      <div className="max-w-md bg-[#00A1FF] rounded-lg mb-20 mx-auto">
        <img
          className="rounded-lg w-96 h-auto m-5 mx-auto flex justify-center items-center"
          src="/assets/placeholder.png"
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
            Título
          </h5>
          <p className="mb-3 font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex justify-center text-lg font-bold text-[#00A1FF] text-4xl mt-20 mb-20 bg-white px-4 py-2 rounded-lg"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>

      {/** Card */}
      <div className="max-w-md bg-[#00A1FF] rounded-lg mb-20 mx-auto">
        <img
          className="rounded-lg w-96 h-auto m-5 mx-auto flex justify-center items-center"
          src="/assets/placeholder.png"
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
            Título
          </h5>
          <p className="mb-3 font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex justify-center text-lg font-bold text-[#00A1FF] text-4xl mt-20 mb-20 bg-white px-4 py-2 rounded-lg"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>

      {/** Card */}
      <div className="max-w-md bg-[#00A1FF] rounded-lg mb-20 mx-auto">
        <img
          className="rounded-lg w-96 h-auto m-5 mx-auto flex justify-center items-center"
          src="/assets/placeholder.png"
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
            Título
          </h5>
          <p className="mb-3 font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex justify-center text-lg font-bold text-[#00A1FF] text-4xl mt-20 mb-20 bg-white px-4 py-2 rounded-lg"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsHomeWeb;
