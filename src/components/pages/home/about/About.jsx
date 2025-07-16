import React from 'react'
import { MdEmail } from 'react-icons/md';

const About = () => {
  return (
    <>
      <section className="py-5">
        <div className="container mx-auto px-20">
          <div>
            <div className="flex gap-20 ml-10">
              <h2 className="text-8xl bg-gradient-to-b from-amber-900 to bg-amber-800/30 text-transparent bg-clip-text mb-2">
                ABOUT ME:
              </h2>
              <p className="max-w-[45rem] mt-3 text-gray-700">
                I'm a front-end developer who builds responsive, user-friendly
                websites with clean code and modern tools like HTML, CSS,
                JavaScript, and React. I love turning ideas into smooth,
                interactive web experiences.
              </p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-10">
            <div className="shadow-lg bg-gradient-to-b from-amber-800/30 to bg-amber-870/30 p-5">
              <h5 className="font-bold text-amber-800 text-xl">
                PERSONAL INFORMATION
              </h5>
              <div className="flex gap-2">
                <h2 className="font-bold ">Age:</h2>
                <p>22</p>
              </div>
              <div className="flex gap-2">
                <MdEmail className="text-gray-700 text-xl mt-3 " />
                <p className="mt-3">Female</p>
              </div>
              <div className="flex gap-2">
                <MdEmail className="text-gray-700 text-xl mt-3 " />
                <p className="mt-3">22</p>
              </div>
            </div>
            <div className="shadow-lg bg-gradient-to-b from-amber-800/30 to bg-amber-870/30 p-5">
              <h5 className="font-bold text-amber-800 text-xl">
                SOCIALS
              </h5>
              <div className="flex gap-2">
                <MdEmail className="text-gray-700 text-xl mt-3 " />
                <p className="mt-3">canoqueenie25@gmail.com</p>
              </div>
            </div>
            <div className="shadow-lg bg-gradient-to-b from-amber-800/30 to bg-amber-870/30 p-5">
              <h5 className="font-bold text-amber-800 text-xl">
                SOCIALS
              </h5>
              <div className="flex gap-2">
                <MdEmail className="text-gray-700 text-xl mt-3 " />
                <p className="mt-3">canoqueenie25@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About
