export interface UserState {
    users: IUser[];
    currentUser: IUser | null;
}

export interface IInput {
    type: string;
    placeholder: string;
    register: any;
    txt: string;
    error?: string;
    name: string;
}

export interface IButton {
    error?: string;
    disabled: boolean;
}

export interface IUser {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
}

export interface ILogin {
    email: string;
    password: string;
}
