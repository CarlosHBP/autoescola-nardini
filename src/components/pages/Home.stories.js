import React from "react";

import Home from "./Home";
import { buildProductList } from "models/builders/products";

const story = {
    title: "Components/Pages/Home",
    component: Home,
};

export default story;

const products = buildProductList(8);

export const usage = () => <Home products={products} />;
