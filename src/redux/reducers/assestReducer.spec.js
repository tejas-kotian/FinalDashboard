import assestReducer from "./assestReducer";
import * as actions from "../actions/assestActions";

it("should add course when passed CREATE_COURSE_SUCCESS", () => {
  // arrange
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

  /*const newCourse = {
    title: "C"
  };*/

  const action = actions.onPercentEnterSuccess({id:1,val:1});

  // act
  const newState = assestReducer(initialState, action);
  
  // assert
  expect(newState.length).toEqual(4);
  //expect(newState[0].val).toEqual(1);
});

