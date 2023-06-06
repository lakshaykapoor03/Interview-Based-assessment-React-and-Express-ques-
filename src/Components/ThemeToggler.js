import React from 'react'
import themeContext from '../Utils/ThemeContext'
import { useContext } from 'react'
import { theme } from '../Utils/ThemeContext'


const ThemeToggler = () => {

    // const [theme, setTheme]= useState("light")
    
     const[themeMode, setThemeMode] = useContext(themeContext)
     console.log(themeMode)
    const currentTheme = theme[themeMode]
    console.log(currentTheme)    
  return (
    <div style={{backgroundColor:`${currentTheme.backgroundColor}`, color:`${currentTheme.color}`, border:`${currentTheme.border}`, padding:"20px 10px"}}>
<h1> This is a Theme Toggler</h1>
<button onClick={()=>{setThemeMode(themeMode==="light"?"dark": "light")}}>Change Theme</button>
<h2>ThemeMode-{themeMode}</h2>

    </div>
  )
}

export default ThemeToggler