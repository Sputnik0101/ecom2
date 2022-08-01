import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { ListItem } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState, useEffect } from 'react'

const Product=(item)=> { 
    useEffect (()=>{
     console.log(item)
    },[])
    const [hoverEffect,setHoverEffects]= useState('opacity-0')
    const iconStyle="h-[40px] w-[40px] rounded-full bg-white flex items-end justify-end m-3 cursor-pointer hover:bg-[#894af3] hover: text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";
    const handleHoverEnter = ()=>{
        setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
    }
    const handleHoverExit= ()=>{
     setHoverEffects(' opacity-0')
    }

  return (
    <div className='flex item-centre justify-center min-w-[250px] min-h-[350px] overflow-hidden
    rounded-lg shadow-lg m-2 relative'onMouseEnter={handleHoverEnter}
    onMouseLeave={handleHoverExit}>
        <img src={item.item.src} alt='product_image'/>
        <div className={`flex item-centre justify-center w-[100%] h-[100%] absolute` + hoverEffect}>
            {/*icons*/}
            <div className={iconStyle}>
                <ShoppingCartOutlined/>
            </div>
            <div className={iconStyle}>
                <FavoriteBorderOutlined/>
            </div>

        </div>
        

    </div>
  )
}

export default Product