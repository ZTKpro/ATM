import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

    
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        color: ${colors.white};
        transition: all .4s ease;
    }

    
`;