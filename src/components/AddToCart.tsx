"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/Button";
import { urlFor } from "@/sanity/lib/image";
import { toast } from "react-toastify";

interface ProductCartProps {
  name: string;
  price: number;
  images: string;
  btnName: string;
  currency:string
}

const AddToCart = ({
  currency,
  name,
  price,
  images,
  btnName,
 
}: ProductCartProps) => {
  const { addItem } = useShoppingCart();

  const product = {
    name: name,
    price: price,
    image: urlFor(images).url(),
    currency: currency,
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
        {
          toast.success(`${product.name} has been added to your cart!`, {
            position: "bottom-right",
            autoClose: 3000, // Duration of the toast
            style: {
              backgroundColor: "black",
              color: "white",
              fontSize: "16px",
              borderRadius: "8px",
            },
          });
        }
      }}
    >
      {btnName}
    </Button>
  );
};

export default AddToCart;