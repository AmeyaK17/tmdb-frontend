import { useState, useEffect } from "react"
import { useParams } from "react-router";

const baseImageUrl = "https://image.tmdb.org/t/p"
const baseUrl = 'https://api.themoviedb.org/3';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
    }
};

const Detail = () => {
    const { type, movieId: itemId } = useParams()
    const [itemInfo, setItemInfo] = useState({
        genres: [],
        production_companies: [],
        origin_country: [],
        spoken_languages: [],

    })

    useEffect(() => {
        const fetchItemInfo = async () => {
            try {
                const response = await fetch(`${baseUrl}/${type}/${itemId}`, options)
                const data = await response.json()
                console.log("data = ", data)
                setItemInfo(data)
            }
            catch (error) {
                console.log("Error fetching movie details", error)
            }
            finally {
                console.log("Movie detail fetch attempt completed")
            }
        }

        fetchItemInfo()
    }, [itemId, type])

    return (
        <div className="relative min-h-screen w-screen p-5">
            <img
                src={`${baseImageUrl}/w780${itemInfo.backdrop_path}`}
                alt="backdrop"
                className="absolute inset-0 h-full w-full object-cover opacity-40"
            ></img>

            <div className="relative z-10 flex flex-col justify-end min-h-screen">
                <div className="p-5">
                    <h1 className="text-5xl text-red-500">
                        {itemInfo.title ?? itemInfo.name}
                    </h1>
                    <h3 className="text-xl">{itemInfo.tagline}</h3>
                </div>

                <div className="px-5 py-2">
                    <h4 className="text-red-500">Release Date:</h4>
                    <p> {itemInfo.release_date}</p>
                </div>

                <div className="px-5 spy-2">
                    <h4 className="text-red-500">Overview</h4>
                    <p className="">{itemInfo.overview}</p>
                </div>

                <div className="px-5 py-2">
                    <h4 className="text-red-500">Genre</h4>
                    <div className="flex gap-2">
                        {itemInfo.genres.map((genre, index) => {
                            return <div key={index}>{genre.name}</div>
                        })}
                    </div>
                </div>

                <div className="px-5 py-2">
                    <h4 className="text-red-500">Spoken Languages</h4>
                    <div className="flex gap-2">
                        {itemInfo.spoken_languages.map((language, index) => {
                            return <div key={index}>{language.english_name}</div>
                        })}
                    </div>
                </div>

                <div className="px-5 py-2">
                    <h4 className="text-red-500">Produced In</h4>
                    <div className="flex gap-2">
                        {itemInfo.origin_country.map((country, index) => {
                            return <div key={index}>{country}</div>
                        })}
                    </div>
                </div>

                <div className="px-5 py-2">
                    <h4 className="text-red-500">Produced By</h4>
                    <div className="flex gap-2 h-10 w-20">
                        {itemInfo.production_companies.map((company, index) => {
                            return <img className="p-2 bg-white rounded-lg" key={index} src={`${baseImageUrl}/w92${company.logo_path}`} alt="company logo"></img>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail