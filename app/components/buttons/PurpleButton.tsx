import React from "react";

export default function PurpleButton(props: any) {
  return <a className='mt-1 px-4 py-2 text-[#D299FF] rounded-lg text-[14px] font-semibold bg-[#342942]' href={props.href}>{props.name}</a>;
}
