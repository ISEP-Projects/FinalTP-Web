import { mercsReducer } from "../reducers/mercsReducer";

describe("Mercs Reducer Testing", () => {
  test("Default values ", () => {
    expect(mercsReducer(undefined, {})).toEqual({
      isLoading: true,
      errMess: null,
      mercs: [],
      showForm: false,
    });
  });

  test("save mercs", () => {
    const mercs = "Morgan Blackhand";
    const action = {
      type: "SAVE_MERCS",
      payload: mercs,
    };

    expect(mercsReducer({}, action)).toEqual({
      isLoading: false,
      errMess: null,
      mercs: mercs,
    });
  });

});
