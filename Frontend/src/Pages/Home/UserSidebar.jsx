import React from "react";
import { IoMdSearch } from "react-icons/io";
import User from "./User";

const UserSidebar = () => {
  return (
    <div className="max-w-[20em] h-screen w-full flex flex-col border-r border-r-white/10">
      <div className="flex items-center  justify-center">
      <h1 className="bg-black mx-3 px-2 py-1 text-[#5754e9] text-xl font-semibold rounded-lg mt-3">
        GUP SHUP
      </h1>
      </div>

      <div className="p-3">
        <label className="input flex items-center gap-2">
          <IoMdSearch />
          <input type="search" required placeholder="Search" />
        </label>
      </div>

      <div className="h-full overflow-y-auto px-3 ">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>

      <div className="flex items-center justify-between p-3">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <button className="btn btn-primary btn-sm px-4">Logout</button>
      </div>
    </div>
  );
};

export default UserSidebar;
