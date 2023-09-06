import React, { useState } from "react";
import Image from "next/image";
import headerImage from "../assets/images/profile-header.png";
import learnMore from "../assets/images/learn-more.png";

function header() {
  const [isClicked, setIsClicked] = useState(false);

  const handleLearnMoreClick = () => {
    setIsClicked(true);
  };
  const handleBackClick = () => {
    setIsClicked(false);
  };
  return (
    <div className="flex flex-row my-[25px] flex-wrap" id="header">
      {isClicked ? (
        <>
          <div
            className="w-[50%] font-extrabold flex flex-col justify-center items-end px-12 leading-7 text-justify"
            id="box-header"
          >
            <p>
              I'm a dedicated tech professional with experience in IT support,
              information security consulting, and e-commerce. As a lifelong
              learner with a strong passion for technology, I stay up-to-date
              with the latest industry trends and best practices, approaching
              each new challenge with enthusiasm and dedication.
            </p>
            <button className="text-[yellow]" onClick={handleBackClick}>
              Back
            </button>
          </div>
          <div className="w-[50%]">
            <Image src={headerImage} alt="image header" className="w-[80%]" />
          </div>
        </>
      ) : (
        <>
          <div
            className="w-[50%] font-extrabold flex flex-col justify-center items-center"
            id="box-header"
          >
            <p className="text-[yellow] tracking-[3px] text-center leading-[70px]">
              Hello World!, I am ...
            </p>
            <div className="leading-[50px]" id="title-header">
              <h1 className="text-[70px] flex justify-center">Sudarad</h1>
              <h1 className="text-[70px] flex justify-center">Thonglue</h1>
            </div>
            <p
              className="flex justify-end leading-[70px] text-[10px]"
              id="header-name"
            >
              &lt;Fah/&gt;
            </p>
            <div className="flex justify-end" id="btn-header">
              <Image
                src={learnMore}
                alt="learn more button"
                className="w-[120px] h-[45px] rounded-md"
                onClick={handleLearnMoreClick}
                id="learn-more"
              />
            </div>
          </div>
          <div className="w-[50%]" id="img-header">
            <Image src={headerImage} alt="image header" className="w-[80%]" />
          </div>
        </>
      )}
    </div>
  );
}

export default header;
