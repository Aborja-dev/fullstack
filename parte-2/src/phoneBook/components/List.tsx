export interface ListProps <ItemsT>{
    items: ItemsT[]
    render: (item: ItemsT) => JSX.Element
    elementKey: (item: ItemsT) => string
    noItemComponent?: JSX.Element
}

const NoItem = () => <p>No items</p>

export default function List <ItemsT>({items, render, elementKey, noItemComponent}: ListProps<ItemsT>) {
    return (
        <>
        {items.length === 0 
        ? noItemComponent || <NoItem /> 
        : ( <ul>
            {items.map(item => <li key={elementKey(item)}>{render(item)}</li>)}
        </ul>)}
        </>
    )
}