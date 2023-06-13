
import React from "react";

const CardsBlog = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center ">
        {/** Card */}
        <div className="max-w-sm bg-white border border-gray-200 mb-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src="/assets/placeholder.png" alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
              Titulo
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime veritatis neque iure optio corrupti atque rerum ab provident eveniet consequuntur est ratione vel nobis laboriosam incidunt, minima recusandae sapiente.
            </p>
          </div>
        </div>
        {/** Card */}
        <div className="max-w-sm bg-white border border-gray-200 mb-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src="/assets/placeholder.png" alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
              titulo 
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum pariatur, officia maiores quia at corrupti illo molestias necessitatibus architecto, qui, atque nulla vel odio nobis consequatur. Qui error accusantium cum.
            </p>
          </div>
        </div>
        {/** Card */}
        <div className="max-w-sm bg-white border border-gray-200 mb-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src="/assets/placeholder.png" alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
              Titulo
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, beatae aliquid! Labore, unde corrupti quae ratione perferendis nam vitae tempora recusandae quasi saepe iste voluptates quis natus facere sapiente! Qui?
            </p>
          </div>
        </div>
      </div>  
      {/** Card part 2 */}
      <div class="flex flex-wrap mt-16 mx-10">
        
        <div class="w-full rounded-lg bg-[#00A1FF] mx-4 mb-4 shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex md:flex-row-reverse flex-wrap">
            <div class="w-full md:w-3/4 rounded-lg bg-[#00A1FF] p-4 text-center sm:text-left  text-gray-700">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                  Titulo
                </h5>
                <h5 className="mb-2   text-left tracking-tight text-gray-900 dark:text-white">
                  00/00/00
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, beatae aliquid! Labore, unde corrupti quae ratione perferendis nam vitae tempora recusandae quasi saepe iste voluptates quis natus facere sapiente! Qui?
                </p>
              </div>
              <button className="subpixel-antialiased text-center transition ease-in-out delay-150 bg-slate-200 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 hover:text-slate-200 duration-300 p-2 shadow-2xl  w-36 rounded-lg text-blue-700">
                ver mas
              </button>
            </div>
            <div class="w-full md:w-1/4 rounded-lg bg-[#00A1FF] p-4 text-center text-gray-200">
              <img className="rounded-lg" src="/assets/placeholder.png" alt="" />
            </div>
          </div>
        </div>

        <div class="w-full rounded-lg bg-white mx-4 mb-4 shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex md:flex-row-reverse flex-wrap">
            <div class="w-full md:w-3/4 rounded-lg bg-white p-4 text-center sm:text-left text-gray-700">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                  Titulo
                </h5>
                <h5 className="mb-2   text-left tracking-tight text-gray-900 dark:text-white">
                  00/00/00
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, beatae aliquid! Labore, unde corrupti quae ratione perferendis nam vitae tempora recusandae quasi saepe iste voluptates quis natus facere sapiente! Qui?
                </p>
              </div>
              <button className="subpixel-antialiased text-center transition ease-in-out delay-150 bg-[#00A1FF] hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 hover:text-[#00A1FF] hover:border-blue-600 hover:shadow-lg duration-300 p-2 shadow-2xl  w-36 rounded-lg text-white">
                ver mas
              </button>
            </div>
            <div class="w-full md:w-1/4 rounded-lg bg-white p-4 text-center text-gray-200">
              <img className="rounded-lg" src="/assets/placeholder.png" alt="" />
            </div>
          </div>
        </div>

        <div class="w-full rounded-lg bg-white mx-4 mb-4 shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex md:flex-row-reverse flex-wrap">
            <div class="w-full md:w-3/4 rounded-lg bg-white p-4 text-center sm:text-left text-gray-700">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                  Titulo
                </h5>
                <h5 className="mb-2   text-left tracking-tight text-gray-900 dark:text-white">
                  00/00/00
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, beatae aliquid! Labore, unde corrupti quae ratione perferendis nam vitae tempora recusandae quasi saepe iste voluptates quis natus facere sapiente! Qui?
                </p>
              </div>
              <button className="subpixel-antialiased text-center transition ease-in-out delay-150 bg-[#00A1FF] hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 hover:text-[#00A1FF] hover:border-blue-600 hover:shadow-lg duration-300 p-2 shadow-2xl  w-36 rounded-lg text-white">
                ver mas
              </button>
            </div>
            <div class="w-full md:w-1/4 rounded-lg bg-white p-4 text-center text-gray-200">
              <img className="rounded-lg" src="/assets/placeholder.png" alt="" />
            </div>
          </div>
        </div>

        <div class="w-full rounded-lg bg-white mx-4 mb-12 shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex md:flex-row-reverse flex-wrap">
            <div class="w-full md:w-3/4 rounded-lg bg-white p-4 text-center sm:text-left text-gray-700">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                  Titulo
                </h5>
                <h5 className="mb-2   text-left tracking-tight text-gray-900 dark:text-white">
                  00/00/00
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, beatae aliquid! Labore, unde corrupti quae ratione perferendis nam vitae tempora recusandae quasi saepe iste voluptates quis natus facere sapiente! Qui?
                </p>
              </div>
              <button className="subpixel-antialiased text-center transition ease-in-out delay-150 bg-[#00A1FF] hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 hover:text-[#00A1FF] hover:border-blue-600 hover:shadow-lg duration-300 p-2 shadow-2xl  w-36 rounded-lg text-white">
                ver mas
              </button>
            </div>
            <div class="w-full md:w-1/4 rounded-lg bg-white p-4 text-center text-gray-200">
              <img className="rounded-lg" src="/assets/placeholder.png" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardsBlog;
