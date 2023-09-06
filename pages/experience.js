import React from "react";
import workExperience from "@/data/workExperienceData";

function experience() {
  return (
    <div className="flex flex-col" id="experience">
      <h1 className="text-[70px] flex justify-center mb-10">Work Experience</h1>
      <table class="table-fixed">
        <thead>
          <tr className="border-b-2 border-[#27262633] text-[yellow]">
            <th className="w-[7%] text-left p-5">Year</th>
            <th className="w-[20%] text-left p-5">Company</th>
            <th className="w-[73%] text-left p-5">Job Description</th>
          </tr>
        </thead>
        <tbody>
          {workExperience.map((item, index) => (
            <tr
              key={index}
              className="group hover:bg-white hover:text-[#595ce2]"
            >
              <td className="border-b-2 p-5 border-[#27262633] group-hover:bg-[yellow]">
                {item.year}
              </td>
              <td className="border-b-2  p-5 border-[#27262633]">
                {item.name}
              </td>
              <td className="border-b-2  p-5 border-[#27262633]">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default experience;
