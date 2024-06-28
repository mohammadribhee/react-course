import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [Product, setProduct] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching Product in", category);
    setProduct(["clothing", "Household"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
