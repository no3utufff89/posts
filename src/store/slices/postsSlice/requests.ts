import { createAsyncThunk } from "@reduxjs/toolkit";
import PostsService from "../../../services/PostsService";
import { IPost } from "../../../types/types";

export const getAllPosts = createAsyncThunk(
    'posts/getAll',
    async () => {
        const response = await PostsService.fetchAllPosts();  
        return response.data
    }
);
export const updatePosts = createAsyncThunk(
    'posts/update',
    async (newPost: IPost) => {
        const response = await PostsService.updatePost(newPost);  
        return response.data
    }
)
export const deletePost = createAsyncThunk(
    'posts/delete',
    async (postId: string) => {
        const response = await PostsService.deletePost(postId);
        return response.data
    }
)