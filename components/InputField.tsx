import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Value } from "./types";

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

interface InputFieldProps {
  values?: Value;
  addAttribute: (values: any) => void;
}

function InputField({ values, addAttribute }: InputFieldProps) {
  const onChange = useCallback((evt: any) => {
    console.log(evt?.target.value);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log("ddddd", data);
    addAttribute(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="name"
        {...register("name")}
        onChange={onChange}
        defaultValue={values ? values.name : ""}
      />
      <input
        placeholder="data-type"
        {...register("dataType")}
        onChange={onChange}
        defaultValue={values ? values.dataType : ""}
      />
      <input
        placeholder="key-type"
        {...register("keyType")}
        onChange={onChange}
        defaultValue={values ? values.keyType : ""}
      />
      <button type="submit">add</button>
      {errors.exampleRequired && <span>This field is required</span>}
    </form>
  );
}

export default InputField;
