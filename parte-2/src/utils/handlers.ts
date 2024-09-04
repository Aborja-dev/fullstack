export const changeHandler = <T>(value: T, setState: React.Dispatch<React.SetStateAction<T>>) => {
    setState(value)
}
export const submitHandler = (event: React.FormEvent<HTMLFormElement>, cb: () => void) => {
    event.preventDefault()
    cb()
}