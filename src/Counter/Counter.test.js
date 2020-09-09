import Counter from "./Counter";
// import { mount } from "enzyme";
import { shallow } from "enzyme";
import React from "react";
describe("Counter component", () => {
  let counter = null;

  beforeEach(() => {
    // counter = mount(<Counter />);
    counter = shallow(<Counter />);
  });

  it("Initializes by zero", () => {
    // console.log(counter.html());
    // console.log(counter.find("h1").html());
    // console.log(counter.find("h1").text());
    expect(counter.find("h1").text()).toBe("0");
    // Reactwrapper/ shallow wrapper=>$("selector") of jquery
    // expect(counter.state.value).toBe(0); //won't work
  });

  it("Increment currectly", () => {
    // console.log(counter.find("button").first().html());
    // counter.find("button").first().simulate("click");
    // counter.find("button").first().simulate("click");
    // counter.find("button").first().simulate("click");
    // counter.find("button").first().simulate("click");
    counter.find("#first-button").simulate("click");
    counter.find("#first-button").simulate("click");
    counter.find("#first-button").simulate("click");
    counter.find("#first-button").simulate("click");

    // console.log(counter.find("h1").text());
    expect(counter.find("h1").text()).toBe("4");
  });

  it("decrement currectly", () => {
    // console.log(counter.find("button").first().html());
    counter.find("#second-button").simulate("click");
    counter.find("#second-button").simulate("click");
    counter.find("#second-button").simulate("click");
    counter.find("#second-button").simulate("click");

    // console.log(counter.find("h1").text());
    expect(counter.find("h1").text()).toBe("-4");
  });

  /* it won't work
  it("Increments currectly", () => {
    counter.incr();
    counter.incr();
    counter.incr();
    counter.incr();
    expect(counter.state.value).toBe(4);
  }); */
});
