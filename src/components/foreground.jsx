import React, { useRef, useState } from 'react'
import Card from './card';


function foreground() {
    const ref = useRef(null);
    const data=[
    {
        desc:"This is my custom doc notes for the project",
        filesize:"1mb",
        close:true,
        tag:{isOpen:true, tagtitle: "Download", tagcolor:"bg-green-600"},
    },
    {
        desc:"This is my custom doc notes for the project",
        filesize:"1mb",
        close:true,
        tag:{isOpen:true, tagtitle: "Download Now", tagcolor:"bg-red-600"},
    },
    {
        desc:"This is my custom doc notes for the project",
        filesize:"1mb",
        close:true,
        tag:{isOpen:true, tagtitle: "Download Now", tagcolor:"bg-blue-600"},
    },    
];

  return (
    <div  ref ={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data={item} reference={ref} />
        ))}
    </div> 
  )
}

export default foreground;