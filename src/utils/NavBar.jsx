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
    }

    const onClickHandler = (event) => {
        event.preventDefault()
        navigate(`/search/${searchQuery}`)
    }

    const updateActivePage = (value) => {
        setActivePage(value)
    }

    return (
        <div className="w-screen p-5 flex gap-4 items-center">
            <Link 
                to='/'
                onClick={() => updateActivePage(filters[0].value)}
            >
                <img
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
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
                <button
                    type="submit"
                    onClick={(event) => onClickHandler(event)}
                >
                    <FaSearch className="px-2 h-auto w-auto text-xl text-red-500"></FaSearch>
                </button>
            </form>
        </div>
    )
}

export default NavBar