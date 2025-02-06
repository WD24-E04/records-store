export const recordsInitialState = {
  records: [],
};

export const recordsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_RECORDS_SUCCESS":
      return {
        records: action.payload,
      };

    default:
      return state;
  }
};
