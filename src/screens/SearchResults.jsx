import { useParams } from "react-router"
import ListFetcher from "../utils/ListFetcher"
import FilterBar from "../utils/FilterBar"
import { useState } from "react"

const filters = [
    {
        displayName: "Movies",
        value: "movie"
    },
    {
        displayName: "TV Shows",
        value: "tv"
    }
]

const SearchResults = () => {
    const { keyword } = useParams()
    const [type, setType] = useState("movie")

    const updateType = (type) => {
        setType(type)
    }

    return (
        <div className="flex flex-col items-center p-5">
            <FilterBar filters={filters.map((filter) => (
                { ...filter, updateHandler: updateType }
            ))}></FilterBar>
            <ListFetcher endpoint={`search/${type}?query=${keyword}`}></ListFetcher>
        </div>
    )
}

export default SearchResults