import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as s from './style'
import { yupResolver } from '@hookform/resolvers/yup';
import { IUser } from '../../models/models';
import { singUpSchema } from '../../schema/schema';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/userReducer';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';


const SignUp: React.FC = () => {
    const { users } = useAppSelector(state => state.userReducer)
    const { addUser, login } = userSlice.actions
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const [showError, setShowError] = useState<boolean>(false)
    const [btnError] = useState<string>('This email is already registered')

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm<IUser>({
        mode: 'all',
        resolver: yupResolver(singUpSchema)
    });

    const onSubmit: SubmitHandler<IUser> = (data) => {
        const first = users.find(user => user.email === data.email);
        if (!first) {
            dispatch(addUser(data));
            dispatch(login(data))
            navigate('/home');
            setShowError(false)
            reset();
        } else {
            setShowError(true)
        }
    }

    return (
        <div>
            <s.Title> Sign Up </s.Title>
            <s.Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder={"first name"}
                    type={"text"}
                    txt={"First Name:"}
                    register={register}
                    error={errors?.firstName && errors?.firstName?.message}
                    name={"firstName"}
                />
                <Input
                    placeholder={"last name"}
                    type={"text"}
                    txt={"Last Name:"}
                    register={register}
                    error={errors?.lastName && errors?.lastName?.message}
                    name={"lastName"}
                />
                <Input
                    placeholder={"age"}
                    type="number"
                    txt="Age:"
                    register={register}
                    error={errors?.age && errors?.age?.message}
                    name="age"
                />
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
        </div>
    )
}

export default SignUp;
