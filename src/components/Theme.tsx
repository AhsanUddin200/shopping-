"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa6'
import { BsSunFill } from 'react-icons/bs'

const Theme = () => {
    const [darkMode, setDarkMode] = useState(true)
    useEffect(()=>{
        const theme = localStorage.getItem('theme')
        if (theme === "dark") setDarkMode(true)

    },[])

    useEffect(()=> {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        }
        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    },[darkMode])
  return (
    <div>
      <div className='relative w-12 h-5 flex items-center
      dark:bg-gray-900 bg-teal-700 cursor-pointer rounded-full p-1'
      onClick={() => setDarkMode(!darkMode)}>
        <FaMoon className='text-white size-4' />
       
        <div className={`absolute bg-white  w-5 h-4 rounded-full shadow-md
          transform transition-transform duration-100`}
          style={darkMode ? {left: "2px"} : {right:"2px"}}
          > </div>
          <BsSunFill
          className='ml-auto text-yellow-500 size-'/>

     
      </div>
    </div>
  )
}

export default Theme
