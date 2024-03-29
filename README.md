# Vimap

As a Fleet Manager at the Organization where I work, the challenge of going through archives to get vehicle information for updates was time-consuming. As a result of that challenge, the idea of VIMAP, an acronym for Vehicles Information Management Application, came up to provide a solution to replace the hard copies method of saving and updating vehicle information with a simple application to save, access, and update vehicle information. The software's features are; but are not limited to the Collection and Storage of Vehicles Information, Inventory, GPS tracking, and Insurance updates.

#### Slogan - Vehicle Information at a Glance

Project in Action - [vimap](https://www.vimap.io/)

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:3000/

#### Setup React App

- create <b>client</b> folder
- open terminal

```sh
cd client
```

```sh
npx create-react-app .
```

```sh
npm start
```

- set editor/browser side by side
- copy/paste assets from complete project

#### Spring Cleaning

- in src remove
- App.css
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- fix App.js and index.js

#### Title and Favicon

- change title in public/index.html
- replace favicon.ico in public
- resource [Generate Favicons](https://favicon.io/)

#### Normalize.css and Global Styles

- CSS in JS (styled-components)
- saves times on the setup
- less lines of css
- speeds up the development
- normalize.css
- small CSS file that provides cross-browser consistency in the default styling of HTML elements.
- [normalize docs](https://necolas.github.io/normalize.css/)

```sh
npm install normalize.css
```

- import 'normalize.css' in index.js
- SET BEFORE 'index.css'
- replace contents of index.css
- if any questions about normalize or specific styles
- Coding Addict - [Default Starter Video](https://youtu.be/UDdyGNlQK5w)
- Repo - [Default Starter Repo](https://github.com/john-smilga/default-starter)

#### Landing Page

- zoom level 175%
- markdown preview extension
- get something on the screen
- react router and styled components right after
- create pages directory in the source
- for now Landing.js
- create component (snippets extension)
- setup basic return

```js
<h4>Landing Page<h4>
```

- import logo.svg and main.svg
- import Landing in App.js and render

#### Styled Components

- CSS in JS
- Styled Components
- have logic and styles in component
- no name collisions
- apply javascript logic
- [Styled Components Docs](https://styled-components.com/)
- [Styled Components Course](https://www.udemy.com/course/styled-components-tutorial-and-project-course/?referralCode=9DABB172FCB2625B663F)

```sh
npm install styled-components
```

```js
import styled from "styled-components";

const El = styled.el`
  // styles go here
`;
```

- no name collisions, since unique class
- vscode-styled-components extension
- colors and bugs
- style entire react component

```js
const Wrapper = styled.el``;

const Component = () => {
  return (
    <Wrapper>
      <h1> Component</h1>
    </Wrapper>
  );
};
```

- only responsible for styling
- wrappers folder in assets

#### Logo and Images

- logo built in Figma
- [Cool Images](https://undraw.co/)

#### Logo

- create <b>components</b> folder in source
- create Logo.js
- move import and image logic
- export as default
- utilize index.js

#### React Router

- Version 6
- [React Router Docs](https://reactrouter.com/docs/en/v6)

```sh
npm install history@5 react-router-dom@6
```

- import four components

```js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```

- Connect to browser's URL with BrowserRouter
- Routes instead of Switch

```js

<BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Dashboard</div>} />
      <Route path="/register" element={<div>Register</div>} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<div>Error</div>}>
    </Routes>
</BrowserRouter>

```

```js
<nav>
  <Link to="/">Dashboard</Link>
  <Link to="/register">Register</Link>
  <Link to="/landing">Home</Link>
</nav>
```

- go to Landing.js

```js
import { Link } from "react-router-dom";

return (
  <Link to="/register" className="btn btn-hero">
    Login / Register
  </Link>
);
```

#### Setup Pages

- create Error, Register, Dashboard pages
- basic return
- create index.js
- import all the pages
- export one by one
- basically the same, as in components
- import App.js
- add to element={}
- remove temp navbar

#### Error Page

```js
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

return (
  <Wrapper className="full-page">
    <div>
      <img src={img} alt="not found" />
      <h3>text</h3>
      <p>text</p>
      <Link to="/">back home</Link>
    </div>
  </Wrapper>
);
```

#### Auto Imports

- use while developing
- only sparingly while recording
- better picture
- messes with flow
- just my preference
- still use them, just not all the time

#### Register Page - Setup

- show preview in Browser and themes

```js
import { useState, useEffect } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
// global context and useNavigate later

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
// if possible prefer local state
// global state

function Register() {
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {/* name field */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>

          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
}
```

#### FormRow Component

- create FormRow.js in <b>components</b>
- setup import/export
- setup one for email and password
- hint "type,name,value"

```js
const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
```

#### Alert Component

- right away setup as component
- create Alert.js in <b>components</b>

```js
const Alert = () => {
  return <div className="alert alert-danger">alert goes here</div>;
};

export default Alert;
```

- setup import/export
- alert-danger or alert-success
- eventually setup in global context
- showAlert in initialState (true || false)
- right after h3 login

```js
values.showAlert && <Alert />;
```

#### Toggle Member

```js
const toggleMember = () => {
  setValues({ ...values, isMember: !values.isMember });
};

return (
  <Wrapper>
    {/* control h3 */}

    <h3>{values.isMember ? "Login" : "Register"}</h3>

    {/* toggle name */}

    {!values.isMember && (
      <FormRow
        type="text"
        name="name"
        value={values.name}
        handleChange={handleChange}
      />
    )}

    {/* right after submit btn */}
    {/* toggle button */}

    <p>
      {values.isMember ? "Not a member yet?" : "Already a member?"}

      <button type="button" onClick={toggleMember} className="member-btn">
        {values.isMember ? "Register" : "Login"}
      </button>
    </p>
  </Wrapper>
);
```

#### Global Context

- in src create <b>context</b> directory
- actions.js
- reducer.js
- appContext.js

```js
import React, { useState, useReducer, useContext } from "react";

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
```

- index.js

```js
import { AppProvider } from "./context/appContext";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

- Register.js

```js
import { useAppContext } from "../context/appContext";

const { isLoading, showAlert } = useAppContext();
```

- switch to global showAlert

#### useReducer

- [React Tutorial](https://youtu.be/iZhV0bILFb0)
- useReducer vs Redux
- multiple reducers vs one

#### Wire Up Reducer

```js
reducer.js;

const reducer = (state, action) => {
  throw new Error(`no such action :${action.type}`);
};
export default reducer;
```

```js
appContext.js;

import reducer from "./reducer";

const [state, dispatch] = useReducer(reducer, initialState);
```

#### Display Alert

```js
actions.js;

export const DISPLAY_ALERT = "SHOW_ALERT";
```

- setup imports (reducer and appContext)

```js
appContext.js

const displayAlert() =>{
  dispatch({type:DISPLAY_ALERT})
}

```

```js
reducer.js;

if (action.type === DISPLAY_ALERT) {
  return {
    ...state,
    showAlert: true,
    alertType: "danger",
    alertText: "Please provide all values!",
  };
}
```

```js
Alert.js in Components;

import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};
```

#### Display Alert

- [JS Nuggets - Dynamic Object Keys](https://youtu.be/_qxCYtWm0tw)

```js
appContext.js;

const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};
```

- get displayAlert function

```js
appContext.js;

const onSubmit = (e) => {
  e.preventDefault();
  const { name, email, password, isMember } = values;
  if (!email || !password || (!isMember && !name)) {
    displayAlert();
    return;
  }
  console.log(values);
};
```

#### Clear Alert

- technically optional

```js
actions.js;

export const CLEAR_ALERT = "CLEAR_ALERT";
```

- setup imports (reducer and appContext)

```js
reducer.js;

if (action.type === CLEAR_ALERT) {
  return {
    ...state,
    showAlert: false,
    alertType: "",
    alertText: "",
  };
}
```

```js
appContext.js;

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
```

#### Setup Server

- stop the dev server in client
- cd ..
- start setting up our server
- setup package.json

```sh
npm init -y
```

- create server.js
- console.log('server running...')

```sh
node server
```

#### ES6 vs CommonJS

```js
CommonJS;

const express = require("express");
const app = express();
```

```js
ES6;

import express from "express";
const app = express();
```

- file extension .mjs

```js
package.json

"type":"module"
```

#### Nodemon and Basic Express Server

```sh
npm install nodemon --save-dev
```

```js
package.json

"start":"nodemon server"

```

```sh
npm install express
```

```js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
```

#### Not Found Middleware

- in the root create <b>middleware</b> folder
- not-found.js
- setup function
- return 404 with message 'Route does not exist'
- import in server.js
- make sure to use .js extension
- place after home route

#### Error Middleware

- in the middleware create error-handler.js
- setup function
- accept 4 parameters, first one error
- log error
- return 500
- json({msg:'there was an error'})
- import in the server.js
- make sure to use .js extension
- place it last
- eventually handle Mongoose Errors, just like in the node-express
- showcase with async errors

#### ENV Variables

```sh
npm install dotenv
```

- import dotenv from 'dotenv'
- dotenv.config()

- create .env
- PORT=4000
- .gitignore
- /node_modules
- .env

#### Connect to MongoDB

- switched back to PORT=5000
- remove Error from '/'

- existing MongoDB Atlas Account

```sh
npm install mongoose
```

- create <b>db</b> folder
- create connect.js
- setup connectDB(url)
- in server.js create start() function
- get connection string
- setup as MONGO_URL in .env
- provide credentials and DB Name

#### Auth Controller and Route Structure

- create <b>controllers</b>
- authController.js
- create async functions

```js
export { register, login, updateUser };
```

- return res.send('function name')
- create <b>routes</b> folder
- authRoutes.js
- setup express router
- import functions from authController.js

```js
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(updateUser);

export default router;
```

- import authRouter in server.js

```js
app.use("/api/v1/auth", authRouter);
```

#### Vehicles Controller and Route Structure

- vehiclesController.js
- create async functions

```js
export {
  createVehicle,
  deleteVehicle,
  getAllVehicles,
  updateVehicle,
  showStats,
};
```

- return res.send('function name')

- vehiclesRoutes.js
- setup express router
- import functions from vehiclesController.js

```js
router.route("/").post(createVehicle).get(getAllVehicles);
// place before :id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteVehicle).patch(updateVehicle);

export default router;
```

- import vehiclesRouter in server.js

```js
app.use("/api/v1/vehicles", vehiclesRouter);
```

#### Postman

- URL global var
- VEHICLES Collection
- auth and vehicles folders
- setup routes

#### User Model

- <b>models</b> folder
- User.js
- setup schema
- name, email, password, lastName, location
- all {type:String}

#### Validate Email

```js
validate:{
  validator:(field)=> {return 2 > 1},
  message:'Please provide valid email'
  }
```

- [Validator Package](https://www.npmjs.com/package/validator)

```sh
npm install validator
```

- import in User.js
- validator.isEmail

#### Register User - Initial Setup

- authController
- import User model
- setup temporary try/catch
- await User.create(req.body)
- if success 201 with json({user}) (temp)
- if error 500 with json({msg:'there was an error'})

#### Pass Error to Error Handler

- next(error)

#### Express-Async-Errors Package

- remove try/catch
- [Express-Async-Errors](https://www.npmjs.com/package/express-async-errors)

```sh
npm install express-async-errors

```

- in server.js
- import 'express-async-errors'

- use throw Error('error') instead of next(error)

#### Http Status Codes

- constants for status codes
- personal preference
- provides consistency
- less bugs
- easier to read/manage

- [Http Status Codes](https://www.npmjs.com/package/http-status-codes)

```sh
npm install http-status-codes
```

- import/setup in authController and error-handler
- setup defaultError

#### Custom Errors

#### Refactor Errors

- create errors folder
- create custom-api, bad-request, not-found, index.js files
- add proper imports
- setup index.js just like in the front-end
- import {BadRequestError} in authController
- gotcha "errors/index.js"

#### Hash Passwords

- one way street, only compare hashed values
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)

```sh
npm install bcryptjs
```

- User Model
- import bcrypt from 'bcryptjs'
- await genSalt(10)
- await hash(password , salt)
- await compare(requestPassword , currentPassword)
- [mongoose middleware](https://mongoosejs.com/docs/middleware.html)
- UserSchema.pre('save',async function(){
  "this" points to instance created by UserSchema
  })

#### Mongoose - Custom Instance Methods

[Custom Instance Methods](https://mongoosejs.com/docs/guide.html#methods)

- UserSchema.methods.createJWT = function(){console.log(this)}
- register controller
- right after User.create()
- invoke user.createJWT()

#### JWT

- token
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

```sh
npm install jsonwebtoken
```

- User Model
- import jwt from 'jsonwebtoken'
- jwt.sign(payload,secret,options)
- createJWT

```js
return jwt.sign({ userId: this._id }, "jwtSecret", { expiresIn: "1d" });
```

```js
return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_LIFETIME,
});
```

#### JWT_SECRET and JWT_LIFETIME

- [Keys Generator](https://www.allkeysgenerator.com/)
- RESTART SERVER!!!!

#### Complete Register

- password : {select:false}
- complete response

#### Concurrently

- front-end and backend (server)
- run separate terminals
- [concurrently](https://www.npmjs.com/package/concurrently)

```sh
npm install concurrently --save-dev

```

- package.json

```js
// --kill-others switch, all commands are killed if one dies
// --prefix client - folder
// cd client && npm start
// escape quotes

"scripts": {
    "server": "nodemon server --ignore client",
    "client": "npm start --prefix client",
    "start": "concurrently --kill-others-on-fail \"npm run server\" \" npm run client\""
  },
```

#### Cors Error

[Cors Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

- two fixes (cors package and proxy)

#### Cors Package

[cors package](https://www.npmjs.com/package/cors)

```sh
npm install cors
```

```js
import cors from "cors";

app.use(cors());
```

#### Proxy

- access from anywhere
- don't want to use full url

[cra proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

```js
"proxy":"http://localhost:5000"
```

- my preference to remove trailing slash /
- restart app

#### Register User - Setup

```js
appContext.js;

const initialState = {
  user: null,
  token: null,
  userLocation: "",
};
```

- actions.js REGISTER_USER_BEGIN,SUCCESS,ERROR
- import reducer,appContext

```js
appContext.js;
const registerUser = async (currentUser) => {
  console.log(currentUser);
};
```

- import in Register.js

```js
Register.js;

const currentUser = { name, email, password };
if (isMember) {
  console.log("already a member");
} else {
  registerUser(currentUser);
}

return (
  <button type="submit" className="btn btn-block" disabled={isLoading}>
    submit
  </button>
);
```

#### Axios

- [axios docs](https://axios-http.com/docs/intro)
- stop app
- cd client

```sh
npm install axios
```

- cd ..
- restart app

#### Register User - Complete

```js
appContext.js;

import axios from "axios";

const registerUser = async (currentUser) => {
  dispatch({ type: REGISTER_USER_BEGIN });
  try {
    const response = await axios.post("/api/v1/auth/register", currentUser);
    console.log(response);
    const { user, token, location } = response.data;
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: {
        user,
        token,
        location,
      },
    });

    // will add later
    // addUserToLocalStorage({
    //   user,
    //   token,
    //   location,
    // })
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: REGISTER_USER_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert();
};
```

```js
reducer.js;
if (action.type === REGISTER_USER_BEGIN) {
  return { ...state, isLoading: true };
}
if (action.type === REGISTER_USER_SUCCESS) {
  return {
    ...state,
    user: action.payload.user,
    token: action.payload.token,
    userLocation: action.payload.location,
    vehicleLocation: action.payload.location,
    isLoading: false,
    showAlert: true,
    alertType: "success",
    alertText: "User Created! Redirecting...",
  };
}
if (action.type === REGISTER_USER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: "danger",
    alertText: action.payload.msg,
  };
}
```

#### Navigate To Dashboard

```js
Register.js;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);
};
```

#### Local Storage

```js
appContext.js;
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

const registerUser = async (currentUser) => {
  // in try block
  addUserToLocalStorage({
    user,
    token,
    location,
  });
};

// set as default
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  vehicleLocation: userLocation || "",
};
```

#### Morgan Package

- http logger middleware for node.js
- [morgan docs](https://www.npmjs.com/package/morgan)

```sh
npm install morgan
```

```js
server.js;
import morgan from "morgan";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
```

#### UnauthenticatedError

- unauthenticated.js in errors
- import/export

```js
import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}
```

#### Compare Password

```js
User.js in models;

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};
```

```js
authController.js;
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};
```

- test in Postman

#### Login User - Setup

- actions.js LOGIN_USER_BEGIN,SUCCESS,ERROR
- import reducer,appContext

```js
appContext.js;
const loginUser = async (currentUser) => {
  console.log(currentUser);
};
```

- import in Register.js

```js
Register.js;

