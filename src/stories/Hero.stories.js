import React from "react";

import Hero from "../components/Hero";
import BgHighwayImage from "./assets/bg-highway.jpg";
import BgCarImage from "./assets/bg-car.jpg";

export const usage = () => (
    <Hero title="Ganhe sua liberdade para ir e vir" image={BgHighwayImage}>
        <p>A auto escolar</p>
    </Hero>
);

export const withList = () => (
    <Hero
        title={
            <span>
                Ganhe sua <strong>liberdade</strong>
                <br /> para ir e vir
            </span>
        }
        image={BgCarImage}
    >
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        </ul>
    </Hero>
);

const teste = {
    title: "Hero",
    component: Hero,
};

export default teste;
