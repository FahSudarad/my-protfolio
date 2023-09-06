import React from "react";
import Image from "next/image";
import profileLogo from "../assets/images/logo-page.png";

function footer() {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-[#27262633] w-[100%]">
      <div
        className="flex flex-row flex-wrap justify-between items-center"
        id="footer-bar"
      >
        <div className="">
          <Image
            src={profileLogo}
            alt="profile logo"
            className="w-[250px] rounded-md"
          />
        </div>
        <div className="menu-bar">
          <ul className="flex flex-row font-bold">
            <li className="mr-[70px]">
              <a onClick={() => scrollToSection("#home")}>
                <h3>Home</h3>
              </a>
            </li>
            <li className="mr-[70px]">
              <a href="https://github.com/FahSudarad">
                <h3>Git Hub</h3>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sudarad-thonglue/">
                <h3>Linkedin</h3>
              </a>
            </li>
          </ul>
        </div>
        <div className="text-[yellow]">
          2023 | COPYRIGHT ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
}

export default footer;
