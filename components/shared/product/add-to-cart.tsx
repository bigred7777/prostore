"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { CartItem } from "@/types";
import { addItemToCart } from "@/lib/actions/cart.actions";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);
    } else {
      toast.success("Added to cart", {
        action: {
          label: "Go to Cart",
          onClick: () => router.push("/cart"),
        },
      });
    }
  };

  return (
    <Button
      className="w-full hover:cursor-pointer"
      type="button"
      onClick={handleAddToCart}
    >
      <Plus /> Add to Cart
    </Button>
  );
};

export default AddToCart;
