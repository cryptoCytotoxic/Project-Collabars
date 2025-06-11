import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { MdLocationPin } from "react-icons/md";
import { IoMdBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import Hero from './Components/Hero';

function App() {
  return (
    <>
      <header className="bg-blue-900 top-header">
        <div className="flex justify-between mx-auto items-center w-[80%] xl:max-w-[1200px] h-[60px]">
          <div className="flex gap-[50px]">
            <div className="logo">
              <h2 className="text-white flex text-[22px] font-bold items-center">
                <MdLocationPin className="text-blue-400 text-3xl" />
                <span>Konato</span>
              </h2>
            </div>
            <nav>
              <ul className="flex gap-[40px]">
                <li>
                  <a href="" className="link-style">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="link-style">
                    Property
                  </a>
                </li>
                <li>
                  <a href="" className="link-style">
                    About
                  </a>
                </li>
                <li className="relative dropdown">
                  <a href="" className="link-style">
                    Blog
                  </a>
                  <ul className="absolute dropdown-menu top-[100px] bg-white-400 opacity-0 w-[150px] h-auto p-5 shadow-lg">
                    <li className="leading-[25px]">
                      <a href="">Blog</a>
                    </li>
                    <li className="leading-[25px]">
                      <a href="">Blog Details</a>
                    </li>
                    <li className="leading-[25px]">
                      <a href="">Elements</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="" className="link-style">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex gap-[40px] items-center">
            <div>
              <p className="text-white text-[18px]">
                Call Us:{" "}
                <span className=" border-b pb-1.5 border-dotted">
                  +10 (78) 356 3276
                </span>
              </p>
            </div>
            <div>
              <button className="text-white cursor-pointer bg-blue-400 rounded-[5px] py-2 px-5">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </header>

      <header>
        <div className="flex w-[80%] mx-auto justify-center xl:max-w-[1200px] items-center gap-[12px] my-[12px] ">
          <input
            type="text"
            placeholder="Enter Keyword..."
            className="border-1 border-gray-300 rounded-[4px] px-9 pr-[300px] py-3"
          />
          <select
            name="Rent"
            id=""
            className="border-1 border-gray-300 rounded-[4px] px-6 py-3"
          >
            <option value="rent">Rent</option>
            <option value="rent">Rent 1</option>
            <option value="rent">Rent 2</option>
            <option value="rent">Rent 3</option>
            <option value="rent">Rent 4</option>
          </select>
          <div className="relative ">
            <IoMdBed className="absolute top-3.5 text-gray-400 left-2 text-[24px]" />
            <select
              name="Bed"
              id=""
              className="border-1 border-gray-300 rounded-[4px] pl-9 py-3"
            >
              <option value="rent"> Bed</option>
              <option value="rent">Bed 1</option>
              <option value="rent">Bed 2</option>
              <option value="rent">Bed 3</option>
              <option value="rent">Bed 4</option>
            </select>
          </div>

          <div className="relative">
            <FaBath  className="absolute top-3 text-gray-400 left-2 text-[20px]" />

          <select
            name="Bath"
            id=""
            className="border-1 border-gray-300 rounded-[4px] pl-9 py-3"
          >
            <option value="rent">Bath</option>
            <option value="rent">Bath 1</option>
            <option value="rent">Bath 2</option>
            <option value="rent">Bath 3</option>
            <option value="rent">Bath 4</option>
          </select>
          </div>

          <button className="text-white cursor-pointer bg-blue-900 rounded-[5px] py-3 px-7">
            Search
          </button>
        </div>
      </header>

      <Hero/>
    </>
  );
}

export default App;
