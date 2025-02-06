import { useAppDispatch } from '../../../store/hooks';
import { deletePost } from '../../../store/slices/postsSlice/requests';
import { changeModalStatus } from '../../../store/slices/settingsSlice/settingsSlice';
import { IPost } from '../../../types/types';
import s from './deleteForm.module.scss';

export const DeletePost:React.FC<Pick<IPost, 'id'>> = (props) => {
    const dispatch = useAppDispatch();
    
        const handleDelete = () => {
        dispatch(deletePost(props.id));
        dispatch(changeModalStatus());
    }
    
    return (
        <div className={s.wrapper}>
            <h2 className='text-[24px] font-semibold mb-5'>Удаление поста</h2>
            <p>Вы уверены, что хотите удалить пост с id: {props.id}?</p>
            <button 
            type='button' 
            onClick={handleDelete}
            className='bg-red-500 hover:bg-red-700 text-white p-2 rounded'>
                Удалить
            </button>
        </div>
    )
}