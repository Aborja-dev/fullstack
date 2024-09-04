import { useState } from 'react'

const SearchBar = ({onChange}: {onChange: (value: string) => void}) => {
  const [search, setSearch] = useState('')
  return (
    <div>
      <input type="text" value={search} onChange={(e) => {
        setSearch(e.target.value)
        onChange(e.target.value)
      }} placeholder="Search..." />
    </div>
  )
}

export default SearchBar
