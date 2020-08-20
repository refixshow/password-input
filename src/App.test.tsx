import React from "react";
import ReactDOM from "react-dom";
import PasswordInput from "./PasswordInput";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const password = "123";
const onSucces = jest.fn();

describe("Testing PasswordInput Renders", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <PasswordInput password={password} onSucces={onSucces} />,
      div
    );
  });

  it("renders passwordInput correctly", async () => {
    const { getByText } = render(
      <PasswordInput password={password} onSucces={onSucces} />
    );

    expect(getByText("Submit")).toBeInTheDocument();
  });
});
