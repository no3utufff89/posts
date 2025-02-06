import { Pencil, Trash2 } from 'lucide-react';
import { ControlElement } from './ControlElement';
import s from './controls.module.scss';
type IControls = {
    id: string,
    handleDelete?: () => void,
    handleEdit?: () => void,

}

export const Controls:React.FC<IControls> = (props) => {
    return (
        <ul className={s.list}>
            <li className={s.item}>
                <ControlElement text='Edit' onClick={props.handleEdit}>
                    <Pencil className='text-gray-400' />
                </ControlElement>
            </li>
            <li className={s.item}>
                <ControlElement text='Delete' onClick={props.handleDelete}>
                    <Trash2 className='text-gray-400' />
                </ControlElement>
            </li>
        </ul>
    )
}