if (isMember) {
  loginUser(currentUser);
} else {
  registerUser(currentUser);
}
```

#### Login User - Complete

```js
appContext.js;
const loginUser = async (currentUser) => {
  dispatch({ type: LOGIN_USER_BEGIN });
  try {
    const { data } = await axios.post("/api/v1/auth/login", currentUser);
    const { user, token, location } = data;

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: { user, token, location },
    });

    addUserToLocalStorage({ user, token, location });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert();
};
```

```js
reducer.js;

if (action.type === LOGIN_USER_BEGIN) {
  return {
    ...state,
    isLoading: true,
  };
}
if (action.type === LOGIN_USER_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    user: action.payload.user,
    token: action.payload.token,
    userLocation: action.payload.location,
    jobLocation: action.payload.location,
    showAlert: true,
    alertType: "success",
    alertText: "Login Successful! Redirecting...",
  };
}
if (action.type === LOGIN_USER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: "danger",
    alertText: action.payload.msg,
  };
}
```

#### Refactor

```js
actions.js;
export const SETUP_USER_BEGIN = "SETUP_USER_BEGIN";
export const SETUP_USER_SUCCESS = "SETUP_USER_SUCCESS";
export const SETUP_USER_ERROR = "SETUP_USER_ERROR";
```

```js
appContext.js;

