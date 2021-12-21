import {
  GET_SERVICE_REQUEST,
  GET_SERVICE_FAILURE,
  GET_SERVICE_SUCCESS,
} from "../actions/actionTypes";

const initial_state = {
  item: null,
  loading: false,
  error: null,
};

export default function serviceViewReducer(state = initial_state, action) {
  switch (action.type) {
    case GET_SERVICE_REQUEST:
      return { ...state, item: null, loading: true, error: null };
    case GET_SERVICE_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case GET_SERVICE_SUCCESS:
      const { item } = action.payload;
      return { ...state, item, loading: false, error: null };
    default:
      return state;
  }
}