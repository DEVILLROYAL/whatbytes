export default async function ProductList() {

    const ul = "https://fakestoreapi.com/products";
    const data = await fetch(ul);
    const res = await data.json();
    const rate = 83.5;
    console.log(res);
    
  return (
    <>
        <div className="product border border-black w-full rounded-xl h-auto p-5">
            <div className="grid grid-cols-3 border gap-5 border-black">
                {res.map((item, index)=>{return(
                    <div key={item.id} className="row border border-black p-5 flex flex-col justify-between gap-5">
                        <div className="">
                            <img src={item.image} alt={item.title} width='100%' />
                        </div>
                        <div className="border border-black">
                            <p>
                                ₹ {(item.price * rate).toFixed(2)}
                            </p>
                        </div>
                        <div>
                            <p className="border border-black font-serif" >
                                {item.title}
                            </p>
                        </div>
                        <div className="border border-black">
                            <button type="button" className="btn" value={item.category}>
                                Add to Cart
                            </button>
                        </div>
                        <div>
                            <p>
                                Rating: {item.rating.rate}
                            </p>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    </>
  )
}
