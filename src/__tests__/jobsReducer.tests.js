import { jobsReducer } from "../reducers/jobsReducer";

describe("Jobs Reducer Testing", () => {
  test("Defualt values", () => {
    expect(jobsReducer(undefined, {})).toEqual({
      isLoading: true,
      errMess: null,
      jobs: [],
      showForm: false,
    });
  });

  test("Save jobs", () => {
    const jobs = "Simple theft";
    const action = {
      type: "SAVE_JOBS",
      payload: jobs,
    };

    expect(jobsReducer({}, action)).toEqual({
      isLoading: false,
      errMess: null,
      jobs: jobs,
    });
  });

  test("Mercs loading", () => {
    const action = {
      type: "JOBS_LOADING",
    };

    expect(jobsReducer({}, action)).toEqual({
      isLoading: true,
      errMess: null,
      jobs: [],
    });
  });

  test("Jobs failed", () => {
    const errMess = "jobs failed"
    const action = {
      type: "JOBS_FAILED",
      payload: errMess
    };

    expect(jobsReducer({}, action)).toEqual({
      isLoading: false,
      errMess: errMess,
    });
  });

  test("Show add form", () => {
    const show = true
    const action = {
      type: "SHOW_ADD_JOB_FORM",
      payload: show
    };

    expect(jobsReducer({}, action)).toEqual({
      showForm: show,
    });
  });
});
