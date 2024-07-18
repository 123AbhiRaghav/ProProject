import {apiSlice} from '../apiSlice'

const USER_URL = '/user'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
     updateUser: builder.mutation({
         query: (data) => ({
             url: `${USER_URL}/profile`,
             method: "PUT",
             body: data,
             credentials: "include",
             headers: {"token": localStorage.getItem("token")}
         }),
     }),
 
     register: builder.mutation({
         query: (data) => ({
             url: `${USER_URL}/register`,
             method: "POST",
             body: data,
             credentials: "include",
             headers: {"token": localStorage.getItem("token")}
         }),
     }),

     getTeamList: builder.query({
        query: () => ({
            url: `${USER_URL}/get-team`,
            method: "GET",
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
    }),

    deleteUser: builder.mutation({
        query: (id) => ({
            url: `${USER_URL}/${id}`,
            method: "DELETE",
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
    }),

    userAction: builder.mutation({
        query: (data) => ({
            url: `${USER_URL}/${data.id}`,
            method: "PUT",
            body:data,
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
    }),
   
    getNotifications: builder.query({
        query: () => ({
            url: `${USER_URL}/notifications`,
            method: "GET",
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
    }),

    markNotiAsRead: builder.mutation({
        query: (data) => ({
            url: `${USER_URL}/read-noti?isReadType = ${data.type}&id=${data?.id}`,
            method: "PUT",
            body:data,
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
    }),

    changePassword: builder.mutation({
        query: (data) => ({
            url: `${USER_URL}/change-password`,
            method: "PUT",
            body: data,
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
    }),
    }),
 });

 export const {
    useUpdateUserMutation, 
    useGetTeamListQuery, 
    useDeleteUserMutation, 
    useUserActionMutation,
    useGetNotificationsQuery,
    useMarkNotiAsReadMutation,
    useChangePasswordMutation,
    useRegisterMutation, 
} = userApiSlice;