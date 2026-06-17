import { useState } from "react"

const FilterBar = ({ filters }) => {
    const [activeFilter, setActiveFilter] = useState(filters[0].value)

    const updateFilterValue = (value, updateHandler) => {
        updateHandler(value)
        setActiveFilter(value)
    }

    return (
        <div className="flex gap-4 p-5">
            {filters.map((filter, index) => {
                return (
                    <button
                        className={
                            `p-2 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-red-900 
                            ${(activeFilter === filter.value) ? "bg-red-500 text-white" : "hover:text-red-500"}`
                        }
                        onClick={() => updateFilterValue(filter.value, filter.updateHandler)}
                        key={index}
                    >
                        {filter.displayName}
                    </button>
                )
            })}
        </div>
    )
}

export default FilterBar