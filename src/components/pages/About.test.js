import React from "react";
import { render, screen } from "test-utils";

import About from "./About";

//Para que cada teste considere uma chamada diferente (o toBeCalledTimes poderia ser considerado em cada chamada)
beforeEach(() => {
    jest.resetAllMocks();
});

test("renders About page", () => {
    render(<About />);
    expect(screen.getByText(/auto escola nardini/i)).toBeInTheDocument();
});

test("scrolls to top in first render", () => {
    render(<About />);
    expect(window.scrollTo).toBeCalledTimes(1);
});
