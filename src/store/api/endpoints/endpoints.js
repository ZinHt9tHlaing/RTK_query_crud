import { UserAPi } from "../userApi";

const endpoint = UserAPi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["User"],
    }),
    createUsers: builder.mutation({
      query: (user) => ({
        method: "POST",
        url: "/users",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    editUser: builder.mutation({
      query: (user) => ({
        method: "PUT",
        url: `/users/${user.id}`,
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/users/${id}`,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useCreateUsersMutation,
  useEditUserMutation,
  useDeleteUserMutation
} = endpoint;
