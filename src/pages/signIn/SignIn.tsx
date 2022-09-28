import React, { useState } from "react";
import * as s from './style';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ILogin } from '../../models/models';
import { singInSchema } from '../../schema/schema';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSlice } from '../../store/reducers/userReducer';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';


const SignIn: React.FC = () => {
    const { users } = useAppSelector(state => state.userReducer)
    const { login } = userSlice.actions
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const [showError, setShowError] = useState<boolean>(false)
    const [btnError] = useState<string>('Email or password is wrong')

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm<ILogin>({
        mode: 'all',
        resolver: yupResolver(singInSchema)
    });

    const onSubmit: SubmitHandler<ILogin> = (data) => {
        const first = users.find(user => user.email === data.email && user.password === data.password);
        if (first) {
            dispatch(login(first))
            setShowError(false)
            navigate('/home');
            reset();
        } else {
            setShowError(true)
        }
    }

    return (
        <>
            <s.Title> Sign In </s.Title>
            <s.Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder={"email"}
                    type={"email"}
                    txt={"Email:"}
                    register={register}
                    error={errors?.email && errors?.email?.message}
                    name={"email"} />
                <Input
                    placeholder={"password"}
                    type={"password"}
                    txt={"Password:"}
                    register={register}
                    error={errors?.password && errors?.password?.message}
                    name={"password"} />
                <Button
                    disabled={!isValid}
                    error={showError ? btnError : undefined}
                />
            </s.Form>
        </>
    )
}

export default SignIn;
