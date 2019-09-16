import React from "react";
import { shallow } from "enzyme";
import AdminPanel from "../components/AdminPanel";

it("renders without crashing", () => {
  shallow(<AdminPanel />);
});
