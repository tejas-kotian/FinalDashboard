import React from "react";
import Toggle from "./Toggle";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";


it("contains 2 span via shallow", () => {
  const toggle =[{
    "key":"surrenderCharge",
    "value":-1
  },
  {
    "key":"intialPremium",
    "value":-1
  }]
  const numLinks = shallow(<Toggle label="Surrender Charge Period" leftText="5-Years" onToggle={() =>{}} id="surrenderCharge" toggleSelected={toggle} />).find("span").length;
  expect(numLinks).toEqual(2);
});

