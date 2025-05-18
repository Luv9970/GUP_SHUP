import React from "react";
import User from "./User";
import Message from "./Message";
import { IoIosSend } from "react-icons/io";


const MessageContainer = () => {
  return (
    <div className=" w-full h-screen flex flex-col">
      <div className="px-3 py-1 border-b border-b-white/10">
        <User />
      </div>

      <div className="h-full overflow-y-auto p-3">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

      <div className="w-full p-3 flex gap-3">
        <input
          type="text"
          placeholder="Type here..."
          className="input input-primary w-full"
        />
        <button className="btn btn-square btn-primary">
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
