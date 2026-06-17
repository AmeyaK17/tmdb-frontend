import { Link } from "react-router-dom"

const baseUrl = "https://image.tmdb.org/t/p/w342"

const Item = ({ item }) => {
    return (
        <Link to={
            item.first_air_date
                ? `/detail/tv/${item.id}`
                : `/detail/movie/${item.id}`}
        >
            <div
                className="h-auto w-auto p-2 flex flex-col items-center border border-transparent rounded-lg group hover:bg-red-500 hover:shadow-2xl hover:shadow-red-900"
            >
                <img
                    src={`${baseUrl}${item.poster_path}`}
                    alt="poster"
                    className="border border-transparent rounded-lg"
                ></img>
                <h3 className="font-bold text-red-500 group-hover:text-black transition-colors">{item.title}</h3>
                <div className="p-2 flex flex-col items-center">
                    <h4>Description:</h4>
                    <div>
                        {item.overview}
                    </div>
                </div>
                <div className="p-2 mt-auto">Popularity: {Math.round(item.popularity / 10)}%</div>
            </div>
        </Link>
    )
}

export default Item