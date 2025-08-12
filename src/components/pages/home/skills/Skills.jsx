import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <section id="projects" className="bg-amber-50" >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 justify-items-center gap-5">
            <div className="grid grid-cols-3 size-[34rem]">
              <img src="./images/css.webp" alt="" />
              <img src="./images/java.webp" alt="" />
              <img src="./images/html.webp" alt="" />
              <img src="./images/javascript.webp" alt="" />
              <img src="./images/reactjs.webp" alt="" />
              <img src="./images/tailwind.webp" alt="" />
            </div>
            <div>
              <h2 className="max-w-[36rem] text-8xl bg-gradient-to-br from-amber-900 to bg-amber-800/30 text-transparent bg-clip-text mb-2 mt-24">
                TECHNICAL SKILLS
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
