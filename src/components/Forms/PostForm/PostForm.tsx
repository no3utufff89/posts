import { useForm } from 'react-hook-form';
import { IPost } from '../../../types/types';
import s from './postForm.module.scss';
import { useSelector } from 'react-redux';
import { changeModalStatus, getCurrentPostData, getModalTitle } from '../../../store/slices/settingsSlice/settingsSlice';
import { useAppDispatch } from '../../../store/hooks';
import { updatePosts } from '../../../store/slices/postsSlice/requests';

export const PostForm:React.FC = () => {
   
    const dispatch = useAppDispatch();
    const postData = useSelector(getCurrentPostData);
    const modalTitle = useSelector(getModalTitle);
    const {
        register,
        handleSubmit,
    } = useForm<IPost>({
        defaultValues: {
            title: postData?.title,
            description: postData?.description,
        },
    });

    const onSubmit = (data: IPost) => {
        data.time = new Date().toLocaleTimeString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
    });
        data.date = new Date().toLocaleDateString();
        if (postData?.id) {
            data.id = postData?.id
            dispatch(updatePosts(data));
        } 
        dispatch(changeModalStatus());
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <legend className='text-[24px] font-semibold mb-5'>{modalTitle}</legend>
           <div className={s.wrapper}>
           <fieldset className={s.fieldset}>
                <label className={s.label}>
                    Название: 
                    <input className={s.input}
                    type='text'
                    
                    {...register('title',{
                        required: true,
                    })}
                    />
                </label>
                <label className={s.label}>
                    Описание: 
                    <textarea className={s.input}
                    {...register('description',{
                        required: true,
                    })}
                    />
                </label>
                <label className={s.label}>
                    Ссылка нового изображения: 
                    <input className={s.input}
                    type='text'
                    {...register('photo',{})}
                    />
                </label>
                
            </fieldset>
            <div className={s.image}>
            <img src={postData?.photo || postData?.photo === '' ? `/public/404-image.png` : postData?.photo} />
            </div>
            </div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded'>
                Отправить
            </button>
        </form>
    )
}