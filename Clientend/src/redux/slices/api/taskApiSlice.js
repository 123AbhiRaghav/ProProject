import {apiSlice} from '../apiSlice'

const TASKS_URL = '/task';

export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: () => ({
                url: `${TASKS_URL}/dashboard`,
                method:"GET",
                credentials: "include",
                headers: {"token": localStorage.getItem("token")}
            }),
        }),

    getAllTasks: builder.query({
        query: ({strQuery, isTrashed, search}) => ({
            url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
            method:"GET",
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
    }),

    createTask: builder.mutation({
        query: (data) => ({
            url: `${TASKS_URL}/create`,
            method:"POST",
            body: data,
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
    }),

    duplicateTask: builder.mutation({
        query: (id) => ({
            url: `${TASKS_URL}/duplicate/${id}`,
            method: "POST",
            body: {},
            credentials:"include",
            headers: {"token": localStorage.getItem("token")}
        }),
    }),

     updateTask: builder.mutation({
        query: (data) => ({
            url: `${TASKS_URL}/update/${data._id}`,
            method: "PUT",
            body: data,
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
     }),

     trashTask: builder.mutation({
        query: ({id}) => ({
            url: `${TASKS_URL}/${id}`,
            method: "PUT",
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
     }),

     createSubTask: builder.mutation({
        query: ({data, id}) => ({
            url: `${TASKS_URL}/create-subtask/${id}`,
            method: "PUT",
            body: data,
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
     }),

     deleteRestoreTask: builder.mutation({
        query: ({id, actionType}) => ({
            url: `${TASKS_URL}/delete-restore/${id}?actionType=${actionType}`,
            method: "DELETE",
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
     }),

     getSingleTask: builder.query({
        query: (id) => ({
            url: `${TASKS_URL}/${id}`,
            method: "GET",
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
     }),

     postTaskActivity: builder.mutation({
        query: ({id, data}) => ({
            url: `${TASKS_URL}/activity/${id}`,
            method: "POST",
            body: data,
            credentials: "include",
            headers: {"token": localStorage.getItem("token")}
        }),
     }),
    }),
});

export const {
    useGetDashboardStatsQuery, 
    useGetAllTasksQuery, 
    useCreateTaskMutation,
   useDuplicateTaskMutation,
   useUpdateTaskMutation,
   useTrashTaskMutation,
   useCreateSubTaskMutation,
   useDeleteRestoreTaskMutation,
   useGetSingleTaskQuery,
   usePostTaskActivityMutation,
} = taskApiSlice;