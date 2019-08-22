import * as actions from './apiStatusActions';
import * as types from './actionTypes'
import * as assestactions  from './assestActions';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const assests = [
    {
      id: 1,
      name: "S&P 500 ®",
      options: [{ years: 1, value: "6.10" }]
    }
  ];
  
describe('Api actions', () => {
  it('should create an action to begin api call', () => {
    const text = 'BEGIN_API_CALL'
    const expectedAction = {
      type: types.BEGIN_API_CALL
    }
    expect(actions.beginApiCall(text)).toEqual(expectedAction)
  })

  it('should create an action to begin api call error', () => {
    const text = 'API_CALL_ERROR'
    const expectedAction = {
      type: types.API_CALL_ERROR
    }
    expect(actions.apiCallError(text)).toEqual(expectedAction)
  })
})


describe("Async Actions", () => {
    afterEach(() => {
      fetchMock.restore();
    });
  
    describe("Load Assest Thunk", () => {
      it("should create BEGIN_API_CALL and LOAD_ASSESTT_SUCCESS when loading assest", () => {
        fetchMock.mock("*", {
          body: assests,
          headers: { "content-type": "application/json" }
        });
  
        const expectedActions = [
          { type: types.BEGIN_API_CALL },
          { type: types.LOAD_ASSETS_SUCCESS,"assests":[  {
            id: 1,
            name: "S&P 500 ®",
            options: [{ years: 1, value: "6.10" }]
          }]}
        ];
  
        const store = mockStore({ assests: [] });
        return store.dispatch(assestactions.loadAssest()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });


    describe("Load Assest Thunk", () => {
      it("should create a CREATE_COURSE_SUCCESS action", () => {
        //arrange
        const assests = {"id":1,"val":1};
        const expectedAction = {
          type: types.ON_PERCENT_ENTER_SUCCESS,
          assests
        };
    
        //act
        const action = assestactions.onPercentEnterSuccess(assests);
    
        //assert
        expect(action).toEqual(expectedAction);
      });
      });
    });

  
