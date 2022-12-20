import { useContext } from "react";
import MyContext from "../My_context";

const ContadorMas = () => {
    const [data, setData] = useContext(MyContext)

    return(
        <button onClick={e => setData(data + 1)}>+</button>
    );



}

export default ContadorMas;