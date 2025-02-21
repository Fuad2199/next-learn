import React from 'react'

interface LoginButtonProps{
    type?:"button" | "submit" | "reset" | undefined;
    fullWidth?:boolean;
    children?:React.ReactNode;
    onClick?: ()=>void;
}

const LoginButtton = ({children, fullWidth, onClick}:LoginButtonProps) => {
    return (
        <div>
            <button className={`p-3 bg-cyan-800 hover:bg-cyan-950 shadow-lg rounded-lg text-white cursor-pointer transition ${fullWidth && "w-full"}`}
                type="button" onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default LoginButtton
