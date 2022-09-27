export interface UserState {
    loading: boolean;
    error: null | string;
}

export interface IInput {
    type: string;
    text: string;
    onChange: any;
    value: string;
    name: string;
}