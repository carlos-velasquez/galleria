import React from "react";
import { useContext } from "react";
import MyContext from "../My_context";

const Emoji = () => {

    const { data,setData } = useContext(MyContext)
    return (
        <li >🍕</li>
    )
}

export default Emoji;