import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  GET_SERVICE_REQUEST,
  GET_SERVICE_FAILURE,
  GET_SERVICE_SUCCESS,
} from "./actionTypes";

export function fetchServicesRequest() {
  return { type: FETCH_SERVICES_REQUEST };
}

export function fetchServicesFailure(error) {
  return { type: FETCH_SERVICES_FAILURE, payload: { error } };
}

export function fetchServicesSuccess(items) {
  return { type: FETCH_SERVICES_SUCCESS, payload: { items } };
}

export function getServiceRequest(id) {
  return { type: GET_SERVICE_REQUEST, payload: {id} };
}

export function getServiceFailure(error) {
  return { type: GET_SERVICE_FAILURE, payload: { error } };
}

export function getServiceSuccess(item) {
  return { type: GET_SERVICE_SUCCESS, payload: { item } };
}