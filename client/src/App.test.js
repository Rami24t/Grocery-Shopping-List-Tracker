import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import ContextProvider from "./components/Context";

//jest.setTimeout(10000);

test("renders title", () => {
  render(
    <ContextProvider>
      <App />
    </ContextProvider>
  );
  const h1Element = screen.getByText(/Grocery Shopping List/);
  expect(h1Element).toBeInTheDocument();
});
