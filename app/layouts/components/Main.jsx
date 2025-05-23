export default function Main() {
  return (
    <>
       <div className="main w-full border border-black h-full p-5 flex gap-5">
        <div className="filter border border-black w-1/4 rounded-xl h-auto">
           <div className="h-11 flex justify-center">
              <p className="h-full flex justify-center text-xl items-center" >
                Filter
              </p>
           </div>
           <div className="category">
            <p className="p-2 text-x ml-5">
                Category
            </p>
              <label className="flex gap-5 p-2 ml-5">
                <input type="checkbox" />
                <span>All</span>
              </label>
           </div>
        </div>
       </div>
    </>
  )
}
