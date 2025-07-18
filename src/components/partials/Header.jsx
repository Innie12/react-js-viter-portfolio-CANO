import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="bg-secondary">
        <div className="container mx-auto px-14 py-5">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center gap-3">
              <img className="size-10" src="./images/Q.webp" alt="" />
              <h3 className="bg-gradient-to-t from-amber-900 to bg-amber-800/30 text-transparent bg-clip-text font-bold text-center text-2xl font-bold">
                PORTFOLIO
              </h3>
            </div>
            <div className="flex gap-5 items-center font-bold ">
              <a href="#About" className="text-tertiary/60 hover:underline">
                ABOUT
              </a>
              <a href="#About" className="text-tertiary/60 hover:underline">
                SKILLS
              </a>
              <a href="#projects" className="text-tertiary/60 hover:underline">
                PROJECTS
              </a>
              <a href="#" className="text-tertiary/60 hover:underline">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header
