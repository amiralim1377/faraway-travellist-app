import Header from "./ui/Header/Header";
import "./App.css";
import InputElem from "./ui/InputElem/InputElem";
import AllElemnt from "./ui/AllElemnt/allElemnt";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <InputElem />
        <AllElemnt />
      </div>
    </>
  );
}

export default App;
