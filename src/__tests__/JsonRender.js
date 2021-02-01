import React from "react";
import ReactDOM from "react-dom";
import JsonRenderer from "../JsonRenderer";
import { render, screen } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <JsonRenderer
      json={{ component: "h1", props: null, children: "Hello World" }}
    />,
    div
  );
});

test("renders hello World", () => {
  render(
    <JsonRenderer
      json={{ component: "h1", props: null, children: "Hello World" }}
    />
  );
  const textElement = screen.getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});
