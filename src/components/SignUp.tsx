import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
// import Input from "./Input/Input"


interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
}



const SignUp: React.FC = () => {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm<IFormInput>({
        mode: 'all',
    });






    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
        alert(JSON.stringify(data))
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    firstName:
                    <input  {...register('firstName', {
                        required: "What's your name ?",
                        minLength: {
                            value: 3,
                            message: "your username must be between 6 and characters long"
                        }
                    })} />
                </label>
                <label>
                    lastName:
                    <input  {...register('lastName', {
                        required: "What's your name ?",
                        minLength: {
                            value: 3,
                            message: "your username must be between 6 and characters long"
                        }
                    })} />
                </label>
                <label>
                    age:
                    <input  {...register('age', {
                        required: "What's your name ?",
                        minLength: {
                            value: 3,
                            message: "your username must be between 6 and characters long"
                        }
                    })} />
                </label>
                <label>
                    email:
                    <input  {...register('email', {
                        required: "What's your name ?",
                        minLength: {
                            value: 3,
                            message: "your username must be between 6 and characters long"
                        }
                    })} />
                </label>
                <label>
                    password:
                    <input  {...register('password', {
                        required: "What's your name ?",
                        minLength: {
                            value: 3,
                            message: "your username must be between 6 and characters long"
                        }
                    })} />
                </label>
                <span>{errors?.firstName && (errors?.firstName?.message || 'Error')}</span>
                <input type="submit" disabled={!isValid} />
            </form>
        </div>
    )
}

export default SignUp;
