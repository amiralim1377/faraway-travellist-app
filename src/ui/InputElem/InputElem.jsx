import { useForm } from "react-hook-form";
import "./InputElem.css";

function InputElem() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="formWrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>What do you need for your trip?</span>
          <select>
            {Array.from({ length: 20 }, (_, i) => (
              <option {...register("number")} value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <input {...register("item")} type="text" placeholder="item" />
          <input type="submit" value="Add Item" />
        </form>
      </div>
    </div>
  );
}

export default InputElem;
