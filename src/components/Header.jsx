import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    //* Metin boşsa durdur
    if (text.trim() === "") return;

    navigate(`results?search_query=${text}`);
  };

  return (
    <header className="p-4 flex justify-between items-center">
      <Link to={"/"} className="flex gap-2 items-center">
        <img className="w-[50px]" src="/youtube.png" alt="LOGO" />
        <h1 className="text-2xl max-sm:hidden font-mono">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="group flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          className="group-hover:border-blue-500 bg-black border border-transparent px-5 py-2 outline-none rounded-l-[20px] focus:border-blue-500"
          type="text"
          placeholder="Ara ..."
        />
        <button className=" border-l px-4 bg-zinc-800 text-2xl">
          <CiSearch />
        </button>
      </form>

      <div className="flex  gap-3 text-xl">
        <FaBell className="cursor-pointer hover:text-gray-400 duration[250ms] " />
        <IoIosVideocam className="cursor-pointer hover:text-gray-400 duration[250ms]" />
        <MdVideoLibrary className="cursor-pointer hover:text-gray-400 duration[250ms]" />
      </div>
    </header>
  );
};

export default Header;
