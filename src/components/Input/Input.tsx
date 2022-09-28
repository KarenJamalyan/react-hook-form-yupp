import React from 'react';
import * as s from './style'
import { IInput } from '../../models/models'


const Input: React.FC<IInput> = ({ type, placeholder, txt, register, error, name }) => {
    return (
        <>
            <s.Label>
                {txt}
                <s.Input type={type} placeholder={placeholder} {...register(name)} />
            </s.Label>
            <s.ErrorMessage>{error}</s.ErrorMessage>
        </>

    )

}

export default Input;