import React from "react";
import ReactDOM from "react-dom";
import UserMenu from "../components/UserMenu";

test("renders with the right menu items", () => {
  //arrange
  const container = document.createElement("div");
  ReactDOM.render(<UserMenu.WrappedComponent username={null} />, container);
  //act

  //assert
  expect(container.textContent).toMatch("StudentActionsLogout");
});
