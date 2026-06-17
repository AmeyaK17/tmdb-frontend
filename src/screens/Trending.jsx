import { useState } from "react"
import ListFetcher from "../utils/ListFetcher"
import FilterBar from "../utils/FilterBar"

const filters = [
    {
        displayName: "Day",
        value: "day"
    },
    {
        displayName: "Week",
        value: "week"
    }
]

const Trending = () => {
    const [timeWindow, setTimeWindow] = useState("day")

    const updateTimeWindow = (timeWindow) => {
        setTimeWindow(timeWindow)
    }

    return (
        <div className="flex flex-col items-center p-5">
            <FilterBar filters={filters.map((filter) => (
                { ...filter, updateHandler: updateTimeWindow }
            ))}></FilterBar>
            <ListFetcher endpoint={`trending/all/${timeWindow}`}></ListFetcher>
        </div>
    )
}

export default Trending