
//import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";



function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Suyog28")
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data);
    //         }
    //         )
    // }, [])
    return (
        <div className="flex flex-col bg-gray-700 p-8 text-center gap-3 items-center ">

            <h1 className="text-white text-3xl">Followers: {data.followers}</h1>
            <h1 className="text-white text-3xl">Name: {data.name}</h1>
            <h1 className="text-orange-500 text-3xl">Name: {data.location}</h1>
            <img src={data.avatar_url} width={"20%"} />

        </div>
    )
}

export default Github


// eslint-disable-next-line react-refresh/only-export-components
export const githubUserInfo = async () => {
    const response = await fetch("https://api.github.com/users/Suyog28");
    return response.json();
}