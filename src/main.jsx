import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store.js";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";
const persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
);
