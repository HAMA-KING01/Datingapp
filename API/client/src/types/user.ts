export type User = {
    id: string;
    displayNmae: string;
    email: string;
    token: string;
    imageUrl?: string;
}
export type loginCreds ={
    email: string;
    password: string;
}
export type RegisterCreds ={
    email: string;
    displayNmae: string;
    password: string;
}