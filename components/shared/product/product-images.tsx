"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ProductImages = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[currentImage]}
        alt="Product Image"
        height={1000}
        width={1000}
        className="min-h-[300] object-cover object-center"
        priority={true}
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600",
              index === currentImage ? "border-blue-500 border" : ""
            )}
            onClick={() => setCurrentImage(index)}
          >
            <Image src={image} alt="Image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