const setupUser = async ({ currentUser, endPoint, alertText }) => {
  dispatch({ type: SETUP_USER_BEGIN });
  try {
    const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser);

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
```

```js
reducer.js;
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
```

- import/export

```js
Register.js;

const onSubmit = (e) => {
  e.preventDefault();
  const { name, email, password, isMember } = values;
  if (!email || !password || (!isMember && !name)) {
    displayAlert();
    return;
  }
  const currentUser = { name, email, password };
  if (isMember) {
    setupUser({
      currentUser,
      endPoint: "login",
      alertText: "Login Successful! Redirecting...",
    });
  } else {
    setupUser({
      currentUser,
      endPoint: "register",
      alertText: "User Created! Redirecting...",
    });
  }
};
```

#### Nested Pages in React Router 6

#### Dashboard pages

- delete Dashboard.js
- fix imports/exports
- replace in home route

```js
App.js
<Route path="/" element={<div>dashboard</div>} />
```

- create <b>dashboard</b> directory in pages
- create AddVehicle,AllVehicles,Profile,Stats,SharedLayout, index.js
- setup basic returns

```js
return <h1>Add Vehicle Page</h1>;
```

- export all with index.js (just like components)
- import all pages in App.js

#### Nested Structure

```js
App.js

<Route path='/' >
  <Route path="stats" element={<Stats />} />
  <Route path='all-vehicles' element={<AllVehicles />}></Route>
  <Route path='add-vehicle' element={<AddVehicle />}></Route>
  <Route path='profile' element={<Profile />}></Route>
</Route>
```

#### Shared Layout

```js
App.js

<Route path='/' element={<SharedLayout/>} >
```

```js
SharedLayout.js;

import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="all-vehicles">all vehicles</Link>
        <Link to="add-vehicle">add vehicle</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
```

```js
App.js

<Route index element={<Stats/>} >
```

#### Protected Route

- create ProtectedRoute.js in pages
- import/export
- wrap SharedLayout in App.js

```js
<Route
  path="/"
  element={
    <ProtectedRoute>
      <SharedLayout />
    </ProtectedRoute>
  }
>
```

```js
ProtectedRoute.js;

import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};
```

#### Navbar, SmallSidebar, BigSidebar

- create Navbar, SmallSidebar, BigSidebar in components
- import Wrappers from assets/wrappers
- simple return
- import/export

```js
SharedLayout.js;

import { Outlet } from "react-router-dom";
import { Navbar, SmallSidebar, BigSidebar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  const { user } = useAppContext();
  return (
    <>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default SharedLayout;
```

#### React Icons

[React Icons](https://react-icons.github.io/react-icons/)

```sh
npm install react-icons
```

```js
Navbar.js;

import Wrapper from "../assets/wrappers/Navbar";
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  return (
    <Wrapper>
      <h4>navbar</h4>
      <FaHome />
    </Wrapper>
  );
};

export default Navbar;
```

#### Navbar Setup

```js
Navbar.js;

import { useState } from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          onClick={() => console.log("toggle sidebar")}
        >
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={() => console.log("show logout")}>
            <FaUserCircle />
            john
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button
              onClick={() => console.log("logout user")}
              className="dropdown-btn"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
```

#### Toggle Sidebar

```js
actions.js;

export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
```

- import/export

```js
appContext.js;

const initialState = {
  showSidebar: false,
};

const toggleSidebar = () => {
  dispatch({ type: TOGGLE_SIDEBAR });
};
```

```js
reducer.js;

if (action.type === TOGGLE_SIDEBAR) {
  return { ...state, showSidebar: !state.showSidebar };
}
```

```js
Navbar.js;

const { toggleSidebar } = useAppContext();

return (
  <button className="toggle-btn" onClick={toggleSidebar}>
    <FaAlignLeft />
  </button>
);
```

#### Toggle Dropdown

```js
Navbar.js

const [showLogout, setShowLogout] = useState(false)

<div className='btn-container'>
  <button className='btn' onClick={() => setShowLogout(!showLogout)}>
    <FaUserCircle />
      {user.name}
    <FaCaretDown />
  </button>
  <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
    <button onClick={() => logoutUser()} className='dropdown-btn'>
      logout
    </button>
  </div>
</div>

```

#### Logout User

```js
actions.js;

export const LOGOUT_USER = "LOGOUT_USER";
```

- import/export

```js
appContext.js

const logoutUser = () => {
  dispatch({ type: LOGOUT_USER })
  removeUserFromLocalStorage()
}

value={{logoutUser}}
```

```js
reducer.js;

import { initialState } from "./appContext";

if (action.type === LOGOUT_USER) {
  return {
    ...initialState,
    user: null,
    token: null,
    userLocation: "",
    vehicleLocation: "",
  };
}
```

```js
Navbar.js;

const { user, logoutUser, toggleSidebar } = useAppContext();

return (
  <div className="btn-container">
    <button className="btn" onClick={() => setShowLogout(!showLogout)}>
      <FaUserCircle />
      {user && user.name}
      <FaCaretDown />
    </button>
    <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
      <button onClick={logoutUser} className="dropdown-btn">
        logout
      </button>
    </div>
  </div>
);
```

#### Setup Links

- create <b>utils</b>in the <b>src</b>
- setup links.js

```js
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "stats",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "all vehicles",
    path: "all-vehicles",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "add vehicle",
    path: "add-vehicle",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];

export default links;
```

#### Small Sidebar - Setup

```js
SmallSidebar.js;

import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button className="close-btn" onClick={() => console.log("toggle")}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">nav links</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
```

#### Small Sidebar - Toggle

```js
SmallSidebar.js;

const { showSidebar, toggleSidebar } = useAppContext();
```

```js
SmallSidebar.js;

return (
  <div
    className={
      showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
    }
  ></div>
);
```

```js
SmallSidebar.js;

return (
  <button className="close-btn" onClick={toggleSidebar}>
    <FaTimes />
  </button>
);
```

#### Small Sidebar - Nav Links

```js
SmallSidebar.js;

import { NavLink } from "react-router-dom";

