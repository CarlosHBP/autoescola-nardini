import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";
import { buildProduct } from "models/builders/products";

const product = buildProduct();

test("renders Product Detail page", () => {
    render(<ProductDetail product={product} />);
    expect(
        screen.getByText(`${product.title}`, { selector: "h1" })
    ).toBeInTheDocument();
});
