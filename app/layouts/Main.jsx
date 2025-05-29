'use client'

import { useState, useEffect, useRef } from 'react';
import { Star, ShoppingCart, FilterIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Main(props) {
  const [ data, setData ] = useState(props.data);
  const [ valueArray, setValueArray ] = useState([]);
  const [ isOpen, setIsOpen ] = useState(true);
  const [ price, setPrice ] = useState(100000);
  const menuRef = useRef();

  useEffect(()=> {
    const handleClickOutside = (event) => {
    };
    document.addEventListener('mousedown',handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  },[]);

  const router = useRouter();
  const rate = 83.5;

  const handleProductClick = (slug) => {
    router.push(`/product/${slug}`);
  }
  const priceChange = (e) => {
    setPrice(Number(e.target.value));
  };

  const theFilter = (e) => {
    const value = e.target.value;
    const check = e.target.checked;

    setValueArray(prev => {
      if(check){
        if(!prev.includes(value)){
          return [...prev, value];
        }
        return prev;
      } else {
        return prev.filter(item => item !== value);
      }
    });
  };
  useEffect(()=>{
    const filterValue = valueArray.toString();
    const hello = filterValue.split();
    setData(data);
    console.log(hello);
  },[valueArray]);

  return (
    <>
       <div className="main w-full h-full p-5 flex gap-5">
        { isOpen && (
                       <div className="filter border xl:static md:static bg-white top-[150px] z-50 fixed w-[300px] rounded-xl h-max p-5">
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
                <input type="checkbox" id="all-filter" defaultChecked />
                <span>All</span>
              </label>
              <label className="flex gap-5 p-2 ml-5">
                <input type="checkbox" id="filter" onChange={theFilter} value='electronics' />
                <span>Electronics</span>
              </label>
              <label className="flex gap-5 p-2 ml-5">
                <input type="checkbox" id="filter"  onChange={theFilter} value='clothing' />
                <span>Clothing</span>
              </label>
              <label className="flex gap-5 p-2 ml-5">
                <input type="checkbox" id="filter"  onChange={theFilter} value='jewelery' />
                <span>Jewelery</span>
              </label>
           </div>
           <div className="price flex flex-col">
            <p className="p-2 text-x ml-5">
              Price
            </p>
            <label className="flex justify-center gap-5 p-2" >
                <span>0</span>
                <input type="range" min='0' onChange={priceChange} max='10000' />
                <span>₹ {price}</span>
            </label>
           </div>
        </div>
        ) }
       <div className="product w-full rounded-xl h-auto">
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 md:grid-cols-2">
                {data?.filter(item => ("electronics jewelery").includes(item.category)).map((item, index)=>{return(
                    <div key={item.id} className="row p-5 h-max flex border-2 flex-col gap-5">
                        <div className="">
                            <img src={item.image} alt={item.title} width='100%' />
                        </div>
                        <div className='flex flex-col gap-5 relative'>
                            <div className="text-xl w-max">
                                <p>
                                    ₹ {(item.price * rate).toFixed()}
                                </p>
                            </div>
                            <div className="text-xl font-sans">
                                <button className="text-left" onClick={()=>handleProductClick(item.id)} >
                                    <p>{item.title}</p>
                                </button>
                            </div>
                            <div className="border border-black text-sm w-max p-2 rounded bg-black text-white">
                                <button type="button" className="flex gap-2" value={item.category}>
                                    <ShoppingCart/> Add to Cart
                                </button>
                            </div>
                            <div className="text-sm font-sans">
                                <p>
                                    {item.description}
                                </p>
                            </div>
                            <div className='w-max p-2 rounded'>
                                <p className="flex gap-2">
                                    <Star style={{color:item.rating.rate < 3 ? 'orange' : 'green',fill:item.rating.rate < 3 ? 'yellow' : 'green'}}/> <span>{item.rating.rate}</span> ({item.rating.count})
                                </p>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
         </div>
         <button className='bg-blue-500 text-white fixed p-3 border rounded-lg xl:hidden md:hidden' ref={menuRef} onClick={()=>setIsOpen(!isOpen)}>
          <FilterIcon/>
         </button>
       </div>
    </>
  )
}