return (
  <div className="nav-links">
    {links.map((link) => {
      const { text, path, id, icon } = link;

      return (
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          key={id}
          onClick={toggleSidebar}
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      );
    })}
  </div>
);
```

#### Nav Links Component

- in <b>components</b> create NavLinks.js
- styles still set from Wrapper
- also can setup in links.js, preference

```js
import { NavLink } from "react-router-dom";
import links from "../utils/links";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
```

```js
SmallSidebar.js;

import NavLinks from "./NavLinks";

return <NavLinks toggleSidebar={toggleSidebar} />;
```

#### Big Sidebar

```js
import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";

const BigSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
```

#### Authenticate User Setup

- create auth.js in <b>middleware</b>

```js
const auth = async (req, res, next) => {
  console.log("authenticate user");
  next();
};

export default auth;
```

```js
authRoutes.js;

import authenticateUser from "../middleware/auth.js";

router.route("/updateUser").patch(authenticateUser, updateUser);
```

- two options

```js
server.js;

import authenticateUser from "./middleware/auth.js";
app.use("/api/v1/vehicles", authenticateUser, jobsRouter);
```

```js
jobsRoutes.js;

import authenticateUser from "./middleware/auth.js";

// all routes !!!!

router.route("/stats").get(authenticateUser, showStats);
```

#### Auth - Bearer Schema

```js
Postman

Headers

Authorization: Bearer <token>

```

```js
auth.js;

const auth = async (req, res, next) => {
  const headers = req.headers;
  const authHeader = req.headers.authorization;
  console.log(headers);
  console.log(authHeader);
  next();
};
```

#### Postman - Set Token Programmatically

- register and login routes
- Tests

```js
const jsonData = pm.response.json();
pm.globals.set("token", jsonData.token);

Type: Bearer;

Token: {
  {
    token;
  }
}
```

#### Unauthenticated Error

```js
auth.js;

import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    // why, well is it 400 or 404?
    // actually 401
    throw new UnAuthenticatedError("Authentication Invalid");
  }

  next();
};
```

#### Auth Middleware

```js
import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload)
    // attach the user request object
    // req.user = payload
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

export default auth;
```

#### Update User

```authController.js
const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !name || !lastName || !location) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;

  await user.save();

  // various setups
  // in this case only id
  // if other properties included, must re-generate

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });
};
```

#### Modified Paths

- user.save() vs User.findOneAndUpdate

```js
User.js;

UserSchema.pre("save", async function () {
  console.log(this.modifiedPaths());
  console.log(this.isModified("name"));

  // if (!this.isModified('password')) return
  // const salt = await bcrypt.genSalt(10)
  // this.password = await bcrypt.hash(this.password, salt)
});
```

#### Profile Page

```js
appContext.js

const updateUser = async (currentUser) => {
  console.log(currentUser)
}

value={{updateUser}}
```

```js
Profile.js;

import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      // test and remove temporary
      displayAlert();
      return;
    }

    updateUser({ name, email, lastName, location });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            labelText="last name"
            type="text"
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormRow
            type="text"
            name="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
```

#### Bearer Token - Manual Approach

```js
appContext.js;

const updateUser = async (currentUser) => {
  try {
    const { data } = await axios.patch("/api/v1/auth/updateUser", currentUser, {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};
```

#### Axios - Global Setup

```js
appContext.js;

axios.defaults.headers.common["Authorization"] = `Bearer ${state.token}`;
```

#### Axios - Setup Instance

```js
AppContext.js;

const authFetch = axios.create({
  baseURL: "/api/v1",
  headers: {
    Authorization: `Bearer ${state.token}`,
  },
});

const updaterUser = async (currentUser) => {
  try {
    const { data } = await authFetch.patch("/auth/updateUser", currentUser);
  } catch (error) {
    console.log(error.response);
  }
};
```

#### Axios - Interceptors

- will use instance, but can use axios instead

```js
appContext.js;

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
    console.log(error.response);
    if (error.response.status === 401) {
      console.log("AUTH ERROR");
    }
    return Promise.reject(error);
  }
);
```

#### Update User

```js
actions.js;
export const UPDATE_USER_BEGIN = "UPDATE_USER_BEGIN";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";
```

```js
appContext.js;

const updateUser = async (currentUser) => {
  dispatch({ type: UPDATE_USER_BEGIN });
  try {
    const { data } = await authFetch.patch("/auth/updateUser", currentUser);

    // no token
    const { user, location, token } = data;

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: { user, location, token },
    });

    addUserToLocalStorage({ user, location, token });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert();
};
```

```js
reducer.js
if (action.type === UPDATE_USER_BEGIN) {
  return { ...state, isLoading: true }
}
if (action.type === UPDATE_USER_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    token:action.payload.token
    user: action.payload.user,
    userLocation: action.payload.location,
    vehicleLocation: action.payload.location,
    showAlert: true,
    alertType: 'success',
    alertText: 'User Profile Updated!',
  }
}
if (action.type === UPDATE_USER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'danger',
    alertText: action.payload.msg,
  }
}
```

#### 401 Error - Logout User

```js
appContext.js;
// response interceptor
authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      logoutUser();
    }
    return Promise.reject(error);
  }
);

const updateUser = async (currentUser) => {
  dispatch({ type: UPDATE_USER_BEGIN });
  try {
    const { data } = await authFetch.patch("/auth/updateUser", currentUser);

    // no token
    const { user, location } = data;

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: { user, location, token },
    });

    addUserToLocalStorage({ user, location, token: initialState.token });
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
```

#### Vehicle Model

- Vehicle Model

```js
Vehicle.js;

