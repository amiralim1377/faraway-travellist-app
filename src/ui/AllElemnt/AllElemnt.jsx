import { useSelector } from "react-redux";
import "./AllElement.css";

function AllElemnt() {
  const item = useSelector((state) => state.remember.item);
  const number = useSelector((state) => state.remember.number);
  return (
    <div className="allElWrapper">
      <ul>
        <li>
          <input type="checkbox" name="" id="" />
          <span>{number}</span>
          <span>-</span>
          <span>{item}</span>
          <button>❌</button>
        </li>
      </ul>
    </div>
  );
}

export default AllElemnt;
