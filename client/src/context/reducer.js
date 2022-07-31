import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_VEHICLE_BEGIN,
  CREATE_VEHICLE_SUCCESS,
  CREATE_VEHICLE_ERROR,
  GET_VEHICLES_BEGIN,
  GET_VEHICLES_SUCCESS,
  SET_EDIT_VEHICLE,
  DELETE_VEHICLE_BEGIN,
  EDIT_VEHICLE_BEGIN,
  EDIT_VEHICLE_SUCCESS,
  EDIT_VEHICLE_ERROR,
} from "./actions";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      vehicleLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: "",
      vehicleLocation: "",
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      vehicleLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return { ...state, [action.payload.name]: action.payload.value };
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editVehicleId: "",
      make: "",
      registration: "",
      chassisNumber: "",
      insuranceDate: "",
      attachedTo: "",
      vehicleLocation: state.userLocation,
      year: "2003",
      status: "pending",
    };
    return { ...state, ...initialState };
  }

  if (action.type === CREATE_VEHICLE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_VEHICLE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Vehicle Created!",
    };
  }
  if (action.type === CREATE_VEHICLE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === GET_VEHICLES_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_VEHICLES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      vehicles: action.payload.vehicles,
      totalVehicles: action.payload.totalVehicles,
      numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === SET_EDIT_VEHICLE) {
    const vehicle = state.vehicles.find(
      (vehicle) => vehicle._id === action.payload.id
    );
    const {
      _id,
      make,
      registration,
      chassisNumber,
      insuranceDate,
      attachedTo,
      vehicleLocation,
      year,
      status,
    } = vehicle;
    return {
      ...state,
      isEditing: true,
      editVehicleId: _id,
      make,
      registration,
      chassisNumber,
      insuranceDate,
      attachedTo,
      vehicleLocation,
      year,
      status,
    };
  }

  if (action.type === DELETE_VEHICLE_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === EDIT_VEHICLE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_VEHICLE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Vehicle Updated!",
    };
  }
  if (action.type === EDIT_VEHICLE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  throw new Error(`no such action :${action.type}`);
};

export default reducer;
