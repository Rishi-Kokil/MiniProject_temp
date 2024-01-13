import React from "react";


const Button = ({ text, callback, styles }) => {
    return (
        <button type="button"
            className=" py-4 m-2 px-6 bg-cyan-700 text-white font-poppins text-[18px] text-primary outline-none rounded-lg"
            styles={styles} >
            {text}
        </button>
    );
}

export default Button;