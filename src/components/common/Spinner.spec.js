import React from "react";
import Spinner from "./Spinner";
import { shallow } from "enzyme";


it("contains 1 Div container via shallow", () => {
  
  const numDivs = shallow(<Spinner></Spinner>).find("div").length;
  expect(numDivs).toEqual(1);
});``

