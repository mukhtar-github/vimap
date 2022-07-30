import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
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
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  showSidebar: false,
  isEditing: false,
  editVehicleId: "",
  make: "",
  registration: "",
  chassisNumber: "",
  insuranceDate: "",
  attachedTo: "",
  vehicleLocation: userLocation || "",
  statusOptions: ["allocated", "auctioned", "pending"],
  status: "pending",
  yearOptions: [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ],
  year: "2003",
  vehicles: [],
  totalVehicles: 0,
  numOfPages: 1,
  page: 1,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  // request interceptor
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response);
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({
      type: DISPLAY_ALERT,
    });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("location");
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );

      const { user, token, location } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);

      const { user, location, token } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });

      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const handleChange = ({ name, value }) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: { name, value },
    });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createVehicle = async () => {
    dispatch({ type: CREATE_VEHICLE_BEGIN });
    try {
      const {
        make,
        registration,
        chassisNumber,
        insuranceDate,
        attachedTo,
        vehicleLocation,
        year,
        status,
      } = state;

      await authFetch.post("/vehicles", {
        make,
        registration,
        chassisNumber,
        insuranceDate,
        attachedTo,
        vehicleLocation,
        year,
        status,
      });
      dispatch({
        type: CREATE_VEHICLE_SUCCESS,
      });
      // call function instead clearValues()
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_VEHICLE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getVehicles = async () => {
    let url = `/vehicles`;

    dispatch({ type: GET_VEHICLES_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { vehicles, totalVehicles, numOfPages } = data;
      dispatch({
        type: GET_VEHICLES_SUCCESS,
        payload: {
          vehicles,
          totalVehicles,
          numOfPages,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const setEditVehicle = (id) => {
    dispatch({ type: SET_EDIT_VEHICLE, payload: { id } });
  };

  const editVehicle = () => {
    console.log("edit vehicle");
  };

  const deleteVehicle = async (vehicleId) => {
    dispatch({ type: DELETE_VEHICLE_BEGIN });
    try {
      await authFetch.delete(`/vehicles/${vehicleId}`);
      getVehicles();
    } catch (error) {
      logoutUser();
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createVehicle,
        getVehicles,
        setEditVehicle,
        deleteVehicle,
        editVehicle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
