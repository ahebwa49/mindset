import React from "react";
import ReactDOM from "react-dom";

import MobileMenu from "../components/MobileMenu";

test("renders with the right menu items", () => {
  const container = document.createElement("div");
  ReactDOM.render(<MobileMenu.WrappedComponent user={null} />, container);
  expect(container.textContent).toMatch("HomeAboutServicesContact");
});
