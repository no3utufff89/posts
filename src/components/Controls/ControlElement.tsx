import clsx from "clsx"
export type ControlBtn = {
    text: string,
    onClick?: () => void,
    className?: string,
    disabled?: boolean,
    loading?: boolean,
    type?: 'button' |'submit' |'reset',
    children?: React.ReactNode,
}
export const ControlElement = (props:ControlBtn) => {    
    return (
        <button 
        type={props.type || 'button'}
        disabled={props.disabled}
        onClick={props.onClick}
        className={clsx('flex')}
        title={props.text}
        >
            {props.children}
        </button>
    )
}