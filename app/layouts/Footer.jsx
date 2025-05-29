import { Facebook, Instagram, X, Youtube, Linkedin, Dribbble } from "lucide-react"

export default function Footer() {
  return (
    <>
       <footer className="h-auto flex flex-col justify-center p-5">
        <div className="flex justify-between">
            <div className="flex items-center" >
                <p className='text-sm'>
                    © {new Date().getFullYear()} WhatbytesStore. All rights reserved.
                </p>
            </div>
            <div className='w-max flex gap-5 p-5 items-center ' >
                <div className="cursor-pointer">
                    <Facebook/>
                </div>
                <div className="cursor-pointer">
                    <Instagram/>
                </div>
                <div className="cursor-pointer">
                    <Dribbble/>
                </div>
                <div className="cursor-pointer">
                    <X/>
                </div>
                <div className="cursor-pointer">
                    <Youtube/>
                </div>
                <div className="cursor-pointer">
                    <Linkedin/>
                </div>
            </div>
        </div>
       </footer>
    </>
  )
}
