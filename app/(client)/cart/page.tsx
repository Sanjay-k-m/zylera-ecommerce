"use client";
import Container from "@/components/Container";
import Loading from "@/app/(client)/Loading";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    

   return <Loading />
    }
  return <div>helllooo Cart</div>;
};

export default CartPage;
