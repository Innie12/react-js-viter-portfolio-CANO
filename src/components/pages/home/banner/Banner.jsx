import React from 'react'
import { AiOutlineFileDone } from 'react-icons/ai';
import { CiCoffeeCup } from 'react-icons/ci';
import { FaArrowDown, FaCoffee, FaInstagram, FaPills } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';
import { TiSocialFacebook } from 'react-icons/ti';

const Banner = () => {
  return (
    <>
      <section className="py-14 bg-amber-50">
        <div className="container mx-auto px-20 ">
          <div className="justify-items-center">
            <div className="m-5 shadow-xl p-2 rounded-full animate-pulse">
              <img
                className="rounded-full object-cover size-80 shadow-amber-800/30"
                src="./images/Cano, Quennie.webp"
                alt=""
              />
            </div>
            <div className="flex text-2xl gap-5 mb-5 text-amber-800">
              <TiSocialFacebook className="shadow-lg" />
              <SiMinutemailer className="shadow-lg" />
              <MdEmail className="shadow-lg" />
              <FaInstagram className="shadow-lg" />
            </div>
            <div className="bg-amber-800/10 shadow-xl py-6 px-16 mb-16 ">
              <p className="text-amber-800 mb-2">WELCOME TO MY WORLD!</p>
              <h2 className="text-5xl font-bold text-gray-600">
                Hi, I'm{" "}
                <span className="bg-gradient-to-b from-amber-900 to bg-amber-800/30 text-transparent bg-clip-text mb-2 ">
                  QUENNIE CANO
                </span>
              </h2>
              <p className="text-gray-600">Computer Science Student</p>
              <button className=" border-amber-800/10 rounded-full py-2 px-6 inline-block mt-5 font-bold text-gray-700 hover:bg-amber-800/30 shadow-xl">
                About Me
              </button>
              <button className="  border-amber-800/10 rounded-full py-2 px-6 inline-block mt-5 font-bold text-gray-700 ml-5 hover:bg-amber-800/30 shadow-xl">
                Contact Me
              </button>
            </div>
            <div className="hover:bg-amber-800/30 p-3 rounded-full text-gray-700 shadow-xl">
              <FaArrowDown />
            </div>
          </div>
          <div className="bg-white mt-10 py-3 px-10 flex text-gray-700 text-3xl gap-14 justify-items-center">
            <div className="flex gap-3">
              <div className="bg-amber-800/50 rounded-full h-fit p-3 mt-2">
                <AiOutlineFileDone/>
              </div>
              <div>
                <h2 className="text-amber-800 text-3xl font-bold">15</h2>
                <p className="text-lg">Projects Complete</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-amber-800/50 rounded-full h-fit p-3 mt-2">
                <CiCoffeeCup/>
              </div>
              <div>
                <h2 className="text-amber-800 text-3xl font-bold">200</h2>
                <p className="text-lg">Cups of Coffee</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-amber-800/50 rounded-full h-fit p-3 mt-2">
                <FaPills/>
              </div>
              <div>
                <h2 className="text-amber-800 text-3xl font-bold">40</h2>
                <p className="text-lg">Medicine</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner
