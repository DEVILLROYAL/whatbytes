import { Search } from "lucide-react"

export default function SearchInput() {
  return (
    <>
       <div className="flex justify-between h-full">
         <input type="text" placeholder="Search..." className="flex m-2 outline-none w-auto p-2" />
         <div className="icon flex flex-col justify-center">
            <a className="cursor-pointer p-2" href="#">
                <Search height='20px'/>
            </a>
         </div>
       </div>
    </>
  )
}
