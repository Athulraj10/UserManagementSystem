import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndPoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout:{
      
    }
  }),
});

export const { useLoginMutation } = usersApiSlice;
