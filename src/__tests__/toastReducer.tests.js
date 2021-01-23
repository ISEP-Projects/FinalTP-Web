import { toastReducer } from "../reducers/toastReducer";

describe("Mercs Reducer Testing", () => {
  test("Default values ", () => {
    expect(toastReducer(undefined, {})).toEqual({
        content: "",
        show: false,
    });
  });

  test("Set toast content", () => {
    const content = "Test";
    const action = {
      type: "SET_TOAST",
      payload: content,
    };

    expect(toastReducer({}, action)).toEqual({
      content: content,
    });
  });

  test("Show toast", () => {
      const show = true
    const action = {
      type: "SHOW_TOAST",
      payload: show
    };

    expect(toastReducer({}, action)).toEqual({
      show: show,
    });
  });

});
