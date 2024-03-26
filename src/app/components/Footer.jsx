import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex items-center justify-between">
        
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="logo image"
            width={159}
            height={150}
          />
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
