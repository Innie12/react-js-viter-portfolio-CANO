import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { CiCoffeeCup } from "react-icons/ci";
import {
  FaArrowDown,
  FaCoffee,
  FaInstagram,
  FaMusic,
  FaPills,
  FaRegClock,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { TiSocialFacebook } from "react-icons/ti";
import { VscDebug } from "react-icons/vsc";
import CardAccomplish from "../../../partials/CardAccomplish";
import { FaBugs } from "react-icons/fa6";
import { LiaBugSolid } from "react-icons/lia";
import { IoMdMusicalNotes } from "react-icons/io";
import { GoClock } from "react-icons/go";

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
                alt="Picture of me Smiling"
              />
            </div>
            <div className="flex flex-wrap text-2xl gap-5 mb-5 text-amber-800">
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
              <a
                href="#About"
                className=" border-amber-800/10 rounded-full py-2 px-6 inline-block mt-5 font-bold text-gray-700 hover:bg-amber-800/30 shadow-xl"
              >
                About Me
              </a>
              <a className="  border-amber-800/10 rounded-full py-2 px-6 inline-block mt-5 font-bold text-gray-700 ml-5 hover:bg-amber-800/30 shadow-xl">
                Contact Me
              </a>
            </div>
            <div className="hover:bg-amber-800/30 p-3 rounded-full text-gray-700 shadow-xl animate-bounce">
              <a href="#footer">
                <FaArrowDown />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 mt-5 place-content-center">
            <CardAccomplish
              icon={AiOutlineFileDone}
              number={"15"}
              accomplishment={"Project Complete"}
            />
            <CardAccomplish
              icon={CiCoffeeCup}
              number={"200"}
              accomplishment={"Cups of Coffee"}
            />
            <CardAccomplish
              icon={IoMdMusicalNotes}
              number={"500"}
              accomplishment={"Code w/ Music"}
            />
            <CardAccomplish
              icon={LiaBugSolid}
              number={"52"}
              accomplishment={"Bugs Fixed"}
            />
            <CardAccomplish
              icon={GoClock}
              number={"300"}
              accomplishment={"Hours Coded"}
            />
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
