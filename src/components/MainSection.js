"use client";
import {
  CategoryColors,
  NextMeetingColor,
  LetterColors,
  main_section_data,
  distinctBrands,
  distinctTags,
  TableHeading,
} from "@/assets/data";
import {
  IoSearch,
  LuMessagesSquare,
  IoSettingsOutline,
  RxDashboard,
  IoMdArrowDropdown,
  BiSortAlt2,
  MdFilterList,
  FiPlusSquare,
  TbPackageExport,
  FiPlus,
  IoArchiveOutline,
  AiOutlineDelete,
  RxCross2,
} from "@/assets/icons";
import { AddImage } from ".";
import GetBrandImage from "@/assets/images";
import { useState } from "react";

export default function MainSection() {
  const [newMainArray, setNewMainArray] = useState(main_section_data);

  const [selectedRow, setSelectedRow] = useState([]);
  const [hideAllRow, setHideSelectedRow] = useState(false);
  const [selectAllRow, setSelectAllRow] = useState(false);

  const CategoryColors = {
    Automation: "bg-violet-100 text-violet-700 border-violet-200",
    "E-commerce": "bg-orange-100 text-orange-700 border-orange-200",
    SAAS: "bg-green-100 text-green-700 border-green-200",
    Marketplace: "bg-green-100 text-green-700 border-green-200",
    B2B: "bg-yellow-100 text-yellow-700 border-yellow-200",
    B2C: "bg-teal-100 text-teal-700 border-teal-200",
    Publishing: "bg-pink-100 text-pink-700 border-pink-200",
    Transportation: "bg-yellow-100 text-yellow-700 border-yellow-200",
    Finance: "bg-yellow-100 text-yellow-700 border-yellow-200",
    Technology: "bg-navy-100 text-navy-700 border-navy-200",
    "Web Services": "bg-blue-100 text-blue-700 border-blue-200",
    Mobile: "bg-blue-100 text-blue-700 border-blue-200",
    Technology: "bg-violet-100 text-violet-700 border-violet-200",
  };

  const NextMeetingColor = {
    "in 30 minutes": "bg-green-100 text-green-700 border-green-200",
    "in 6 hours": "bg-green-100 text-green-700 border-green-200",
    Tomorrow: "bg-blue-100 text-blue-700 border-blue-200",
    "no contact": "bg-red-100 text-red-700 border-red-200",
    "next month": "bg-gray-100 text-gray-700 border-gray-200",
  };

  const LetterColors = {
    A: "bg-violet-100 text-violet-700 border-violet-200",
    B: "bg-orange-100 text-orange-700 border-orange-200",
    C: "bg-green-100 text-green-700 border-green-200",
    D: "bg-blue-100 text-blue-700 border-blue-200",
    E: "bg-yellow-100 text-yellow-700 border-yellow-200",
    I: "bg-pink-100 text-pink-700 border-pink-200",
    J: "bg-red-100 text-red-700 border-red-200",
    M: "bg-blue-100 text-blue-700 border-blue-200",
    O: "bg-violet-100 text-violet-700 border-violet-200",
    R: "bg-orange-100 text-orange-700 border-orange-200",
    S: "bg-green-100 text-green-700 border-green-200",
    W: "bg-yellow-100 text-yellow-700 border-yellow-200",
  };

  const handleSelectedRow = (row) => {
    if (row === "all") {
      if (selectAllRow) {
        setSelectedRow([]);
      } else {
        setSelectedRow([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      }
      setHideSelectedRow(true);
      setSelectAllRow(!selectAllRow);
      return;
    }
    setSelectAllRow(false);
    let updatedSelectedRow = [];
    if (selectedRow.includes(row)) {
      updatedSelectedRow = selectedRow.filter((index) => index !== row);
    } else {
      updatedSelectedRow = [...selectedRow, row];
    }

    setSelectedRow(updatedSelectedRow);
  };

  const filterRowsByTags = (selectedTag) => {
    if (selectedTag == "") {
      setNewMainArray(main_section_data);
      return;
    }
    let newArr = [];
    for (let i = 0; i < main_section_data.length; i++) {
      for (let j = 0; j < main_section_data[i].tags.length; j++) {
        if (main_section_data[i].tags[j] == selectedTag) {
          newArr.push(main_section_data[i]);
          break;
        }
      }
    }
    setNewMainArray(newArr);
  };

  const filterRowsByBrands = (selectedBrand) => {
    if (selectedBrand == "") {
      setNewMainArray(main_section_data);
      return;
    }
    let newArr = [];
    for (let i = 0; i < main_section_data.length; i++) {
      if (main_section_data[i].brand.name === selectedBrand) {
        newArr.push(main_section_data[i]);
      }
    }
    setNewMainArray(newArr);
  };

  const searchData = (query) => {
    const lowerCaseQuery = query.toLowerCase();

    const searchResults = main_section_data.filter((item) => {
      for (const key in item) {
        if (key === "select") continue;

        if (
          typeof item[key] === "string" &&
          item[key].toLowerCase().includes(lowerCaseQuery)
        ) {
          return true;
        }

        if (Array.isArray(item[key])) {
          if (
            item[key].some((value) =>
              value.toLowerCase().includes(lowerCaseQuery)
            )
          ) {
            return true;
          }
        }
      }

      return false;
    });

    return searchResults;
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (e.target.value == "") {
        setNewMainArray(main_section_data);
      } else {
        setNewMainArray(searchData(e.target.value));
      }
    }
  };

  const handleDelete = () => {
    const updatedArray = newMainArray.filter(
      (item, index) => !selectedRow.includes(index)
    );
    setNewMainArray(updatedArray);
    setSelectedRow([]);
  };

  return (
    <div className="relative col-span-3 min-h-[100vh] m-2 border-2 rounded-xl flex flex-col">
      {/* Floating Menu Box */}
      {selectedRow.length > 0 && (
        <div className="fixed top-[51rem] left-1/2">
          <ul className="flex items-center gap-2 bg-white border-black10 border-2 p-2 rounded-xl">
            <li className="p-1 border-2 rounded-xl flex items-center gap-1">
              <div className="bg-black w-6 text-white rounded-lg text-center">
                {selectedRow.length}
              </div>
              selected
            </li>
            <li className="p-1 border-2 rounded-xl flex items-center gap-1">
              <IoArchiveOutline />
              Archive
            </li>
            <li
              className="p-1 border-2 rounded-xl flex items-center gap-1 cursor-pointer"
              onClick={handleDelete}
            >
              <AiOutlineDelete />
              Delete
            </li>
            <li className="p-1 border-2 rounded-xl flex items-center gap-1">
              More
              <IoMdArrowDropdown />
            </li>
            <RxCross2
              onClick={() => {
                setSelectedRow([]);
                setHideSelectedRow(false);
              }}
              className="text-black50"
            />
          </ul>
        </div>
      )}
      {/* Section 1st */}
      <div className="border-b-2 p-2 flex justify-between items-center px-5">
        <div className="font-semibold text-xl">Products</div>
        <div className="flex gap-2 text-gray-500">
          <div className="relative">
            <div className="absolute top-2 left-2">
              <IoSearch size={20} />
            </div>
            <input
              type="text"
              className="p-1 ps-8 rounded-xl border-2 focus:outline-none border-gray-500"
              placeholder="Search for..."
              onKeyDown={(e) => handleSearch(e)}
            />
          </div>
          <div className="border-2 p-2 rounded-xl cursor-not-allowed text-black50">
            <LuMessagesSquare size={20} />
          </div>
          <div className="border-2 p-2 rounded-xl cursor-pointer">
            <IoSettingsOutline size={20} />
          </div>
        </div>
      </div>
      {/* Section 2nd */}
      <div className="border-b-2 p-2 flex justify-between items-center px-5 text-black50">
        <ul className="flex  gap-2 items-center">
          <li className="border-2 border-gray-500 p-1  px-2 rounded-xl flex items-center gap-2 cursor-pointer text-gray-500">
            <RxDashboard />
            <select
              name="tags"
              id="tags"
              className="focus:outline-none cursor-pointer"
              onChange={(e) => filterRowsByBrands(e.target.value)}
            >
              <option value="">All brands</option>
              {distinctBrands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </li>
          <li className="border-2 p-1  px-2 rounded-xl flex items-center gap-2 cursor-not-allowed">
            Desk <IoMdArrowDropdown />
          </li>
          <li className="">
            <select
              name="tags"
              id="tags"
              className="border-2 border-gray-500 text-gray-500 p-1  px-2 rounded-xl cursor-pointer"
              onChange={(e) => filterRowsByTags(e.target.value)}
            >
              <option value="">Tags</option>
              {distinctTags.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </li>
          <li className="border-2 p-1  px-2 rounded-xl flex items-center gap-2 cursor-not-allowed">
            <BiSortAlt2 /> Sort
          </li>
          <li className="border-2 p-1  px-2 rounded-xl flex items-center gap-2 cursor-not-allowed">
            <MdFilterList /> Filter
          </li>
        </ul>
        <ul className="flex  gap-2 items-center">
          <li className="border-2 p-1  px-2 rounded-xl flex items-center gap-2 cursor-not-allowed">
            <FiPlusSquare /> Meeting
          </li>
          <li className="border-2 p-1  px-2 rounded-xl flex items-center gap-2 cursor-not-allowed">
            <TbPackageExport /> Import/Export
          </li>
        </ul>
      </div>
      {/* Table Section */}
      <div className="w-full h-full overflow-x-scroll">
        <table className="w-[100rem]">
          <thead>
            <tr>
              <th className="w-[10rem] border-b-2 p-2">
                <div className="flex justify-between items-center px-2">
                  <div className="flex gap-2 w-full items-center">
                    <input
                      type="checkbox"
                      className="checkbox-custom"
                      onChange={() => handleSelectedRow("all")}
                      checked={selectAllRow && hideAllRow}
                    />

                    {TableHeading[0]}
                  </div>
                  <FiPlus />
                </div>
              </th>
              {TableHeading.map((item, i) => (
                <th key={i} className="w-[10rem] border-b-2 border-l-2">
                  {TableHeading[i + 1]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {newMainArray.map((item, i) => {
              const selectedIndex = selectedRow.includes(i);
              return (
                <tr key={i} className={`${selectedIndex && "bg-gray-50"}`}>
                  <td className="w-[10rem] border-b-2">
                    <div className="flex justify-between items-center px-4">
                      <div className="flex gap-2 w-full items-center">
                        <input
                          type="checkbox"
                          className="checkbox-custom"
                          onChange={() => handleSelectedRow(i)}
                          checked={selectedIndex}
                        />
                        <div className="w-5 h-5">
                          <AddImage image={GetBrandImage(item.brand.name)} />
                        </div>
                        {item.brand.name}
                      </div>
                      {item.brand.comment > 0 && (
                        <div className="flex gap-2 text-black50">
                          <LuMessagesSquare />
                          {item.brand.comment}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="w-[10rem] border-b-2 border-l-2 p-1">
                    <div className="">
                      <input
                        type="text"
                        className={`w-full h-full p-1 ${
                          selectedIndex ? "bg-gray-50" : "bg-white"
                        }`}
                        value={item.description}
                        disabled
                      />
                    </div>
                  </td>
                  <td className="w-[10rem] border-b-2 border-l-2">
                    <div className="flex relative">
                      {item.members.map((item, i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-full border-2  uppercase text-center ${
                            LetterColors[item[0]]
                          }`}
                          style={{
                            position: "absolute",
                            top: `-10px`,
                            left: `${i * 15}px`,
                          }}
                        >
                          {item[0]}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="border-b-2 border-l-2">
                    <div className="w-full">
                      <div className="flex gap-2">
                        {item.categories.map((item, i) => (
                          <div
                            key={i}
                            className={`text-nowrap border-2  p-[1px] rounded-lg ${CategoryColors[item]}`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="w-[10rem] border-b-2 border-l-2">
                    <div className="w-full overflow-hidden">
                      <div className="flex gap-2">
                        {item.tags.map((item, i) => (
                          <div
                            key={i}
                            className="bg-gray-100 text-gray-500 text-nowrap border-2 border-gray-200 p-[1px] rounded-lg"
                          >
                            #{item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="w-[10rem] border-b-2 border-l-2 ">
                    <div className="w-full overflow-hidden">
                      <div className="flex gap-2">
                        <div
                          className={`text-nowrap border-2 p-[1px] rounded-lg ${
                            NextMeetingColor[item.next_meeting]
                          }`}
                        >
                          {item.next_meeting}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="w-[10rem] border-b-2 border-l-2 "></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
