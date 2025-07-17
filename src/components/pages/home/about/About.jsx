import React from "react";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <>
      <section id="About" className="py-5">
        <div className="container mx-auto px-20">
          <div>
            <div className="flex gap-20 ml-24">
              <h2 className="text-8xl bg-gradient-to-b from-amber-900 to bg-amber-800/30 text-transparent bg-clip-text mb-2">
                ABOUT ME:
              </h2>
              <p className="max-w-[35rem] mt-3 text-gray-700">
                I'm a front-end developer who builds responsive, user-friendly
                websites with clean code and modern tools like HTML, CSS,
                JavaScript, and React. I love turning ideas into smooth,
                interactive web experiences.
              </p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2">
            <div className="shadow-lg bg-gradient-to-b from-amber-800/30 to bg-amber-870/30 p-5">
              <h5 className="font-bold text-amber-800 text-2xl text-center bg-amber-50/20 shadow-xl py-2">
                PERSONAL INFORMATION
              </h5>
            </div>
            <img className="size-[45rem]" src="./images/About.webp" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
