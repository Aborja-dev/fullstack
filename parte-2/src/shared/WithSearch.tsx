import { useEffect, useState } from "react"

export const WithSearch = (WrappedComponent) => {
    return (props) => {
        console.log('props', props);
        const [search, setSearch] = useState("")
        const [list, setList] = useState(props.items)
        useEffect(() => {
            const filteredItems = props.items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            setList(filteredItems)
            console.log('filteredItems', filteredItems);
            console.log('search', search);
            console.log('list', list);
        }, [search])
        return (
            <div>
                <input
                    className="w-1/3 border border-gray-300 rounded-md px-4 py-2"
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <WrappedComponent items={list} {...props} />
            </div>
        )
    }
}