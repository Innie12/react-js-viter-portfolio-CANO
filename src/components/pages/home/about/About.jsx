import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { GiAges, GiGraduateCap, GiSkills } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LuTimer } from "react-icons/lu";
import { MdOutlineSettingsAccessibility } from "react-icons/md";
import { SiDavinciresolve } from "react-icons/si";

const About = () => {
  return (
    <>
      <section id="About" className="py-5 bg-amber-50">
        <div className="container mx-auto px-20">
          <div>
            <div className="flex flex-wrap gap-20 ml-24">
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
                </div>
                <div className="flex gap-3 mt-10 mb-5">
                  <GiGraduateCap className="text-4xl text-tertiary" />
                  <h5 className="text-primary font-bold mt-2">EDUCATION</h5>
                </div>
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
                    <h4 className="text-tertiary font-bold">SECONDARY ( HS & SHS )</h4>
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
                      <p className="bg-primary/5 rounded-full shadow-lg w-fit px-2 text-primary font-bold">
                        2022 - 2026
                      </p>
                    </div>
                    <p className="text-primary font-semibold">
                      Bicol University Polangui
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-10 mb-8">
                <GiSkills className="text-4xl text-tertiary" />
                <h5 className="text-primary font-bold mt-2">SOFT SKILLS</h5>
              </div>
              <div className="text-primary font-semibold flex flex-wrap gap-8 ">
                <div className="flex gap-2 bg-gradient-to-br from-amber-50 to bg-amber-700/50 w-[12rem] h-[4rem] items-center p-2 drop-shadow-lg rounded-lg justify-center">
                  <AiOutlineTeam className="text-4xl text-tertiary"/>
                  <h6>Teamwork</h6>
                </div>
                <div className="flex gap-2 bg-gradient-to-br from-amber-50 to bg-amber-700/50 w-[12rem] h-[4rem] items-center p-2 drop-shadow-lg rounded-lg justify-center">
                  <SiDavinciresolve className="text-4xl text-tertiary"/>
                  <h6>Problem Solving</h6>
                </div>
                <div className="flex gap-2 bg-gradient-to-br from-amber-50 to bg-amber-700/50 w-[12rem] h-[4rem] items-center p-2 drop-shadow-lg rounded-lg justify-center">
                  <MdOutlineSettingsAccessibility className="text-4xl text-tertiary"/>
                  <h6>Adaptability</h6>
                </div>
                <div className="flex gap-2 bg-gradient-to-br from-amber-50 to bg-amber-700/50 w-[12rem] h-[4rem] items-center p-2 drop-shadow-lg rounded-lg justify-center">
                  <LuTimer className="text-4xl text-tertiary"/>
                  <h6>Time Management</h6>
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
