import { useState } from "react";
import { useCreateUsersMutation } from "../store/api/endpoints/endpoints";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [createUser, setCreateUser] = useState({});
  const nav = useNavigate();

  const [fun] = useCreateUsersMutation();

  const handleCreateUser = (e) => {
    setCreateUser({ ...createUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fun(createUser);
    nav("/");
  };

  return (
    <div className="flex justify-center mt-5">
      <form onSubmit={handleSubmit} className=" border-2 p-5 border-black">
        <h3 className=" text-2xl font-bold mb-5 text-center">Add User</h3>
        <div className="flex flex-col">
          <label htmlFor="name" className=" text-lg cursor-pointer">
            Name:
          </label>
          <input
            onChange={handleCreateUser}
            type="text"
            id="name"
            name="name"
            className="border border-black px-3 py-2 rounded focus:duration-300"
            placeholder="Enter name"
          />
        </div>
        <div className="flex flex-col py-4">
          <label htmlFor="email" className=" text-lg cursor-pointer">
            Email:
          </label>
          <input
            onChange={handleCreateUser}
            type="email"
            id="email"
            name="email"
            className="border border-black px-3 py-2 rounded focus:duration-300"
            placeholder="Enter Email"
          />
        </div>
        <button type="submit" className="shadow bg-black rounded text-white px-3 py-2 active:scale-95 duration-200">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
