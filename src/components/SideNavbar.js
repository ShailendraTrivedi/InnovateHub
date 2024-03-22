"use client";
import {
  FaRegCircleQuestion,
  FiPenTool,
  FiPlusSquare,
  HiOutlineSpeakerphone,
  HiPlus,
  IoCodeSharp,
  IoMdArrowDropup,
  LuFolder,
  MdOutlinePersonAddAlt1,
  PiNumberSquareSeven,
} from "@/assets/icons";
import { useState } from "react";
import AddImage from "./AddImage";
import { InnovateHub, UserPic } from "@/assets/images";
export default function SideNavbar() {
  const [expandFolder, setExpandFolder] = useState(-1);
  const folderStructure = [
    {
      folderName: "Products",
      subFile: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"],
    },
    {
      folderName: "Sales",
      subFile: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"],
    },
    {
      folderName: "Design",
      subFile: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"],
    },
    {
      folderName: "Office",
      subFile: [],
    },
    {
      folderName: "Legal",
      subFile: [],
    },
  ];
  return (
    <div className="min-h-[100vh] m-2 border-2 rounded-xl p-3 flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        {/* Header SideNavbar */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-[3rem] h-[3rem] bg-black rounded-xl">
              <AddImage image={InnovateHub.src} />
            </div>
            <div className="flex flex-col">
              <span className="text-black50 font-bold">INC</span>
              <span className="">InnovateHub</span>
            </div>
          </div>
          <div className="w-[2rem] h-[2rem] rounded-full bg-black50 overflow-hidden">
            <AddImage image={UserPic.src} />
          </div>
        </div>
        {/* Section 1st */}
        <div className="border-2 rounded-xl">
          <ul className="p-2">
            <li className="flex group justify-between p-1 hover:bg-black5 rounded-lg cursor-pointer">
              <div className="flex items-center gap-2">
                <FiPenTool /> Design team
              </div>
              <div className="bg-black5 group-hover:bg-white rounded-lg px-1 text-sm text-center">
                X+1
              </div>
            </li>
            <li className="flex group justify-between p-1 hover:bg-black5 rounded-xl cursor-pointer">
              <div className="flex items-center gap-2">
                <HiOutlineSpeakerphone /> Design team
              </div>
              <div className="bg-black5 group-hover:bg-white rounded-lg px-1 text-sm text-center">
                X+2
              </div>
            </li>
            <li className="flex group justify-between p-1 hover:bg-black5 rounded-xl cursor-pointer">
              <div className="flex items-center gap-2">
                <IoCodeSharp /> Design team
              </div>
              <div className="bg-black5 group-hover:bg-white rounded-lg px-1 text-sm text-center">
                X+3
              </div>
            </li>
          </ul>
          <div className="flex group justify-between p-2 cursor-pointer text-black50 border-t-2">
            <div className="flex items-center gap-2">
              <FiPlusSquare /> Design team
            </div>
          </div>
        </div>
        {/* Section 2nd */}
        <div className="p-2 space-y-2">
          <div className="flex justify-between items-center text-black50 font-semibold">
            <div className="">FOLDERS</div>
            <HiPlus />
          </div>
          <ul className="">
            {folderStructure.map((folder, i) => (
              <>
                <li key={i} className="">
                  <div
                    onClick={() => {
                      if (expandFolder === i) {
                        setExpandFolder(-1);
                      } else {
                        setExpandFolder(i);
                      }
                    }}
                    className={`${
                      expandFolder == i && "bg-black5"
                    } rounded-lg p-2 flex gap-2 items-center justify-between`}
                  >
                    <div className="flex gap-2 items-center">
                      <LuFolder />
                      {folder.folderName}
                    </div>
                    {folder.subFile.length > 0 && (
                      <IoMdArrowDropup
                        className={`${expandFolder === i && "rotate-180"}`}
                      />
                    )}
                  </div>
                  {expandFolder == i && folder.subFile.length > 0 && (
                    <div className="px-4">
                      <ul className="border-l-2 rounded-b-lg px-3 py-2">
                        {folder.subFile.map((file, idx) => (
                          <li
                            key={idx}
                            className="flex group justify-between p-1 hover:bg-black5 rounded-lg cursor-pointer"
                          >
                            {file}
                          </li>
                        ))}
                      </ul>
                      <div className="px-4 flex items-center gap-2 text-black50">
                        <FiPlusSquare /> Add new sub
                      </div>
                    </div>
                  )}
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
      <footer>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 px-2">
            <MdOutlinePersonAddAlt1 />
            Invite teammates
          </li>
          <li className="flex items-center gap-2 px-2">
            <FaRegCircleQuestion />
            Help and first steps
          </li>
          <li className="flex items-center gap-2 justify-between bg-black5 py-1 px-2 rounded-xl">
            <div className="flex gap-2 items-center">
              <PiNumberSquareSeven />
              days left on trials
            </div>
            <button className="bg-black text-white py-1 px-2 rounded-xl">
              Add billing
            </button>
          </li>
        </ul>
      </footer>
    </div>
  );
}
