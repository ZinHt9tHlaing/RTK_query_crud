import { useEffect, useState } from "react";
import {
  useEditUserMutation,
  useGetUserQuery,
} from "../store/api/endpoints/endpoints";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const [editUser, setEditUser] = useState({
    id: id,
    name: "",
    email: "",
  });
  const nav = useNavigate();

  const { data, isLoading } = useGetUserQuery(id);
  const [fun] = useEditUserMutation();

  useEffect(() => {
    if (data) {
      setEditUser({ ...editUser, name: data.name, email: data.email });
    }
  }, [data]);

  const handleEditUser = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fun(editUser);
    nav("/");
  };

  return (
    <div className="flex justify-center mt-5">
      <form onSubmit={handleSubmit} className=" border-2 p-5 border-black">
        <h3 className=" text-2xl font-bold mb-5 text-center">Edit User</h3>
        <div className="flex flex-col">
          <label htmlFor="name" className=" text-lg cursor-pointer">
            Name:
          </label>
          <input
            value={editUser.name}
            onChange={handleEditUser}
            type="text"
            id="name"
            name="name"
            className={`border border-black px-3 py-2 ${
              isLoading && "placeholder:animate-pulse"
            } rounded focus:duration-300`}
            placeholder={isLoading ? "Loading..." : "Enter Name"}
          />
        </div>
        <div className="flex flex-col py-4">
          <label htmlFor="email" className=" text-lg cursor-pointer">
            Email:
          </label>
          <input
            value={editUser.email}
            onChange={handleEditUser}
            type="email"
            id="email"
            name="email"
            className={`border border-black px-3 py-2 ${
              isLoading && "placeholder:animate-pulse"
            } rounded focus:duration-300`}
            placeholder={isLoading ? "Loading..." : "Enter Email"}
          />
        </div>
        <button
          type="submit"
          className="shadow bg-black rounded text-white px-3 py-2 active:scale-95 duration-200"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
