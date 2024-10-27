import { useSelector } from "react-redux";
import AllElementItems from "../AllElementItems/AllElementItems";
import "./AllElement.css";

function AllElemnt() {
  const remembers = useSelector((state) => state.remember);

  return (
    <div className="allElWrapper">
      <ul className="ulElem">
        {remembers?.map((remember) => (
          <AllElementItems key={remember.id} remember={remember} />
        ))}
      </ul>
    </div>
  );
}

export default AllElemnt;
