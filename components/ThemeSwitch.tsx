// app/components/ThemeSwitch.tsx
'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()

 return (
  resolvedTheme === 'dark' ? (
    
    <div className=" w-20 h-full flex justify-center items-center">
      <FiMoon onClick={() => setTheme('light')} className="w-[50%] h-[50%] cursor-pointer transition-all ease-in-out duration-200"  />
    </div>
  ) : (
    <div className=" w-20 h-full flex justify-center items-center">
    <FiSun onClick={() => setTheme('dark')} className="w-[50%] h-[50%] cursor-pointer transition-all ease-in-out duration-200 "/>

    </div>
  )
)

}