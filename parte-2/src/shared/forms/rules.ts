import { InputValidationRule, Person } from "../../types"

export const uniqueRule: InputValidationRule = {
    message: 'ya existe',
    validatefn: (array: Person[], value: string) => {
        const index = array.find((item) => item.name === value)
        return {
            valid: index ? false : true,
            payload: index && index.id
        }
    }
}
