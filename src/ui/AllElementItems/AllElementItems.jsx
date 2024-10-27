import { useDispatch } from "react-redux";
import { deleteremember } from "../../reducer/reducer";

function AllElementItems({ remember }) {
  const dispatch = useDispatch();
  const handledelete = (id) => {
    dispatch(deleteremember(id));
  };
  return (
    <li key={remember.id}>
      <input type="checkbox" name="" id="" />
      <span>{remember.number}</span>
      <span>-</span>
      <span>{remember.item}</span>
      <button onClick={() => handledelete(remember.id)}>❌</button>
    </li>
  );
}

export default AllElementItems;
