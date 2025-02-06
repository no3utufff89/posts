import s from './post.module.scss';
import { IPost } from "../../types/types";
import clsx from 'clsx';
import { Calendar, Clock2 } from 'lucide-react';
import { Controls } from '../Controls/Controls';
import { useAppDispatch } from '../../store/hooks';
import { changeModalStatus, changeModalTitle, setCurrentPostData } from '../../store/slices/settingsSlice/settingsSlice';

export const Post:React.FC<IPost> = (props) => {
    const currentData:IPost = {
        id: props.id,
        title: props.title,
        description: props.description,
        photo: props.photo,
        time: props.time,
        date: props.date,
    }
    const dispatch = useAppDispatch();
    const handleEdit = () => {
        dispatch(changeModalStatus());
        dispatch(changeModalTitle({modalType:'edit'}));
        dispatch(setCurrentPostData(currentData))
    }
    const handleDelete = () => {
        dispatch(changeModalStatus());
        dispatch(changeModalTitle({modalType:'del'}));
        dispatch(setCurrentPostData(currentData))
        
        
    }
    return (
        <li data-id={props.id} className={clsx(s.post, 'flex')}>
            <div className={s.header}>
            <img 
                src={props.photo || props.photo === '' ? `/public/404-image.png` : props.photo} 
                alt={props.title} 
                width={50} 
                height={50}
                className={s.image}
                />
            </div>
            <div className={clsx(s.content, 'flex flex-col')}>
                <p className='font-semibold text-lg'>{props.title}</p>
                <p>{props.description}</p>
                <div className={s.footer}>
                    <span className={s.time}>
                        <Clock2/>
                        {props.time}</span>
                    <span className={s.date}>
                        <Calendar/>
                        {props.date}</span>
                </div>
            </div>
            <Controls id={props.id} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </li>
    )
}