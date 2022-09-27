import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
// import Input from "./Input/Input"


interface IFormInput {
    firstName: string;
}



const SignUp: React.FC = () => {
    const {
        register,
        formState: {
            errors,

        },
        handleSubmit,
        reset
    } = useForm<IFormInput>({
        mode: 'onBlur',
    });






    const onSubmit: SubmitHandler<IFormInput> = (data) => {
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
                <span>{errors?.firstName && (errors?.firstName?.message || 'Error')}</span>
                <input type="submit" />
            </form>
        </div>
    )
}

export default SignUp;
