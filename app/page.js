import Main from "./layouts/Main";

export default async function Home() {

try{
    const ul = "https://fakestoreapi.com/products";
    const data = await fetch(ul);
    const res = await data.json();
    return (
      <Main data={res} />
    );
} catch(error) {
  console.log(error);
}

  return (
    <>
    </>
  );
}
