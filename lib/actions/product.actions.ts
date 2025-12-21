"use server";

import prisma from "@/lib/prisma";
import { IProduct } from "@/components/shared/product/product.models";

// Get latest products
export const getLatestProducts = async (): Promise<IProduct[]> => {
  try {
    const data = await prisma.product.findMany({
      take: 4,
      orderBy: { createdAt: "desc" },
    });

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Get product by slug
export const getProductBySlug = async (
  slug: string
): Promise<IProduct | null> => {
  try {
    const product = await prisma.product.findFirst({
      where: { slug: slug },
    });

    return product;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
