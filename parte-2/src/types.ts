/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InputValidationRule {
    message: string,
    validatefn: (...args: any) => {valid: boolean, payload: any}
}

export interface Person {
    name: string
    number: string
    id: number
}