import React from "react";
import StrategyList from "./StrategyList";
import { shallow } from "enzyme";

function renderCourseForm(args) {

    const initialState = 
    [
      {
        id: 1,
        name: 'S&P 500 ®',
        options: [
          {
            years: 1,
            value: '6.10'
          }
        ]
      },
      {
        id: 2,
        name: 'MSCI EAFE Index',
        options: [
          {
            years: 1,
            value: '6.15'
          }
        ]
      },
      {
        id: 3,
        name: 'Dow Jones U.S. Real Estate Index',
        options: [
          {
            years: 1,
            value: '6.50'
          }
        ]
      },
      {
        id: 4,
        name: 'Bloomberg Commodity Index',
        options: [
          {
            years: 1,
            value: '6.15'
          }
        ]
      }
    ]
  ;

  const defaultProps = {
    strategies: initialState,
    onPercentEnter: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<StrategyList {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderCourseForm();
  // console.log(wrapper.debug());
  expect(wrapper.find("table").length).toBe(1);
  
});

