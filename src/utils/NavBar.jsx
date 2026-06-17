import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa";

const filters = [
    {
        displayName: "Trending",
        value: "trending"
    },
    {
        displayName: "Movies",
        value: "movies"
    },
    {
        displayName: "TV Shows",
        value: "tv"
    }
]

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [activePage, setActivePage] = useState(filters[0].value)
    const navigate = useNavigate()

    const updateSearchQuery = (event) => {
        setSearchQuery(event.target.value)
        console.log("Search Query = ", searchQuery)
    }

    const onClickHandler = (event) => {
        navigate(`search/${searchQuery}`)
    }

    const updateActivePage = (value) => {
        setActivePage(value)
    }

    return (
        <div className="w-screen p-5 flex gap-4 items-center">
            <Link to='/'>
                <img
                    src="https://files.readme.io/29c6fee-blue_short.svg"
                    alt="TMDB Logo"
                    className="h-7 w-20"
                ></img>
            </Link>

            {filters.map((filter, index) => {
                return (
                    <Link
                        to={`/${filter.value}`}
                        onClick={() => updateActivePage(filter.value)}
                        className={`p-2 font-bold rounded-lg ${(activePage === filter.value) ? "bg-red-500" : "hover:text-red-500"}`}
                        key={index}
                    >{filter.displayName}</Link>
                )
            })}

            <form
                className="flex"
                onSubmit={onClickHandler}
            >
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(event) => updateSearchQuery(event)}
                    className="px-2 bg-slate-700 border-2 border-transparent rounded-lg outline-none focus:border-red-500"
                >
                </input>
                <FaSearch className="px-5 h-auto w-auto text-red-500">
                    <button
                        type="submit"
                        onClick={(event) => onClickHandler(event)}
                    >Search</button>
                </FaSearch>
            </form>
        </div>
    )
}

export default NavBar