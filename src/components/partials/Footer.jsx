import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-amber-100 py-5">
        <div className="container mx-auto px-20">
          <div className="flex justify-between">
            <div className="text-center text-primary font-bold hover:text-tertiary">
              <p>© 2025 Quennie A. Cano.</p>
            </div>
            <div className="text-center text-primary font-bold hover:text-tertiary">
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