import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: [true, "Please provide vehicle make"],
      maxlength: 50,
    },
    registration: {
      type: String,
      required: [true, "Please provide registration"],
      maxlength: 50,
    },
    chassisNumber: {
      type: String,
      required: [true, "Please provide Chassis number"],
      maxlength: 50,
    },
    insuranceDate: {
      type: String,
      required: [true, "Please provide Insurance date"],
      maxlength: 50,
    },
    attachedTo: {
      type: String,
      required: [true, "Please provide the vehicle user"],
      maxlength: 100,
    },
    year: {
      type: String,
      enum: [
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
      default: "Year of manufacture",
    },
    status: {
      type: String,
      enum: ["allocated", "auctioned", "pending"],
      default: "pending",
    },
    // rimSize: {
    //   type: String,
    //   enum: [
    //     "195-R15C",
    //     "205/70/R15",
    //     "205-R16C",
    //     "215/55/R17",
    //     "265/65/R17",
    //     "235/45/R18",
    //     "265/60/R18",
    //     "285/50/R20",
    //     "700R16",
    //   ],
    //   default: "Rim size",
    // },
    vehicleLocation: {
      type: String,
      default: "My city",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Vehicle", VehicleSchema);
```

#### Create Vehicle

```js
vehiclesController.js;

import Vehicle from "../models/Vehicle.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createVehicle = async (req, res) => {
  const { make, registration, chassisNumber, insuranceDate, attachedTo } =
    req.body;

  if (
    !make ||
    !registration ||
    !chassisNumber ||
    !insuranceDate ||
    !attachedTo
  ) {
    throw new BadRequestError("Please Provide All Values");
  }

  req.body.createdBy = req.user.userId;

  const vehicle = await Vehicle.create(req.body);
  res.status(StatusCodes.CREATED).json({ vehicle });
};
```

#### Vehicle State Values

```js
appContext.js;
const initialState = {
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
};
```

#### AddVehicle Page - Setup

```js
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const AddVehicle = () => {
  const {
    isLoading
    isEditing,
    showAlert,
    displayAlert,
    make,
    registration,
    chassisNumber,
    insuranceDate,
    attachedTo,
    vehicleLocation,
    year,
    yearOptions,
    status,
    statusOptions,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !make ||
      !registration ||
      !chassisNumber ||
      !insuranceDate ||
      !attachedTo ||
      !vehicleLocation
    ) {
      displayAlert();
      return;
    }
    console.log("create vehicle");
  };

  const handleVehicleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit vehicle" : "add vehicle"} </h3>
        {showAlert && <Alert />}

        {/* make */}
        <div className="form-center">
          <FormRow
            type="text"
            name="make"
            value={make}
            handleChange={handleVehicleInput}
          />
          {/* registration */}
          <FormRow
            type="text"
            name="registration"
            value={registration}
            handleChange={handleVehicleInput}
          />
          {/* chassis number */}
          <FormRow
            type="text"
            labelText="chassis number"
            name="chassisNumber"
            value={chassisNumber}
            handleChange={handleVehicleInput}
          />
          {/* attached to */}
          <FormRow
            type="text"
            labelText="attached to"
            name="attachedTo"
            value={attachedTo}
            handleChange={handleVehicleInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="location"
            name="vehicleLocation"
            value={vehicleLocation}
            handleChange={handleVehicleInput}
          />
          {/* insurance date */}
          <FormRow
            type="text"
            labelText="insurance date"
            name="insuranceDate"
            value={insuranceDate}
            handleChange={handleVehicleInput}
          />

          {/* vehicle year */}

          {/* vehicle status */}

          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddVehicle;
```

#### Select Input

```js
return (
  // vehicle year
  <div className="form-row">
    <label htmlFor="year" className="form-label">
      vehicle year
    </label>

    <select
      name="year"
      value={year}
      onChange={handleVehicleInput}
      className="form-select"
    >
      {yearOptions.map((itemValue, index) => {
        return (
          <option key={index} value={itemValue}>
            {itemValue}
          </option>
        );
      })}
    </select>
  </div>
);
```

#### FormRowSelect

- create FormRowSelect in components
- setup import/export

```js
const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
```

```js
AddVehicle.js;

return (
  <>
    {/* vehicle year */}
    <FormRowSelect
      name="year"
      value={year}
      handleChange={handleVehicleInput}
      list={yearOptions}
    />

    {/* vehicle status */}
    <FormRowSelect
      name="status"
      value={status}
      handleChange={handleVehicleInput}
      list={statusOptions}
    />
  </>
);
```

#### Change State Values With Handle Change

- [JS Nuggets Dynamic Object Keys](https://youtu.be/_qxCYtWm0tw)

```js
actions.js;

export const HANDLE_CHANGE = "HANDLE_CHANGE";
```

```js
appContext.js

const handleChange = ({ name, value }) => {
  dispatch({
    type: HANDLE_CHANGE,
    payload: { name, value },
  })
}

value={{handleChange}}
```

```js
reducer.js;

if (action.type === HANDLE_CHANGE) {
  return { ...state, [action.payload.name]: action.payload.value };
}
```

```js
AddVehicle.js;

const { handleChange } = useAppContext();

const handleVehicleInput = (e) => {
  handleChange({ name: e.target.name, value: e.target.value });
};
```

#### Clear Values

```js
actions.js;

export const CLEAR_VALUES = "CLEAR_VALUES";
```

```js
appContext.js

const clearValues = () => {
    dispatch({ type: CLEAR_VALUES })
  }

value={{clearValues}}
```

```js
reducer.js;

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
```

```js
AddVehicle.js;

const { clearValues } = useAppContext();

return (
  {/* submit button */}
  <div className="btn-container">
    <button
      className="btn btn-block clear-btn"
      onClick={(e) => {
        e.preventDefault();
        clearValues();
      }}
    >
      clear
    </button>
  </div>
);
```

#### Create Vehicle

```js
actions.js;

export const CREATE_VEHICLE_BEGIN = "CREATE_VEHICLE_BEGIN";
export const CREATE_VEHICLE_SUCCESS = "CREATE_VEHICLE_SUCCESS";
export const CREATE_VEHICLE_ERROR = "CREATE_VEHICLE_ERROR";
```

```js
appContext.js;

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
```

```js
AddVehicle.js;

const { createVehicle } = useAppContext();

const handleSubmit = (e) => {
  e.preventDefault();
  // while testing

  // if (
  //   !make ||
  //   !registration ||
  //   !chassisNumber ||
  //   !insuranceDate ||
  //   !attachedTo ||
  //   !vehicleLocation
  // ) {
  //   displayAlert();
  //   return;
  // }
  if (isEditing) {
    // eventually editVehicle()
    return;
  }
  createVehicle();
};
```

```js
reducer.js;

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
```

#### Get All Vehicles

```js
vehiclesController.js;

const getAllVehicles = async (req, res) => {
  const vehicles = await Vehicle.find({ createdBy: req.user.userId });

  res
    .status(StatusCodes.OK)
    .json({ vehicles, totalVehicles: vehicles.length, numOfPages: 1 });
};
```

#### Vehicles State Values

```js
appContext.js;

const initialState = {
  vehicles: [],
  totalVehicles: 0,
  numOfPages: 1,
  page: 1,
};
```

#### Get All Vehicles Request

```js
actions.js;
export const GET_VEHICLES_BEGIN = "GET_VEHICLES_BEGIN";
export const GET_VEHICLES_SUCCESS = "GET_VEHICLES_SUCCESS";
```

```js
appContext.js

import React, { useReducer, useContext, useEffect } from 'react'

const getVehicles = async () => {
  let url = `/vehicles`

  dispatch({ type: GET_VEHICLES_BEGIN })
  try {
    const { data } = await authFetch(url)
    const { vehicles, totalVehicles, numOfPages } = data
    dispatch({
      type: GET_VEHICLES_SUCCESS,
      payload: {
        vehicles,
        totalVehicles,
        numOfPages,
      },
    })
  } catch (error) {
    console.log(error.response)
    logoutUser()
  }
  clearAlert()
}

useEffect(() => {
  getVehicles()
}, [])

value={{getVehicles}}

```

```js
reducer.js;

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
```

#### AllVehicles Page Setup

- create
- SearchContainer export
- VehiclesContainer export
- Vehicle
- VehicleInfo

```js
AllVehicles.js;

import { VehiclesContainer, SearchContainer } from "../../components";
const AllVehicles = () => {
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllVehicles;
```

- create in components folder
- Loading export

```js
const Loading = ({ center }) => {
  return <div className={center ? "loading loading-center" : "loading"}></div>;
};

export default Loading;
```

```js
VehiclesContainer.js;
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Vehicle from "./Vehicle";
import Wrapper from "../assets/wrappers/VehiclesContainer";

const VehiclesContainer = () => {
  const { getVehicles, vehicles, isLoading, page, totalVehicles } =
    useAppContext();
  useEffect(() => {
    getVehicles();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  if (vehicles.length === 0) {
    return (
      <Wrapper>
        <h2>No vehicles to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalVehicles} vehicle{vehicles.length > 1 && "s"} found
      </h5>
      <div className="vehicles">
        {vehicles.map((vehicle) => {
          return <Vehicle key={vehicle._id} {...vehicle} />;
        })}
      </div>
      {/* pagination buttons */}
    </Wrapper>
  );
};

export default VehiclesContainer;
```

```js
Vehicle.js;

import moment from "moment";

const Vehicle = ({ make }) => {
  return <h5>{make}</h5>;
};

export default Vehicle;
```

#### Moment.js

- Format Dates
- [moment.js](https://momentjs.com/)

- stop server
- cd client

```sh
npm install moment

```

```js
Vehicle.js;

import moment from "moment";

const Vehicle = ({ make, createdAt }) => {
  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <div>
      <h5>{make}</h5>
      <h5>{date}</h5>
    </div>
  );
};

export default Vehicle;
```

#### Vehicle Component - Setup

```js
appContext.js

const setEditVehicle = (id) => {
  console.log(`set edit vehicle : ${id}`)
}
const deleteVehicle = (id) =>{
  console.log(`delete vehicle : ${id}`)
}
value={{setEditVehicle,deleteVehicle}}
```

```js
Vehicle.js;

import { FaLocationArrow, FaCar, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Vehicle";
import VehicleInfo from "./VehicleInfo";

const Vehicle = ({
  _id,
  make,
  registration,
  chassisNumber,
  insuranceDate,
  attachedTo,
  vehicleLocation,
  year,
  createdAt,
  status,
}) => {
  const { setEditVehicle, deleteVehicle } = useAppContext();

  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{make.charAt(0)}</div>
        <div className="info">
          <h5>{year}</h5>
          <p>{make}</p>
        </div>
      </header>
      <div className="content">
        {/* content center later */}
        <footer>
          <div className="actions">
            <Link
              to="/add-vehicle"
              onClick={() => setEditVehicle(_id)}
              className="btn edit-btn"
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteVehicle(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Vehicle;
```

#### VehicleInfo

```js
VehicleInfo.js;

import Wrapper from "../assets/wrappers/VehicleInfo";

const VehicleInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default VehicleInfo;
```

```js
Vehicle.js;
return (
  <div className="content">
    <div className="content-center">
      <VehicleInfo icon={<FaLocationArrow />} text={vehicleLocation} />
      <VehicleInfo icon={<FaCalendarAlt />} text={date} />
      <VehicleInfo icon={<FaCar />} text={attachedTo} />
      <div className={`status ${status}`}>{status}</div>
    </div>
    {/* footer content */}
  </div>
);
```

#### SetEditVehicle

```js
actions.js;
export const SET_EDIT_VEHICLE = "SET_EDIT_VEHICLE";
```

```js
appContext.js

const setEditVehicle = (id) => {
  dispatch({ type: SET_EDIT_VEHICLE, payload: { id } })
}
const editVehicle = () => {
  console.log('edit vehicle')
}
value={{editVehicle}}
```

```js
reducer.js;

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
```

```js
AddVehicle.js;
const { isEditing, editVehicle } = useAppContext();
const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !make ||
    !registration ||
    !chassisNumber ||
    !insuranceDate ||
    !attachedTo ||
    !vehicleLocation
  ) {
    displayAlert();
    return;
  }
  if (isEditing) {
    editVehicle();
    return;
  }
  createVehicle();
};
```

#### Edit Vehicle - Server

```js
vehiclesController.js;

const updateVehicle = async (req, res) => {
  const { id: vehicleId } = req.params;

  const { make, registration, chassisNumber, insuranceDate, attachedTo } =
    req.body;

  if (
    !make ||
    !registration ||
    !chassisNumber ||
    !insuranceDate ||
    !attachedTo
  ) {
    throw new BadRequestError("Please Provide All Values");
  }

  const vehicle = await Vehicle.findOne({ _id: vehicleId });

  if (!vehicle) {
    throw new NotFoundError(`No vehicle with id ${vehicleId}`);
  }

  // check permissions

  const updatedVehicle = await Vehicle.findOneAndUpdate(
    { _id: vehicleId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updatedVehicle });
};
```

#### Alternative Approach

- optional
- multiple approaches
- different setups
- course Q&A

```js
vehicleController.js;
const updateVehicle = async (req, res) => {
  const { id: vehicleId } = req.params;

  const {
    make,
    registration,
    chassisNumber,
    insuranceDate,
    attachedTo,
    vehicleLocation,
  } = req.body;

  if (
    !make ||
    !registration ||
    !chassisNumber ||
    !insuranceDate ||
    !attachedTo
  ) {
    throw new BadRequestError("Please Provide All Values");
  }

  const vehicle = await Vehicle.findOne({ _id: vehicleId });

  if (!vehicle) {
    throw new NotFoundError(`No vehicle with id ${vehicleId}`);
  }

  // check permissions

  // alternative approach - if you will be depending on the hooks in the model, then you go with this approach

  vehicle.make = make;
  vehicle.registration = registration;
  vehicle.chassisNumber = chassisNumber;
  vehicle.insuranceDate = insuranceDate;
  vehicle.attachedTo = attachedTo;
  vehicle.vehicleLocation = vehicleLocation;

  await vehicle.save();
  res.status(StatusCodes.OK).json({ vehicle });
};
```

#### Check Permissions

```js
vehiclesController.js;

const updateVehicle = async (req, res) => {
  const { id: vehicleId } = req.params;
  const {
    make,
    registration,
    chassisNumber,
    insuranceDate,
    attachedTo,
    status,
  } = req.body;

  if (
    !make ||
    !registration ||
    !chassisNumber ||
    !insuranceDate ||
    !attachedTo
  ) {
    throw new BadRequestError("Please provide all values");
  }
  const vehicle = await Vehicle.findOne({ _id: vehicleId });

  if (!vehicle) {
    throw new NotFoundError(`No vehicle with id :${vehicleId}`);
  }

  // check permissions
  // req.user.userId (string) === vehicle.createdBy(object)
  // throw new UnAuthenticatedError('Not authorized to access this route')

  // console.log(typeof req.user.userId)
  // console.log(typeof vehicle.createdBy)

  checkPermissions(req.user, vehicle.createdBy);

  const updatedVehicle = await Vehicle.findOneAndUpdate(
    { _id: vehicleId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updatedVehicle });
};
```

- utils folder
- checkPermissions.js
- import in jobsController.js

```js
checkPermissions.js;

import { UnAuthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
  // if (requestUser.role === 'admin') return
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new UnAuthenticatedError("Not authorized to access this route");
};

export default checkPermissions;
```

#### Remove/Delete Vehicle

```js
vehiclesController.js;

const deleteVehicle = async (req, res) => {
  const { id: vehicleId } = req.params;

  const vehicle = await Vehicle.findOne({ _id: vehicleId });

  if (!vehicle) {
    throw new NotFoundError(`No vehicle with id : ${vehicleId}`);
  }

  checkPermissions(req.user, vehicle.createdBy);

  await vehicle.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Vehicle removed" });
};
```

#### Delete Vehicle - Front-End

```js
actions.js;

export const DELETE_VEHICLE_BEGIN = "DELETE_VEHICLE_BEGIN";
```

```js
appContext.js;

const deleteVehicle = async (vehicleId) => {
  dispatch({ type: DELETE_VEHICLE_BEGIN });
  try {
    await authFetch.delete(`/vehicles/${vehicleId}`);
    getVehicles();
  } catch (error) {
    console.log(error.response);
    logoutUser();
  }
};
```

```js
reducer.js;

if (action.type === DELETE_VEHICLE_BEGIN) {
  return { ...state, isLoading: true };
}
```

#### Edit Vehicle - Front-End

```js
actions.js;
export const EDIT_VEHICLE_BEGIN = "EDIT_VEHICLE_BEGIN";
export const EDIT_VEHICLE_SUCCESS = "EDIT_VEHICLE_SUCCESS";
export const EDIT_VEHICLE_ERROR = "EDIT_VEHICLE_ERROR";
```

```js
appContext.js;
const editVehicle = async () => {
  dispatch({ type: EDIT_VEHICLE_BEGIN });
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

    await authFetch.patch(`/vehicles/${state.editVehicleId}`, {
      make,
      registration,
      chassisNumber,
      insuranceDate,
      attachedTo,
      vehicleLocation,
      year,
      status,
    });
    dispatch({ type: EDIT_VEHICLE_SUCCESS });
    dispatch({ type: CLEAR_VALUES });
  } catch (error) {
    if (error.response.status === 401) return;
    dispatch({
      type: EDIT_VEHICLE_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert();
};
```

```js
reducer.js;

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
```

#### Create More Jobs

- [Mockaroo](https://www.mockaroo.com/)
- setup mock-data.json in the root

#### Populate Database

- create populate.js in the root

```js
populate.js;

import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Vehicle from "./models/Vehicle.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Vehicle.deleteMany();

    const jsonProducts = JSON.parse(
      await readFile(new URL("./mock-data.json", import.meta.url))
    );
    await Vehicle.create(jsonProducts);
    console.log("Success!!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
```

#### Show Stats - Structure

- aggregation pipeline
- step by step
- [Aggregation Pipeline](https://docs.mongodb.com/manual/core/aggregation-pipeline/)

```js
vehiclesController.js;

import mongoose from "mongoose";

const showStats = async (req, res) => {
  let stats = await Vehicle.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  res.status(StatusCodes.OK).json({ stats });
};
```

#### Show Stats - Object Setup

- [Reduce Basics](https://youtu.be/3WkW9nrS2mw)
- [Reduce Object Example ](https://youtu.be/5BFkp8JjLEY)

```js
vehiclesController.js;

const showStats = async (req, res) => {
  let stats = await Vehicle.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  res.status(StatusCodes.OK).json({ stats });
};
```

#### Show Stats - Default Stats

```js
vehiclesController.js;

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    allocated: stats.allocated || 0,
    auctioned: stats.auctioned || 0,
  };

  let monthlyUpdates = [];

  res.status(StatusCodes.OK).json({ defaultStats, monthlyUpdates });
};
```

#### Show Stats - Function Setup

```js
actions.js;

export const SHOW_STATS_BEGIN = "SHOW_STATS_BEGIN";
export const SHOW_STATS_SUCCESS = "SHOW_STATS_SUCCESS";
```

```js
appContext.js

const initialState = {
  stats: {},
  monthlyUpdates: []

}

const showStats = async () => {
    dispatch({ type: SHOW_STATS_BEGIN })
    try {
      const { data } = await authFetch('/vehicles/stats')
      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          stats: data.defaultStats,
          monthlyUpdates: data.monthlyUpdates,
        },
      })
    } catch (error) {
console.log(error.response)
      // logoutUser()
    }

clearAlert()
  }
  value={{showStats}}
```

```js
reducers.js;
if (action.type === SHOW_STATS_BEGIN) {
  return { ...state, isLoading: true, showAlert: false };
}
if (action.type === SHOW_STATS_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    stats: action.payload.stats,
    monthlyUpdates: action.payload.monthlyUpdates,
  };
}
```

#### Stats Page - Structure

- components
- StatsContainer.js
- ChartsContainer.js
- StatsItem.js
- simple return
- import/export index.js

```js
Stats.js;

import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, Loading, ChartsContainer } from "../../components";

const Stats = () => {
  const { showStats, isLoading, monthlyUpdates } = useAppContext();
  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyUpdates.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
```

#### StatsContainer

```js
StatsContainer.js;

import { useAppContext } from "../context/appContext";
import { FaClipboardCheck, FaClock } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import Wrapper from "../assets/wrappers/StatsContainer";
const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: "pending vehicles",
      count: stats.pending || 0,
      icon: <FaClock />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "allocated vehicles",
      count: stats.allocated || 0,
      icon: <FaClipboardCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "auctioned vehicles",
      count: stats.auctioned || 0,
      icon: <RiAuctionFill />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
```

#### StatItems

```js
StatsItem.js;

import Wrapper from "../assets/wrappers/StatItem";

function StatsItem({ count, title, icon, color, bcg }) {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <div className="icon">{icon}</div>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
}

export default StatsItem;
```

#### Aggregate Vehicles Based on Year and Month

```js
vehiclesController.js;

let monthlyUpdates = await Vehicle.aggregate([
  { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
  {
    $group: {
      _id: {
        year: {
          $year: "$createdAt",
        },
        month: {
          $month: "$createdAt",
        },
      },
      count: { $sum: 1 },
    },
  },
  { $sort: { "_id.year": -1, "_id.month": -1 } }, // sorted to retrieve the latest six months
  { $limit: 6 },
]);
```

#### Refactor Data

- install moment.js on the SERVER

```sh
npm install moment

```

```js
vehiclesController.js;

import moment from "moment";

monthlyUpdates = monthlyUpdates
  .map((item) => {
    const {
      _id: { year, month },
      count,
    } = item;
    // moment accepts 0-11 in month's count; whereas in mongoBD it's 1-12
    const date = moment()
      .month(month - 1)
      .year(year)
      .format("MMM Y");
    return { date, count };
  })
  .reverse();
```

#### Charts Container

- BarChart.js
- AreaChart.js

```js
ChartsContainer.js;
import React, { useState } from "react";

import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

export default function ChartsContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyUpdates: data } = useAppContext();

  return (
    <Wrapper>
      <h4>Monthly Updates</h4>

      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "AreaChart" : "BarChart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
}
```

#### Recharts Library

- install in the Client!!!

[Recharts](https://recharts.org)

```sh
npm install recharts
```

#### Bar Chart

```js
BarChart.js;

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#2cb1bc" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};
```

#### Area Chart

```js
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#2cb1bc" fill="#bef8fd" />
      </AreaChart>
    </ResponsiveContainer>
  );
};
```

#### Filter

#### Get All Vehicles - Initial Setup

```js
vehiclesController.js;

