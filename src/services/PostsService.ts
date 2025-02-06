import { AxiosResponse } from "axios";
import instance from "../api/instance";
import { IPost } from "../types/types";
import { API_BASE_URL } from "../api/api_constants";

export default class PostsService {
    static async fetchAllPosts():Promise<AxiosResponse<IPost[]>> {
        return instance.get<IPost[]>(`${API_BASE_URL}/seminars`);
    }

    static async updatePost(newPost: IPost): Promise<AxiosResponse<IPost>> {
        console.log(newPost);
        
        return instance.put<IPost>(`${API_BASE_URL}/seminars/${newPost.id}`, newPost);
    }
    static async deletePost(postId: string): Promise<AxiosResponse<IPost>> {
        return instance.delete<IPost>(`${API_BASE_URL}/seminars/${postId}`);
    }
}