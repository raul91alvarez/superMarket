export interface IUserInterface {
    uid: string,
    email: string,
    emailVerified?: boolean,
    displayName: string,
    password: string,
    disabled: boolean,
    date?:Date
}

export interface IAuthentications {
    user: string,
    password:string
}