import React from "react";
import { shallow, mount } from "enzyme";
import ContextComposer from "../index";

let Context: React.Context<any>;

beforeEach(() => {
  Context = React.createContext({ value: 0 });
});

describe("component test", () => {
  it("component could be updated and unmounted without errors", () => {
    const wrapper = mount(<ContextComposer contexts={[]} />);
    expect(() => {
      wrapper.setProps({});
      wrapper.unmount();
    }).not.toThrow();
  });
  it("The nesting order of providers could be correct", () => {
    const provider1 = <Context.Provider value={1} />;
    const provider2 = <Context.Provider value={2} />;
    const provider3 = <Context.Provider value={3} />;
    const wrapper = shallow(
      <ContextComposer contexts={[provider1, provider2, provider3]} />
    );

    expect(wrapper.children.length).toBe(1);
    expect(wrapper.childAt(0).prop('value')).toBe(1);

    expect(wrapper.childAt(0).children.length).toBe(1);
    expect(wrapper.childAt(0).childAt(0).prop('value')).toBe(2);

    expect(wrapper.childAt(0).childAt(0).children.length).toBe(1);
    expect(wrapper.childAt(0).childAt(0).childAt(0).prop('value')).toBe(3);

    expect(wrapper).toMatchSnapshot();

  });
});
