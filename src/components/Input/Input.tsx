import React from 'react';
import * as s from './style'
import { IInput } from '../../models/models'


const Input: React.FC<IInput> = ({ type, text, onChange, value, name }) => {

    return type === 'submit'
        ?
        <s.SubmitInput type={type} name={name} />
        :
        <s.Input type={type} onChange={onChange} value={value} name={name}> {text} </s.Input>

}

export default Input;