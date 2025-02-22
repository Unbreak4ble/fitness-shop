import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopcontext";
import Title from "./Title";
import ProdutoItem from "./ProdutoItem";

const Bestsellers = () => {
  const { products } = useContext(ShopContext);
  const [Bestsellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSellers(bestProduct.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"Mais"} text2={"Vendidos"} />
        <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600">
          Os favoritos dos nossos clientes! Não perca os itens que estão
          conquistando corações
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {Bestsellers.map((item, index) => (
          <ProdutoItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
