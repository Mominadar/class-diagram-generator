import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { Value } from "../types";

import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, "Must be 1 or more characters long"),
  dataType: z.string(),
  keyType: z.enum(["PK", "FK", "Key", "None"]),
});

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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
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
        {...register("keyType")}
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
              className="text-slate-600 p-[2px] rounded-[10px] bg-slate-200"
            />
            <MdDelete
              fontSize={12}
              className="text-slate-600 p-[1px] rounded-[10px] bg-slate-200 m-[2px]"
            />
          </>
        ) : (
          <TiTick
            fontSize={12}
            className="text-slate-600 p-[1px] rounded-[10px] bg-slate-200"
          />
        )}
      </button>
      {errors.exampleRequired && <span>This field is required</span>}
      {errors && errors.name && <p>upppp</p>}
    </form>
  );
}

export default InputField;
