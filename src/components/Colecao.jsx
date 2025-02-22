import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopcontext";
import Title from "./Title";
import ProdutoItem from "./ProdutoItem";

const Colecao = () => {
  const { products } = useContext(ShopContext);
  const [ultimosProdutos, setUltimosProdutos] = useState([]);

  useEffect(() => {
    setUltimosProdutos(products.slice(0, 10));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Últimas"} text2={"Novidades"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Acabou de chegar! Descubra a nova coleção que vai transformar seu visual.
        </p>
      </div>
      {/*PRODUTOS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {ultimosProdutos.map((item, index) => (
          <ProdutoItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Colecao;
