import { useEffect, useState } from "react";
import { ListProps } from "./List"
import SearchBar from "./SearchBar";

export default function WithSearch<ItemT>(
    Component: React.ComponentType<ListProps<ItemT>>,
    filterFunction: (item: ItemT, search: string) => boolean
) {
    return function WrappedComponent(props: ListProps<ItemT>) {
        const [filterList, setFilterList] = useState<ItemT[]>(props.items);

        useEffect(() => {
            setFilterList(props.items);
        }, [props.items]);

        const changeHandler = (value: string) => {
            const newFilteredItems = filterUsers(value);
            setFilterList(newFilteredItems);
        };

        const filterUsers = (search: string): ItemT[] => {
            return props.items.filter((item: ItemT) => filterFunction(item, search));
        };

        return (
            <div>
                <SearchBar onChange={changeHandler} />
                <Component {...props} items={filterList} />
            </div>
        );
    };
}