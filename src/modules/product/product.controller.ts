import { Request, Response } from "express";
import { httpStatus } from "../../constants/https.status.ts";
import {
  createProductService,
  findAllProductService
} from "./product.service.ts";

export const findAllProductsController = async (
  req: Request,
  res: Response
) => {
  try {
    const products = await findAllProductService();
    res.status(httpStatus.OK).json(products);
  } catch (e) {
    res.status(httpStatus.BAD_REQUEST).send(e);
  }
};

export const createProductController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const product = await createProductService(name);
    res.status(httpStatus.OK).send(product);
  } catch (e) {
    res.status(httpStatus.BAD_REQUEST).send(e);
  }
};
