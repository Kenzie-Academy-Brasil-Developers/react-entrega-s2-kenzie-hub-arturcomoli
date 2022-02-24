import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        outline: 0;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration:none;
    }


    :root {
        --color-primary: #FF577F;
        --color-primary-Focus: #FF427F;
        --color-primary-Negative: #59323f;

        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;

        --Success: #3FE864;
        --Negative: #E83F5B;

        --shadow: 0px 4px 40px -10px #00000040;


        body {
            background: var(--grey-4);
            font-family: "Inter", sans-serif;
            color: var(--grey-1)
        }

        h1, h2, h3 {
            font-size: 1rem
        } 

        h1, h3 {
            font-weight: 700;
        }

        h2 {
            font-weight: 600;
        }

        button {
            font-weight: 500;
            color: #fff; 
            cursor: pointer;    
            border-radius: 4px;        
        }

        label {
            font-weight: 400;
            color: var(--grey-0);
            font-size: 9px;
        }

        input, select {
            color: var(--grey-0);
            font-weight: 400;
            font-size: 13px;
            line-height: 21px;
            background-color: var(--grey-2);
            border: none;
        }

        input::placeholder, select::placeholder {
            color: var(--grey-1);
            font-weight: 400;
            font-size: 13px;
            line-height:21px;
        }

        @media screen and (min-width: 768px) {
            h1, h2, h3 {
            font-size: 18px;
        }                 

        label {            
            font-size: 0.75rem;
        }

        input, select {            
            font-size: 1rem;
            line-height: 26px;
        }

        input::placeholder, select::placeholder {            
            font-size: 1rem;
            line-height: 26px;
        }
        }
        
    }
`;

export const primary = "#FF577F";
export const primaryFocus = "#FF427F";
export const primaryNegative = "#59323f";
export const grey0 = "#F8F9FA";
export const grey1 = "#868E96";
export const grey2 = "#343B41";
export const grey3 = "#212529";
export const grey4 = "#121214";
export const Success = "#3FE864";
export const Negative = "#E83F5B";
export const shadow = "0px 4px 40px -10px #00000040";
