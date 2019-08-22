import React from "react";
import TotalAllocation from "./TotalAllocation";
import renderer from "react-test-renderer";


it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <TotalAllocation allocation={100} onConfirm={()=>{}} onReset={()=>{}}></TotalAllocation>
  );

  expect(tree).toMatchSnapshot();
});