const getAllVehicles = async (req, res) => {
  const { search, status, year, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  // add stuff based on condition

  // NO AWAIT
  let result = Vehicle.find(queryObject);

  // chain sort conditions

  const vehicles = await result;

  res
    .status(StatusCodes.OK)
    .json({ vehicles, totalVehicles: vehicles.length, numOfPages: 1 });
};
```

#### Status

```js
vehiclesController.js;

const getAllVehicles = async (req, res) => {
  const { search, status, year, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (status !== "all") {
    queryObject.status = status;
  }

  // NO AWAIT
  let result = Vehicle.find(queryObject);

  // chain sort conditions

  const vehicles = await result;

  res
    .status(StatusCodes.OK)
    .json({ vehicles, totalVehicles: vehicles.length, numOfPages: 1 });
};
```

#### Year

```js
vehiclesController.js;

const getAllVehicles = async (req, res) => {
  const { search, status, year, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (status !== "all") {
    queryObject.status = status;
  }
  if (year !== "all") {
    queryObject.year = year;
  }
  // NO AWAIT
  let result = Vehicle.find(queryObject);

  // chain sort conditions

  const vehicles = await result;

  res
    .status(StatusCodes.OK)
    .json({ vehicles, totalVehicles: vehicles.length, numOfPages: 1 });
};
```

#### Search

```js
vehiclesController.js;

const getAllVehicles = async (req, res) => {
  // const vehicles = await Vehicle.find({ createdBy: req.user.userId });
  const { search, status, year, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (status !== "all") {
    queryObject.status = status;
  }
  if (year !== "all") {
    queryObject.year = year;
  }
  if (search) {
    queryObject.make = { $regex: search, $options: "i" }; // case insensitive "i"
  }
  // NO AWAIT
  let result = Vehicle.find(queryObject);

  // chain sort conditions - Mongoose Sort
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("make");
  }
  if (sort === "z-a") {
    result = result.sort("-make");
  }
  const vehicles = await result;

  res
    .status(StatusCodes.OK)
    .json({ vehicles, totalVehicles: vehicles.length, numOfPages: 1 });
};
```

#### Search Context Setup

```js
appContext.js

const initialState = {
  statusOptions: ["allocated", "auctioned", "pending"],
  status: "pending",
  yearOptions: [
    "2001",
    "2002",
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
    "2025",
  ],
  year: "2003",
  //
  //
  //
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}

const clearFilters = () =>{
console.log('clear filters')
}

value={{clearFilters}}

// remember this function :)
const handleChange = ({ name, value }) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: { name, value },
    })
  }

