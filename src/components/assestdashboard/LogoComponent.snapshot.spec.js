import React from "react";
import LogoComponent from "./LogoComponent";
import renderer from "react-test-renderer";



it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <LogoComponent></LogoComponent>
  );

  expect(tree).toMatchSnapshot();
});

