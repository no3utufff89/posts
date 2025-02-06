import s from './postsList.module.scss';
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { ErrorBlock } from "../ErorBLock/ErrorBlock";
import { Post } from "../Post/Post";
import { useEffect } from 'react';
import { getAllPosts } from '../../store/slices/postsSlice/requests';

export const PostsList = () => {
    const dispatch = useAppDispatch();
    const {hasError, loading, posts} = useAppSelector(state => state.posts);
    useEffect(() => {
        dispatch(getAllPosts());
    },[])
    return (
        <>
        {loading && <p>загрузка</p>}
        {hasError && <ErrorBlock/>}
        <ul className={s.list}>
           {posts?.map(item => {
            return <Post key={item.id} {...item}/>
           })}
        </ul>
        </>
       
    )
}