```

#### Search Container - Setup

```js
SearchContainer.js;

import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    yearOptions,
    handleChange,
    clearFilters,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        {/* search position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          ></FormRow>
          {/* rest of the inputs */}
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
```

#### Search Container - Complete

```js
SearchContainer.js;

import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const SearchContainer = () => {
  const {
    isLoading,
    search,
    handleChange,
    searchStatus,
    statusOptions,
    yearOptions,
    searchType,
    clearFilters,
    sort,
    sortOptions,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        {/* search position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          ></FormRow>
          {/* search by status */}
          <FormRowSelect
            labelText="vehicle status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          ></FormRowSelect>
          {/* search by year */}
          <FormRowSelect
            labelText="vehicle year"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...yearOptions]}
          ></FormRowSelect>
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          ></FormRowSelect>
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={clearFilters}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
```

#### Clear Filters

```js
actions.js;

export const CLEAR_FILTERS = "CLEAR_FILTERS";
```

```js
appContext.js;

const clearFilters = () => {
  dispatch({ type: CLEAR_FILTERS });
};
```

```js
reducer.js;

if (action.type === CLEAR_FILTERS) {
  return {
    ...state,
    search: "",
    searchStatus: "all",
    searchType: "all",
    sort: "latest",
  };
}
```

#### Refactor Get All Vehicles

```js
const getVehicles = async () => {
  // will add page later
  const { search, searchStatus, searchType, sort } = state;
  let url = `/vehicles?status=${searchStatus}&year=${searchType}&sort=${sort}`;
  if (search) {
    url = url + `&search=${search}`;
  }
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
```

```js
VehiclesContainer.js;

const VehiclesContainer = () => {
  const {
    getVehicles,
    vehicles,
    isLoading,
    page,
    totalVehicles,
    search,
    searchStatus,
    searchType,
    sort,
  } = useAppContext();
  useEffect(() => {
    getVehicles();
  }, [search, searchStatus, searchType, sort]);
};
```

#### Limit and Skip

```js
vehiclesController.js;

const getAllVehicles = async (req, res) => {
  const { search, status, year, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  // add stuff based on condition
  if (status && status !== "all") {
    queryObject.status = status;
  }
  if (year && year !== "all") {
    queryObject.year = year;
  }
  if (search) {
    queryObject.make = { $regex: search, $options: "i" };
  }

  // NO AWAIT
  let result = Vehicle.find(queryObject);

  // chain sort conditions
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("make");
  }
  if (sort === "z-a") {
    result = result.sort("-make");
  }

  // setup pagination
  const limit = 10;
  const skip = 1;

  result = result.skip(skip).limit(limit);

  const vehicles = await result;

  res
    .status(StatusCodes.OK)
    .json({ vehicles, totalVehicles: vehicles.length, numOfPages: 1 });
};
```

#### Page and Limit

```js
vehiclesController.js;

const getAllVehicles = async (req, res) => {
  const { search, status, year, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  // add stuff based on condition
  if (status && status !== "all") {
    queryObject.status = status;
  }
  if (year && year !== "all") {
    queryObject.year = year;
  }
  if (search) {
    queryObject.make = { $regex: search, $options: "i" };
  }

  // NO AWAIT
  let result = Vehicle.find(queryObject);

  // chain sort conditions
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("make");
  }
  if (sort === "z-a") {
    result = result.sort("-make");
  }

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit; //10
  result = result.skip(skip).limit(limit);
  // 75
  // 10 10 10 10 10 10 10 5
  const vehicles = await result;

  res
    .status(StatusCodes.OK)
    .json({ vehicles, totalVehicles: vehicles.length, numOfPages: 1 });
};
```

#### Total Vehicles and Number Of Pages

```js
vehiclesController.js;

const getAllVehicles = async (req, res) => {
  const { search, status, year, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  // add stuff based on condition
  if (status && status !== "all") {
    queryObject.status = status;
  }
  if (year && year !== "all") {
    queryObject.year = year;
  }
  if (search) {
    queryObject.make = { $regex: search, $options: "i" };
  }

  // NO AWAIT
  let result = Vehicle.find(queryObject);

  // chain sort conditions
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("make");
  }
  if (sort === "z-a") {
    result = result.sort("-make");
  }

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit; //10
  result = result.skip(skip).limit(limit);
  // 75
  // 10 10 10 10 10 10 10 5
  const vehicles = await result;

  const totalVehicles = await Vehicle.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalVehicles / limit);

  res.status(StatusCodes.OK).json({ vehicles, totalVehicles, numOfPages });
};
```

#### PageBtnContainer Setup

- PageBtnContainer.js

```js
VehiclesContainer.js;

