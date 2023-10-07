import React from "react";
import portfolioData from "@/data/portfolioData";
import Image from "next/image";
import viewBtn from "../assets/images/view-btn.png";
import ReadMore from "../components/ReadMore";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function portfolio() {
  const maxLength = 100;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    AOS.init(); // กำหนดค่าเริ่มต้นของ AOS
  }, []);
  return (
    <div
      className="flex flex-row flex-wrap w-[100%] text-[white] justify-center"
      id="portfolio"
    >
      {portfolioData.map((item, index) => (
        <div data-aos="fade-up" data-aos-duration="1500">
          <div className="relative mb-[25px]" id="box-port">
            <div
              key={index}
              className="group flex flex-col w-[350px] bg-[#27262633] mr-5 mb-5 px-10 pt-10 pb-20 rounded-xl"
              id="container-port"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-row justify-between mb-6">
                <div className="flex flex-col leading-4">
                  <h3 className="font-bold">{item.id}</h3>
                  <p className="text-[14px] font-medium text-[yellow]">
                    {item.subTitle}
                  </p>
                </div>
                <div className="">
                  <Image src={item.icon} alt="icon" width={30} height={30} />
                </div>
              </div>
              <div className="border-solid border-white border-[6px] rounded-md group-hover:border-[#ffd340]">
                <Image
                  src={hoveredIndex === index ? item.gif : item.image}
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col my-[27px] leading-6">
                <h1 className="text-[28px] font-bold">{item.name}</h1>
                <p className="text-[14px] font-medium text-[yellow]">
                  {item.version}
                </p>
              </div>
              <div className="mb-4 text-[14px]">
                <ReadMore text={item.description} maxLength={maxLength} />
              </div>
              <div className="flex flex-row flex-wrap">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <span
                    className="bg-[#ffd340] text-[#595ce2] px-[6px] py-[3px] rounded-sm text-[12px] font-bold mr-2 mb-2"
                    key={index}
                    style={{
                      display:
                        item[`tag${index}`] !== undefined ? "inline" : "none",
                    }}
                  >
                    {item[`tag${index}`]}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-[310px] mt-[-50px] ml-[40px]" id="btn-port">
              <button>
                <a href={item.link}>
                  <Image
                    src={viewBtn}
                    alt="view button"
                    width={130}
                    className="rounded-md"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default portfolio;
