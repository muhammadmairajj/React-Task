import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
};

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

//   console.log(watch("fullName"));

  return (
    <div>
      <h1>React-Hook-Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Enter Your FullName" {...register("fullName", { required: true })} />
        <br />
        {errors.fullName && <span style={{color: 'red'}}>FullName is required</span>}
        <br />
        <br />
        <input placeholder="Enter Your Email" {...register("email", { required: true,  pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} />
        <br />
        {/* {errors.email && <span style={{color: 'red'}}>This field is required</span>} */}
        {errors.email?.type== "required" && <p style={{color: 'red'}}>Email is required</p>}
        {errors.email?.type=="pattern" && <p style={{color: 'red'}}>Email is Invalid</p>}
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
