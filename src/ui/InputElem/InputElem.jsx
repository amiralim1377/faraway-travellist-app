import { useForm } from "react-hook-form";
import "./InputElem.css";
import { useDispatch } from "react-redux";
import { addremember } from "../../reducer/reducer";
import { v4 as uuidv4 } from "uuid";

function InputElem() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors: errorsinput } = formState;

  const onSubmit = (data) => {
    console.log(data);
    const newobj = { id: uuidv4(), checked: false, ...data };

    dispatch(addremember(newobj));
    reset();
  };
  return (
    <div>
      <div className="formWrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>What do you need for your trip?</span>
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
          />
          {errorsinput?.item && (
            <p className="inputError">{errorsinput.item.message}</p>
          )}
          <input type="submit" value="Add Item" />
        </form>
      </div>
    </div>
  );
}

export default InputElem;