import PageBtnContainer from "./PageBtnContainer";

const { numOfPages } = useAppContext();

return (
  <Wrapper>
    <h5>
      {totalVehicles} vehicle{vehicles.length > 1 && "s"} found
    </h5>
    <div className="vehicles">
      {vehicles.map((vehicle) => {
        return <Vehicle key={vehicle._id} {...vehicle} />;
      })}
    </div>
    {numOfPages > 1 && <PageBtnContainer />}
  </Wrapper>
);
```

#### PageBtnContainer - Structure

```js
PageBtnContainer.js;

import { useAppContext } from "../context/appContext";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";

const PageButtonContainer = () => {
  const { numOfPages, page } = useAppContext();

  const prevPage = () => {
    console.log("prev page");
  };
  const nextPage = () => {
    console.log("next page");
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>

      <div className="btn-container">buttons</div>

      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageButtonContainer;
```

#### Button Container

- [Array.from] (https://youtu.be/zg1Bv4xubwo)

```js
PageBtnContainer.js;

const pages = Array.from({ length: numOfPages }, (_, index) => {
  return index + 1;
});

return (
  <div className="btn-container">
    {pages.map((pageNumber) => {
      return (
        <button
          type="button"
          className={pageNumber === page ? "pageBtn active" : "pageBtn"}
          key={pageNumber}
          onClick={() => console.log(page)}
        >
          {pageNumber}
        </button>
      );
    })}
  </div>
);
```

#### Change Page

```js
actions.js;
export const CHANGE_PAGE = "CHANGE_PAGE";
```

```js
appContext.js
const changePage = (page) => {
  dispatch({ type: CHANGE_PAGE, payload: { page } })
}
value={{changePage}}
```

```js
reducer.js;

if (action.type === CHANGE_PAGE) {
  return { ...state, page: action.payload.page };
}
```

```js
PageBtnContainer.js;

const { changePage } = useAppContext();
return (
  <button
    type="button"
    className={pageNumber === page ? "pageBtn active" : "pageBtn"}
    key={pageNumber}
    onClick={() => changePage(pageNumber)}
  >
    {pageNumber}
  </button>
);
```

#### Prev and Next Buttons

```js
PageBtnContainer.js;
const prevPage = () => {
  let newPage = page - 1;
  if (newPage < 1) {
    // newPage = 1
    // alternative
    newPage = numOfPages;
  }
  changePage(newPage);
};
const nextPage = () => {
  let newPage = page + 1;
  if (newPage > numOfPages) {
    // newPage = numOfPages
    // alternative
    newPage = 1;
  }
  changePage(newPage);
};
```

#### Trigger New Page

```js
appContext.js;

const getVehicles = async () => {
  const { page, search, searchStatus, searchType, sort } = state;

  let url = `/vehicles?page=${page}&status=${searchStatus}&year=${searchType}&sort=${sort}`;
  // rest of the code
};
```

```js
VehiclesContainer.js;

const { page } = useAppContext();
useEffect(() => {
  getVehicles();
}, [page, search, searchStatus, searchType, sort]);
```

```js
reducer.js;

if (action.type === HANDLE_CHANGE) {
  // set back to first page

  return { ...state, page: 1, [action.payload.name]: action.payload.value };
}
```

#### Production Setup - Fix Warnings and logoutUser

- getVehicles,deleteVehicle,showStats - invoke logoutUser()
- fix warnings

```sh
// eslint-disable-next-line
```

#### Production Setup - Build Front-End Application

- create front-end production application

```js
package.json
"scripts": {
    "build-client": "cd client && npm run build",
    "server": "nodemon server.js --ignore client",
    "client": "cd client && npm run start",
    "start": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
  },

```

```js
server.js;

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, "./client/build")));

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

// only when ready to deploy
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
```

#### Security Packages

- remove log in the error-handler
- [helmet](https://www.npmjs.com/package/helmet)
  Helmet helps you secure your Express apps by setting various HTTP headers.
- [xss-clean](https://www.npmjs.com/package/xss-clean)
  Node.js Connect middleware to sanitize user input coming from POST body, GET queries, and url params.
- [express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize)
  Sanitizes user-supplied data to prevent MongoDB Operator Injection.
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
  Basic rate-limiting middleware for Express.

```sh
npm install helmet xss-clean express-mongo-sanitize express-rate-limit
```

```js
server.js;

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
```

#### Limit Requests

```js
authRoutes.js;

import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
```

#### Alternative Search with Debounce

client/components/SearchContainer.js

```js

import { useState, useMemo } from 'react';
const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('');
  const {
    ....
  } = useAppContext();
  const handleSearch = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };
  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        handleChange({ name: e.target.name, value: e.target.value });
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);
  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          {/* search position */}

          <FormRow
            type='text'
            name='search'
            value={localSearch}
            handleChange={optimizedDebounce}
          />
         ........
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
```

#### Deploy To Heroku

- heroku login

```js
package.json

"engines": {
    "node": "16.x"
  }
"scripts":{
    "build-client": "cd client && npm run build",
    "install-client": "cd client && npm install",
    "heroku-postbuild": "npm run install-client && npm run build-client",
}
```

```js
Procfile

web: node server.js
```

- rm -rf .git
- git init
- git add .
- git commit -m "first commit"
- heroku create nameOfTheApp
- git remote -v
- add env variables
- git push heroku main/master
