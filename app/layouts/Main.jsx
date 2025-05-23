import ProductFilter from "./components/ProductFilter";
import ProductList from "./components/ProductList";

export default function Main() {
  return (
    <>
       <div className="main w-full border border-black h-full p-5 flex gap-5">
        <ProductFilter/>
        <ProductList/>
       </div>
    </>
  )
}
