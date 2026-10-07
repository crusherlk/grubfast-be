import { prisma } from "../../db/prisma.ts";

export const findAllProductService = async () => {
  const products = await prisma.product.findMany();
  return products;
};

export const createProductService = async (name: string) => {
  const product = await prisma.product.create({
    data: {
      name: name
    }
  });
  return product;
};
