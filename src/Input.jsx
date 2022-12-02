import React, { useRef } from 'react'
import {AiOutlinePlus} from "react-icons/ai";

export default function Input(props){
    const inputBox = useRef();
  return (
    <div>
        <div className="flex justify-center align-center">
        <h1 className="mx-auto font-bold text-5xl mb-3 text-black">Todo-App</h1>
        </div>
    <div className="p-3 flex justify-around">
        <input type="text" placeholder="Enter Task" className="rounded p-3 focus:outline-none w-[90%] border border-slate-400" ref={inputBox} />
        <div className="cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center items-center" onClick={() => {
            props.handler(inputBox.current.value)
            inputBox.current.value = "";
        }}>
            <AiOutlinePlus />
        </div>
    </div>
    </div>
  )
}