import { Router, Request, Response } from "express";
import productRouter from "./modules/product/product.routes.ts";

const router = Router();

router.use("/hc", (req: Request, res: Response) => {
  res.status(200).json({ message: "Health check success ✅" });
});

// router-list
// TODO: remove after nuwan KT
router.use("/product", productRouter);

export default router;
