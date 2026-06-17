import { useEffect, useState } from "react";
import Item from "../itemInfo/Item";
import { HiEmojiSad } from "react-icons/hi";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
    }
};

const ListFetcher = (props) => {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/${props.endpoint}`;
        const fetchItems = async () => {
            try {
                console.log(`Fetching URL: ${url}`)
                const response = await fetch(url, options);
                const data = await response.json();
                console.log("Fetched items: ", data);
                setItemsList(data.results);
            }
            catch (error) {
                console.error("Error fetching items:", error);
            }
            finally {
                console.log("Fetch attempt completed.");
            }
        }
        fetchItems();
    }, [props.endpoint])

    return (
        <div className="p-5 grid grid-cols-4 gap-4">
            {
                (itemsList && itemsList.length > 0)
                    ? itemsList.map((item, index) => {
                        return (
                            <Item
                                item={item}
                                key={index}
                            ></Item>)
                    })
                    : <div
                        className="col-span-4 flex justify-center items-center text-xl"
                    >
                        No result found
                        <HiEmojiSad className="mx-2 text-2xl text-amber-300"></HiEmojiSad>
                    </div>
            }
        </div>
    )
}

export default ListFetcher