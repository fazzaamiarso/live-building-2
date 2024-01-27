import { useForm } from "react-hook-form";

const PersonalInfo = () => {
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
  }

    return (
    <div className="bg-white p-4">
      <div>
      <h1 className="font-bold text-2xl">Personal Info</h1>
      <p>Please provide your name, email address, and phone number</p>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col  ">
            <label htmlFor="name">Name</label>
            <input type="text" {...register("name")} id="name"  placeholder="e.g. Stephen King" />
        </div>
        <div className="flex flex-col  ">
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} id="email"  placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div className="flex flex-col  ">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" {...register("phoneNumber")} id="phoneNumber"  placeholder="e.g. +62 43434343434" />
        </div>
        <button type="submit">Next Step</button>
      </form>
      </div>
      
    </div>
  );
};

export default PersonalInfo;
