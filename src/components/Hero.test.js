import React from "react";
import { render } from "@testing-library/react";

import Hero from "./Hero";

test("renders Hero with children", () => {
    //const { debug, getByText } = render(
    const { getByText } = render(
        <Hero>
            <p>Carlos Henrique</p>
        </Hero>
    );

    //debug();

    //expect(getByText("Carlos Henrique")).toBeTruthy();
    expect(getByText("Carlos Henrique")).toBeInTheDocument();
});

test("renders image background", () => {
    const image = "http://www.webreports.com.br/t.jpg";

    const { getByTestId } = render(<Hero image={image} />);

    expect(getByTestId("hero")).toHaveStyleRule({
        backgroundImage: image,
    });
});
