import { useForm } from "react-hook-form";
import "./InputElem.css";
import { useDispatch, useSelector } from "react-redux";
import { addremember, clearallremember } from "../../reducer/reducer";
import { v4 as uuidv4 } from "uuid";

function InputElem() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState, setFocus } = useForm();
  const { errors: errorsinput } = formState;

  const onSubmit = (data) => {
    console.log(data);
    const newobj = { id: uuidv4(), checked: false, ...data };
    dispatch(addremember(newobj));
    reset();
  };

  function handleClearall(e) {
    e.preventDefault();
    if (confirm("Are you sure you want to clear all the list?")) {
      dispatch(clearallremember());
    }
  }

  return (
    <div>
      <div className="formWrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>What do you need for your trip?</span>
          <span>TRAVELERS CHECKLIST FOR HOLIDAY OR BUSINESS</span>
          <select
            defaultValue={1}
            {...register("number", { valueAsNumber: true })}
          >
            {Array.from({ length: 20 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <input
            {...register("item", { required: "This field is required" })}
            type="text"
            placeholder="item"
            autoFocus
          />
          {errorsinput?.item && (
            <p className="inputError">{errorsinput.item.message}</p>
          )}
          <div className="btnWraper">
            <input type="submit" value="Add Item" className="btn" />
            <button
              onClick={handleClearall}
              className="button-34"
              role="button"
            >
              clear all
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputElem;
