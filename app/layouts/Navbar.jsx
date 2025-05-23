import SearchInput from "./components/SearchInput";

export default function Navbar() {
  return (
    <>
        <header className="w-full h-16 border border-black flex flex-row gap-5 justify-between box-border p-3">
            <div className="h-full w-max flex items-center ">
                <p className='font-sans font-bold' >Whatbytes Cart</p>
            </div>
            <div className='border border-black flex flex-col justify-center h-full rounded-full w'>
              <SearchInput/>
            </div>
            <div className='h-full w-auto flex gap-5'>
              <div className="cart w-max h-full border border-black p-2 rounded-lg flex items-center">Cart</div>
              <div className="w-max h-full flex items-center p-2">Profile</div>
            </div>
        </header>
    </>
  )
}
