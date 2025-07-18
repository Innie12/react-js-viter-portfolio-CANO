import React from "react";
import { GiAges, GiGraduateCap } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlinePersonOutline } from "react-icons/md";

const About = () => {
  return (
    <>
      <section id="About" className="py-5">
        <div className="container mx-auto px-20">
          <div>
            <div className="flex gap-20 ml-24">
              <h2 className="text-8xl bg-gradient-to-br from-amber-900 to bg-amber-800/30 text-transparent bg-clip-text mb-2">
                ABOUT ME:
              </h2>
              <p className="max-w-[35rem] mt-3 text-primary">
                I'm a front-end developer who builds responsive, user-friendly
                websites with clean code and modern tools like HTML, CSS,
                JavaScript, and React. I love turning ideas into smooth,
                interactive web experiences.
              </p>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-[2fr_1fr] shadow-xl">
            <div className="shadow-lg bg-gradient-to-l from-amber-800/20 to bg-amber-200/20 p-5">
              <div>
                <h5 className="font-bold text-tertiary text-2xl bg-amber-50/10 p-2 shadow-md w-fit ">
                  PERSONAL INFORMATION
                </h5>
                <div className="mt-5">
                  <div className="flex gap-2">
                    <GiAges className="text-2xl text-tertiary mt-5 flex" />
                    <p className="text-primary text-[1rem] mt-5">
                      22 Years Old
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <LiaBirthdayCakeSolid className="text-2xl text-tertiary mt-5 flex" />
                    <p className="text-primary text-[1rem] mt-5">
                      January 25, 2003
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <IoLocationOutline className="text-2xl text-tertiary mt-5 flex" />
                    <p className="text-primary text-[1rem] mt-5">
                      Balogo Oas Albay, 4505, Philippines
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <IoLocationOutline className="text-2xl text-tertiary mt-5 flex" />
                    <p className="text-primary text-[1rem] mt-5">
                      Balogo Oas Albay, 4505, Philippines
                    </p>
                  </div>
                </div>
                <div className="bg-amber-800/10 mt-5 p-5 rounded-lg shadow-lg">
                  <div className="flex gap-2 mb-5">
                    <GiGraduateCap className="text-4xl text-tertiary" />
                    <h5 className="text-primary font-bold mt-2">EDUCATION</h5>
                  </div>
                  <div className="flex gap-10">
                    <div className="grid grid-cols-3 gap-10">
                      <div className="justify-items-center">
                        <h4 className="text-tertiary font-bold">PRIMARY</h4>
                        <div>
                          <img
                            className="size-28 mt-2 mb-3"
                            src="./images/primary.webp"
                            alt=""
                          />
                        </div>
                        <div className="flex justify-between">
                          <p className="bg-amber-800/10 rounded-full shadow-lg w-fit px-2 text-primary font-bold">
                            2010 - 2016
                          </p>
                        </div>
                        <p className="text-primary font-semibold">
                          Balogo, East Elementary School
                        </p>
                      </div>
                      <div className="justify-items-center">
                        <h4 className="text-tertiary font-bold">SECONDARY</h4>
                        <div>
                          <img
                            className="size-20 mt-6 mb-7"
                            src="./images/secondary.webp"
                            alt=""
                          />
                        </div>
                        <div className="flex justify-between">
                          <p className="bg-amber-800/10 rounded-full shadow-lg w-fit px-2 text-primary font-bold">
                            2016 - 2022
                          </p>
                        </div>
                        <p className="text-primary font-semibold">
                          Balogo National High School
                        </p>
                      </div>
                      <div className="justify-items-center">
                        <h4 className="text-tertiary font-bold">TERTIARY</h4>
                        <div>
                          <img
                            className="size-24 mt-4 mb-5"
                            src="./images/tertiary.webp"
                            alt=""
                          />
                        </div>
                        <div className="flex justify-between">
                          <p className="bg-amber-800/10 rounded-full shadow-lg w-fit px-2 text-primary font-bold">
                            2016 - 2022
                          </p>
                        </div>
                        <p className="text-primary font-semibold">
                          Balogo National High School
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="size-[45rem]"
              src="./images/About.webp"
              alt="Picture of quennie standing"
            />
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default About;
