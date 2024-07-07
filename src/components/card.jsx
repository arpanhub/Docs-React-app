import React from 'react'
import { IoDocumentsOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,reference:ref}) {
  return (
    <motion.div
      drag dragConstraints={ref}
      whileDrag={{ scale: 1.2 }} 
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className= 'relative flex-shrink-0 w-[15rem] h-[18rem] rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
      <IoDocumentsOutline/>
      <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full   left-0'>
        <div className='flex item-center justify-between  px-8 py-3  mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>{data.close ? <IoClose/>:<LuDownload size=".7em" color='#000'/>}
          </span>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full ${data.tag.tagcolor} py-3 flex items-center justify-center`}>
          <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
        </div>
          )
        }
        
      </div>
    </motion.div>
  )
}

export default Card;