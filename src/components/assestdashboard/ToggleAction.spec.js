import React from "react";
import { mount } from "enzyme";
import ToggleAction  from "./ToggleAction";
import { wrap } from "module";

function render(args) {
  const state =[{
    "key":"surrenderCharge",
    "value":1
  },
  {
    "key":"intialPremium",
    "value":-1
  }]
  const defaultProps = {
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    handleSelectedToggle: jest.fn(),
    toggleSelected:state
    
  };

  const props = { ...defaultProps, ...args };

  return mount(<ToggleAction {...props} />);
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  //console.log(wrapper);
  //wrapper.find("form").simulate("submit");
  //const error = wrapper.find(".alert").first();
  const div = wrapper.find(".col-md-12").first();
  expect(div.text()).toBe("Surrender Charge Period 5-Years10-YearsIntial Premium 25K-100K100K+");
});
