import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// client side rendered app: react (cra)
// database which is Firebase
//react-loading-skeleton
// tailwind

//architecture (folder structure)
//src
// components,
// contants,
// context,
// lib (firebase isgoing to live in here)
// services (firebase functions)
// styles (tailwind folder app/tailwind)
