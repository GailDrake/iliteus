import React from 'react';
import renderer from "react-test-renderer"
import History from "../History"


describe("History", () =>{
    it("Renders correctly", ()=>{
        const tree = renderer.create(<History />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});