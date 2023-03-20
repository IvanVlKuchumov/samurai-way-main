import {FC} from 'react';
import {WrappedFieldProps} from 'redux-form';
import s from './FormControls.module.css'

export const FormControls: FC<WrappedFieldProps> = (props) => {

    const {input, meta, ...restProps} = props

    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...restProps} />
            </div>
            {hasError && <span>Some Error</span>}
        </div>
    )
}