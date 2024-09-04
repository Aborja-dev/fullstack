type functionList = <T>(arrayOfItems: T[], renderFunction: (...args: any) => JSX.Element) => () => JSX.Element   

export const ListOf: functionList = (arrayOfItems, renderFunction) => {
    return () => {
        return (
            <ul>
                {
                    arrayOfItems.map(renderFunction)
                }
            </ul>
        )
    }
}

export const List = ({array, render}) => {
    return (
        <ul>
            {array.map(render)}
        </ul>
    )
}
