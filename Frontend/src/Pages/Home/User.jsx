import React from "react";

const User = () => {
  return (
    <div className="flex gap-5 items-center my-2">
      <div className="avatar avatar-online">
        <div className="w-12  rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
        </div>
      </div>
      <div>
        <h2 className="lineclamp-1">Full Name</h2>
        <p className="text-xs">Username</p>
      </div>
    </div>
  );
};

export default User;
