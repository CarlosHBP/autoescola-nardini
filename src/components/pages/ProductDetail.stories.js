import React from "react";

import ProductDetail from "./ProductDetail";
import { buildProduct } from "models/builders/products";

const story = {
    title: "Components/Pages/ProductDetail",
    component: ProductDetail,
};

export default story;

export const usage = () => (
    <ProductDetail product={buildProduct()}></ProductDetail>
);
