import { useDispatch } from "react-redux";
import { deleteremember, updateremember } from "../../reducer/reducer";
import "./AllElementItems.css";

function AllElementItems({ remember }) {
  const { number, item, id, checked } = remember;
  console.log(checked);

  const dispatch = useDispatch();
  const handledelete = (id) => {
    dispatch(deleteremember(id));
  };
  const handleUpdate = (id) => {
    dispatch(updateremember(id));
  };
  return (
    <div className="licontainer">
      <li>
        {/* <input
          onClick={() => handleUpdate(id)}
          type="checkbox"
          name=""
          id=""
          className="checkbox"
        /> */}
        <span>{number}</span>
        <span>-</span>
        <span>{item}</span>
        <span>-</span>
        <button
          onClick={() => handledelete(id)}
          className="button-44"
          role="button"
        >
          Delete
        </button>
        <div>
          {checked ? (
            <button
              onClick={() => handleUpdate(id)}
              className="button-68"
              role="button"
            >
              checked
            </button>
          ) : (
            <button
              onClick={() => handleUpdate(id)}
              className="button-32"
              role="button"
            >
              unchecked
            </button>
          )}
        </div>
      </li>
    </div>
  );
}

export default AllElementItems;
