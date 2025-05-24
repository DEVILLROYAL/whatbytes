import ProductFilter from "./components/ProductFilter";
import ProductList from "./components/ProductList";

export default async function Main() {

    const ul = "https://fakestoreapi.com/products";
    const data = await fetch(ul);
    const res = await data.json();

  return (
    <>
       <div className="main w-full border border-black h-full p-5 flex gap-5">
        <ProductFilter/>
        <ProductList data={res}/>
       </div>
    </>
  )
}
