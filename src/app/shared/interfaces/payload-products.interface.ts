import { Products } from "./product.interface";

export type ProductsPayload = Omit<Products,'id'>