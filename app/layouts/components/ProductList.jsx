import { Star } from "lucide-react";

export default async function ProductList() {

    const ul = "https://fakestoreapi.com/products";
    const data = await fetch(ul);
    const res = await data.json();
    const rate = 83.5;
    console.log(res);
    
  return (
    <>
        <div className="product w-full rounded-xl h-auto">
            <div className="grid grid-cols-3 gap-5 ">
                {res.map((item, index)=>{return(
                    <div key={item.id} className="row border border-black p-5 flex flex-col gap-5">
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
                                <p>
                                    {item.title}
                                </p>
                            </div>
                            <div className="border border-black w-max p-2 rounded bg-black text-white">
                                <button type="button" value={item.category}>
                                    Add to Cart
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
    </>
  )
}
