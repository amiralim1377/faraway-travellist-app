import { useSelector } from "react-redux";
import "./AllElement.css";
import AllElementItems from "../AllElementItems/AllElementItems";

function AllElemnt() {
  const remembers = useSelector((state) => state.remember);

  return (
    <div className="allElWrapper">
      <ul className="ulElem">
        {remembers?.map((remember) => (
          <AllElementItems remember={remember} />
        ))}
      </ul>
    </div>
  );
}

export default AllElemnt;
