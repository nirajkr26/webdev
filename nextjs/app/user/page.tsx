import axios from "axios";

export default async function () {
    const response = await axios.get("http://localhost:3000/api/v1/user/details")

    await new Promise(r => setTimeout(r, 3000))

    const data = response.data;

    return (
        <div>
            USER
            <br />
            {data.user}
            <br />
            {data.email}
        </div>
    )
}