import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./shipping.css";
const Shipping = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />

        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
