import React, { Children } from "react";

export default function SocialButton(props:any) {
    return (
        <a className="text-[#CACACA] text-sm font-light pt-1 inline-block relative after:content-[''] after:absolute after:w-full after:h-[2.5px] after:bottom-[-2.5px] after:bg-[#D19A66] after:origin-bottom-right after:transition-transform after:duration-[0.35s] after:ease-[ease-out] after:scale-x-0 after:left-0 hover:after:origin-bottom-left hover:after:scale-x-100" href={props.href} target="_blank">{props.name}</a>
    )
} 