import React, { useContext } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { productContext } from "../context/Context";

function Products() {
  const { data, user } = useContext(productContext);
  console.log(data);
  return (
    <>
      <Navbar />
      <div>cards</div>
      <div className="flex flex-wrap gap-10">
        {data.length > 0
          ? data?.map((item, index) => <Card key={index} productData={item} />)
          : "Loading.."}
      </div>
    </>
  );
}

export default Products;
