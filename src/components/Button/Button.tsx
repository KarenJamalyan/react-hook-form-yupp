import React from 'react';
import * as s from './style'
import { IButton } from '../../models/models'


const Input: React.FC<IButton> = ({ error, disabled }) => {
    return (
        <>
            <s.SubmitInput type="submit" disabled={disabled} />
            <s.ErrorMessage>{error}</s.ErrorMessage>
        </>

    )

}

export default Input;