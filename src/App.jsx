import Header from "./ui/Header/Header";
import "./App.css";
import InputElem from "./ui/InputElem/InputElem";
import AllElemnt from "./ui/AllElemnt/allElemnt";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <Header />
          <InputElem />
          <AllElemnt />
        </div>
      </Provider>
    </>
  );
}

export default App;
