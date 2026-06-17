import { useState } from "react";
import ListFetcher from "../utils/ListFetcher";
import FilterBar from "../utils/FilterBar";

const filters = [
    {
        displayName: "Popular",
        value: "popular"
    },
    {
        displayName: "Airing Today",
        value: "airing_today"
    },
    {
        displayName: "On The Air",
        value: "on_the_air"
    },
    {
        displayName: "Top Rated",
        value: "top_rated"
    }
]

const TvShows = () => {
    const [category, setCategory] = useState("popular")

    const updateCategory = (category) => {
        setCategory(category)
    }

    return (
        <div className="flex flex-col items-center p-5">
            <FilterBar filters={filters.map((filter) => (
                { ...filter, updateHandler: updateCategory }
            ))}></FilterBar>
            <ListFetcher endpoint={`tv/${category}`} />
        </div>
    )
}

export default TvShows;