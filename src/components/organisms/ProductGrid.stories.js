import React from "react";

import ProductGrid from "./ProductGrid";
import { buildProductList } from "models/builders/products";

const story = {
    title: "Components/Organisms/ProductGrid",
    component: ProductGrid,
};

export default story;

export const usage = () => <ProductGrid products={buildProductList(6)} />;
