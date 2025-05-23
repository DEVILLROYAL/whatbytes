import SearchInput from "./components/SearchInput";
import { ShoppingCart, CircleUser } from "lucide-react";

export default function Navbar() {
  return (
    <>
        <header className="w-full h-16 flex flex-row gap-5 justify-between box-border p-3">
            <div className="h-full w-max flex p-2 items-center ">
                <p className='font-sans text-xl' >Whatbytes Store</p>
            </div>
            <div className='border border-black flex flex-col justify-center h-full rounded-full w'>
              <SearchInput/>
            </div>
            <div className='h-full w-auto flex gap-5'>
              <div className="flex flex-col justify-center">
                <ShoppingCart/>
              </div>
              <div className="w-max h-full flex items-center p-2">
                <CircleUser/>
              </div>
            </div>
        </header>
    </>
  )
}
