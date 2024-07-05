export type User = {
    id: number,
    firstName: string,
    lastName: string,
    city: string,
    email: string,
    phone: string,
    notes: string,
    password?: string,
    confirmPassword?: string,
    type: 'master' | 'player'
}

export interface UserAuthRes {
    accessToken: string,
    user: User
}
