'use client'

import { CircleUser, LightbulbIcon, LogOutIcon, SettingsIcon, ShoppingCart, UserCircle } from "lucide-react"
import { useState, useRef, useEffect, } from "react";

export default function Profile() {
  const [ isOpen, setIsOpen ] = useState(false);
  const menuRef = useRef();

  useEffect(()=> {
    const handleClickOutside = (event) => {
      if(menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  },[]);

  return (
    <>
     <div className="w-max h-full relative flex items-center p-2" ref={menuRef}>
        <button onClick={() => setIsOpen(!isOpen)}>
            <CircleUser className="cursor-pointer"/>
        </button>
     </div>
     {isOpen && (<div id="profile" className="border border-black rounded-xl bg-white z-50 absolute right-5 top-16 h-max w-[200px]">
      <div className="flex flex-col">
        <div className="border-b flex gap-5 p-3">
          <UserCircle/>
          <h1>UserName</h1>
        </div>
        <div className="flex gap-5 p-3" >
          <LightbulbIcon/>
          <h1>Theme</h1>
        </div>
        <div className="flex gap-5 p-3" >
          <ShoppingCart/>
          <h1>Cart</h1>
        </div>
        <div className="flex gap-5 p-3">
          <SettingsIcon/>
          <h1>Setting</h1>
        </div>
        <div className="flex border-t gap-5 p-3">
          <LogOutIcon/>
          <h1>Logout</h1>
        </div>
      </div>
     </div>)}
    </>
  )
}
