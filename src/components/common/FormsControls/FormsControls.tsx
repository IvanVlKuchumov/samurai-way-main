import {FC} from 'react';
import {WrappedFieldProps} from 'redux-form';
import s from './FormControls.module.css'

const FormControl: FC<WrappedFieldProps> = (props) => {

    const {input, meta, children, ...restProps} = props

    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea: FC<WrappedFieldProps> = (props) => {

    const {input, meta, ...restProps} = props

    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}