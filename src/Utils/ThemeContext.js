import { createContext } from "react";

export const theme = {
    light:{
        color: "#000",
        backgroundColor:"#fff",
        border: "1px solid #000"
    },
    dark:{
        color: "#fff",
        backgroundColor:"#000",
        border: "1px dashed #fff"
    },

}

const themeContext = createContext("light")

export default themeContext;