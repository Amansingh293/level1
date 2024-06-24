import React from "react";
import useFormValidation from "../Hooks/useFormValidation";
import validateForm from "../validationRules";

const EventRegistrationForm = () => {
  const initialState = {
    name: "",
    email: "",
    age: "",
    attendingWithGuest: false,
    guestName: "",
  };

  const { values, errors, handleChange, handleSubmit } = useFormValidation(
    initialState,
    validateForm
  );

  const onSubmit = () => {
    alert(`Form submitted successfully with data: 
      Name: ${values.name}
      Email: ${values.email}
      Age: ${values.age}
      Attending with guest: ${values.attendingWithGuest ? "Yes" : "No"}
      Guest Name: ${values.guestName}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col justify-around gap-10 items-start border-[2px] rounded-lg shadow-xl p-6"
    >
      <div className="flex flex-col gap-3 items-start lg:text-[1.5rem]">
        <div className="flex justify-between gap-3 items-center w-full">
          <label>Name:</label>
          <input
            className="border-[1px] rounded-xl shadow-md p-1"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        {errors.name && <span className="text-red-500">{errors.name}</span>}
      </div>
      <div className="flex flex-col gap-3 items-start lg:text-[1.5rem]">
        <div className="flex justify-between gap-3 items-center w-full">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="border-[1px] rounded-xl shadow-md p-1"
          />
        </div>
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>
      <div className="flex flex-col gap-3 items-start lg:text-[1.5rem]">
        <div className="flex justify-between gap-3 items-center w-full">
          <label>Age:</label>
          <input
            className="border-[1px] rounded-xl shadow-md p-1"
            type="number"
            name="age"
            value={values.age}
            onChange={handleChange}
          />
        </div>
        {errors.age && <span className="text-red-500">{errors.age}</span>}
      </div>
      <div className="flex flex-col gap-3 items-start lg:text-[1.5rem]">
        <div className="flex justify-between gap-3 items-center w-full">
          <label>Are you attending with a guest?</label>
          <input
            type="checkbox"
            name="attendingWithGuest"
            checked={values.attendingWithGuest}
            onChange={handleChange}
          />
        </div>
      </div>
      {values.attendingWithGuest && (
        <div className="flex flex-col gap-3 items-start lg:text-[1.5rem]">
          <div className="flex justify-between gap-3 items-center w-full">
            <label>Guest Name:</label>
            <input
              type="text"
              name="guestName"
              value={values.guestName}
              onChange={handleChange}
              className="border-[1px] rounded-xl shadow-md p-1"
            />
          </div>
          {errors.guestName && (
            <span className="text-red-500">{errors.guestName}</span>
          )}
        </div>
      )}
      <button
        type="submit"
        className="bg-purple-600 self-end text-white border-[1px] rounded-xl shadow-md p-2"
      >
        Submit
      </button>
    </form>
  );
};

export default EventRegistrationForm;
