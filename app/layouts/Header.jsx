import Profile from "./components/Profile";
import SearchInput from "./components/SearchInput";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <>
        <header className="w-full h-16 border flex flex-row gap-5 justify-between box-border p-3">
            <div className="h-full w-max flex p-2 items-center ">
                <p className='font-sans text-xl' >Whatbytes Store</p>
            </div>
            <div className='border border-black  flex flex-col justify-center h-full rounded-full'>
              <SearchInput/>
            </div>
            <div className='h-full w-auto flex gap-5'>
              <div className="flex flex-col justify-center">
                <ShoppingCart/>
              </div>
              <Profile/>
            </div>
        </header>
    </>
  )
}
