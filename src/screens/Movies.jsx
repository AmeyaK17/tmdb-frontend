import { useState } from "react";
import ListFetcher from "../utils/ListFetcher";
import FilterBar from "../utils/FilterBar";

const filters = [
    {
        displayName: "Popular",
        value: "popular"
    },
    {
        displayName: "Now Playing",
        value: "now_playing"
    },
    {
        displayName: "Top Rated",
        value: "top_rated"
    },
    {
        displayName: "Upcoming",
        value: "upcoming"
    }
]

const Movies = () => {
    const [category, setCategory] = useState("popular")

    const updateCategory = (category) => {
        setCategory(category)
    }

    return (
        <div className="flex flex-col items-center p-5">
            <FilterBar filters={filters.map((filter) => (
                { ...filter, updateHandler: updateCategory }
            ))}></FilterBar>
            <ListFetcher endpoint={`movie/${category}`} />
        </div>
    )
}

export default Movies;