import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
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
  const [saved, setSaved] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log("ddddd", data);
    addAttribute(data);
    setSaved(true);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-7 w-[200px] my-1"
    >
      <input
        className="text-[8px] col-span-2"
        placeholder="name"
        {...register("name")}
        onChange={onChange}
        defaultValue={values ? values.name : ""}
      />
      <input
        className="text-[7px] col-span-2"
        placeholder="string"
        {...register("dataType")}
        onChange={onChange}
        defaultValue={values ? values.dataType : ""}
      />
      <select
        className="text-[7px] col-span-2"
        {...register("key-type")}
        defaultValue={values ? values.keyType : "None"}
      >
        <option value="None">None</option>
        <option value="PK">PK</option>
        <option value="FK">FK</option>
        <option value="Key">Key</option>
      </select>
      <button
        type="submit"
        className="text-[7px] col-span-1 text-center flex items-center justify-center"
      >
        {saved ? (
          <>
            <MdModeEdit
              fontSize={12}
              className="text-sky-400 bg-sky-600 rounded-[10px] p-[2px]"
            />
            <MdDelete
              fontSize={12}
              className="text-rose-400 bg-rose-600 rounded-[10px] p-[1px] mx-[2px]"
            />
          </>
        ) : (
          <TiTick
            fontSize={12}
            className="text-green-600 bg-green-100 rounded-[10px]"
          />
        )}
      </button>
      {errors.exampleRequired && <span>This field is required</span>}
    </form>
  );
}

export default InputField;
