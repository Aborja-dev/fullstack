/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputValidationRule } from "../types"

export const validateRule = (rule: InputValidationRule, ...args: any): {
    isInvalid: boolean,
    message: string | null
    payload: any
} => {
    const invalid = rule.validatefn(...args)
    return {
        isInvalid: !invalid.valid,
        message: invalid ? rule.message : null,
        payload: invalid.payload

    }
}