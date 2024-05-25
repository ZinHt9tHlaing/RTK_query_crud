import { Link } from "react-router-dom";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "../store/api/endpoints/endpoints";

const User = () => {
  const { data, isLoading, isError, isSuccess } = useGetAllUsersQuery();

  const [fun] = useDeleteUserMutation();

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto w-2/3 ">
      {isLoading && (
        <h3 className=" text-2xl font-bold animate-pulse">loading...</h3>
      )}
      {isError && <h3>There is something wrong</h3>}
      {isSuccess &&
        data.map((user) => (
          <div
            key={user.id}
            className="group p-5 border rounded-lg shadow-lg shadow-gray-400 border-gray-600 m-2 hover:bg-black hover:text-white hover:scale-105 duration-300"
          >
            <h4 className=" text-xl font-bold">{user.name}</h4>
            <h4 className=" group-hover:text-gray-400">{user.email}</h4>
            <div className=" space-x-2 mt-5">
              <Link
                to={`/edit/${user.id}`}
                className="shadow rounded bg-green-800 text-white px-2 py-1 active:scale-95 duration-200"
              >
                Edit
              </Link>
              <button
                onClick={() => confirm(fun(user.id))}
                className="shadow rounded bg-red-600 text-white px-2 py-1 active:scale-95 duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default User;
