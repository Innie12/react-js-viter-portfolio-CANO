import React from "react";
import {FaGithub } from "react-icons/fa";


const Projects = () => {
  return (
    <>
      <section id="projects" className="bg-amber-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 justify-items-center gap-5">
            <div>
              <h2 className="max-w-[36rem] text-8xl bg-gradient-to-br from-amber-900 to bg-amber-800/30 text-transparent bg-clip-text mb-2">
                CHECK MY PROJECTS HERE
              </h2>
            </div>
            <div className="bg-tertiary/30 shadow-xl w-[14rem] h-[5rem] p-6 mt-20 rounded-lg ">
              <div className=" flex gap-5">
                <FaGithub className="text-3xl text-tertiary" />
                <a
                  className="underline text-primary"
                  href="https://github.com/Innie12/react-js-viter-myapp-CANO.git"
                >
                  GitHub Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

