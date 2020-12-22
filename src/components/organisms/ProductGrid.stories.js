import React from "react";

import ProductGrid from "./ProductGrid";
import PlaceholderImage from "stories/assets/card-placeholder.jpg";

const story = {
    title: "Components/Organisms/ProductGrid",
    component: ProductGrid,
};

export default story;

export const usage = () => (
    <ProductGrid
        products={[
            {
                id: 1,
                image: PlaceholderImage,
                title: "Título 1",
                summary: "Texto",
            },
            {
                id: 2,
                image: PlaceholderImage,
                title: "Título 2",
                summary: "Texto 2",
            },
            {
                id: 3,
                image: PlaceholderImage,
                title: "Título 3",
                summary: "Texto",
            },
            {
                id: 4,
                image: PlaceholderImage,
                title: "Título 4",
                summary: "Texto",
            },
            {
                id: 5,
                image: PlaceholderImage,
                title: "Título 5",
                summary: "Texto",
            },
            {
                id: 6,
                image: PlaceholderImage,
                title: "Título 6",
                summary: "Texto",
            },
        ]}
    />
);
