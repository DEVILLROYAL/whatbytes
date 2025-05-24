import { Star } from "lucide-react";
export default async function productPage({ params }) {
    const {slug} = await params;
    const ul = `https://fakestoreapi.com/products/${slug}`;
    const data = await fetch(ul);
    const res = await data.json();
    const rate = 83.5;
    console.log(res);

  return (
    <>
         <div className='border border-black w-full p-5 flex gap-5'>
            <div className='w-1/3'>
                <img src={res.image} alt={res.title} />
            </div>
            <div className='w-full p-5 flex flex-col gap-5 text-xl overflow-auto'>
                <div className='text-4xl flex flex-row gap-5'>
                    <div>
                        <p>
                            {res.title}
                        </p>
                    </div>
                    <div className="h-full flex flex-col justify-center">
                        <p className='text-sm w-max h-11 p-2 bg-gray-600 text-white'>
                            {res.category}
                        </p>
                    </div>
                </div>
                <div className="text-xl w-max h-max">
                    <p className="text-green-700 font-bold text-sm">
                        Special Price
                    </p>
                    <p>
                        ₹ <span className='font-bold'>{(res.price * rate).toFixed()}</span>
                    </p>
                    <p className="font-thin text-sm">
                        Free Delivery
                    </p>
                </div>
                <div className="">
                    <button type="button" className='text-sm w-max p-2 rounded bg-black text-white' value={res.category}>
                        Add to Cart
                    </button>
                </div>
                <div className=' w-6/12 font-sans font-light'>
                    <p>
                        {res.description}
                    </p>
                </div>
                <div className='w-max rounded'>
                    <p className="flex gap-2">
                        <Star style={{color:res.rating.rate < 3 ? 'orange' : 'green',fill:res.rating.rate < 3 ? 'yellow' : 'green'}}/> <span>{res.rating.rate}</span> ({res.rating.count})
                    </p>
                </div>
            </div>
         </div>
    </>
  )
}
