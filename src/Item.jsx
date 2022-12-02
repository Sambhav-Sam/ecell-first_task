import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

export default function Item(props) {
  const [done, setDone] = useState(false);
  return (
    <div
      className={` select-none cursor-pointer w-full border-b p-3 flex justify-between`}
    >
      <div className="w-[90%]" onClick={() => setDone(!done)} >
        <span className="pr-2 text-[14px] text-slate-400">{props.time}</span>
        <span className={`${done ===true ? 'line-through' : ''} w-[60%] text-[20px]`}>{props.item}</span>
      </div>
      <div onClick={() => props.removeHandler(props.id)}>
        <BsTrash className="text-[#e74c3c]" />
      </div>
    </div>
  );
}
