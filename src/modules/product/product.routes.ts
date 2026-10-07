import { Router } from "express";
import {
  createProductController,
  findAllProductsController
} from "./product.controller.ts";

const router = Router();

router.get("/find-all", findAllProductsController);
router.post("/create", createProductController);

export default router;
