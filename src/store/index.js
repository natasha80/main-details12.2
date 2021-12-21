import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { fetchServicesEpic, getServiceEpic } from "../epics";
import serviceListReducer from "../reducers/serviceList";
import serviceViewReducer from "../reducers/serviceView";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceView: serviceViewReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(fetchServicesEpic, getServiceEpic);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

export default store;