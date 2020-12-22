import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

const story = {
    title: "Components/Atoms/Accordion",
    component: Accordion,
};

export default story;

export const usage = () => (
    <>
        <Accordion title="Como eu renovo minha CNH?">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            nostrum, tenetur illum sapiente porro qui alias aliquid nisi
            deleniti repudiandae ab similique consectetur eveniet, saepe aut
            debitis. Veritatis, magnam deleniti!
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            nostrum, tenetur illum sapiente porro qui alias aliquid nisi
            deleniti repudiandae ab similique consectetur eveniet, saepe aut
            debitis. Veritatis, magnam deleniti!
        </Accordion>
        <Accordion title="Fui multado, e agora?">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            nostrum, tenetur illum sapiente porro qui alias aliquid nisi
            deleniti repudiandae ab similique consectetur eveniet, saepe aut
            debitis. Veritatis, magnam deleniti!
        </Accordion>
    </>
);

export const withGroup = () => (
    <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            nostrum, tenetur illum sapiente porro qui alias aliquid nisi
            deleniti repudiandae ab similique consectetur eveniet, saepe aut
            debitis. Veritatis, magnam deleniti!
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            nostrum, tenetur illum sapiente porro qui alias aliquid nisi
            deleniti repudiandae ab similique consectetur eveniet, saepe aut
            debitis. Veritatis, magnam deleniti!
        </Accordion>
        <Accordion title="Fui multado, e agora?">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            nostrum, tenetur illum sapiente porro qui alias aliquid nisi
            deleniti repudiandae ab similique consectetur eveniet, saepe aut
            debitis. Veritatis, magnam deleniti!
        </Accordion>
    </AccordionGroup>
);
