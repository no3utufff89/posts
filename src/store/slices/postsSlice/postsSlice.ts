import { createSlice } from "@reduxjs/toolkit";
import { DefaultStateType } from "../../../types/types";
import { deletePost, getAllPosts, updatePosts } from "./requests";
const initialState: DefaultStateType = {
         loading: false,
         hasError: false,
}
const postsSlice = createSlice({
     name: 'posts',
     initialState: initialState,
     reducers: {
       
     },
     extraReducers: (builder) => {
        builder
        .addCase(getAllPosts.pending, (state) => {
            state.loading = true;
         })
        .addCase(getAllPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.hasError = false;
        })
        .addCase(getAllPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error as Error;
            state.hasError = true;
         })
         .addCase(updatePosts.pending, (state) => {
            state.loading = true;
         })
         .addCase(updatePosts.fulfilled, (state, action) => {
            state.loading = false;
            state.hasError = false;
            state.posts = state.posts?.map((post) =>
              post.id === action.payload.id? action.payload : post
            );
         })
         .addCase(updatePosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error as Error;
            state.hasError = true;
         })
         .addCase(deletePost.pending, (state) => {
            state.loading = true;
         })
         .addCase(deletePost.fulfilled, (state, action) => {
            state.loading = false;
            state.hasError = false;
            state.posts = state.posts?.filter((post) => post.id!== action.payload.id);
         })
     },
});
export default postsSlice.reducer;