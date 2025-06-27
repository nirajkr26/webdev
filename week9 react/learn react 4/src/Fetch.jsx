import { useEffect, useState } from "react";
import usePostTitle from "./hooks/usePostTitle";

function Fetch() {
    const postTitle=usePostTitle()
    return <div>
        {postTitle}
    </div>
}

export default Fetch;