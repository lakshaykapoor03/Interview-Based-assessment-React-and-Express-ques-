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
    <>
    <h1>Question 9 - <span>Dashboard with button on clicking on that change theme to dark and light</span> </h1>
    <div className="theme-container" style={{backgroundColor:`${currentTheme.backgroundColor}`, color:`${currentTheme.color}`, border:`${currentTheme.border}`, padding:"20px 10px"}}>
<h1> This is a Theme Toggler</h1>
<p>Click on Change Theme button to change the Theme.</p>
<button className="changeTheme-btn" onClick={()=>{setThemeMode(themeMode==="light"?"dark": "light")}}>Change Theme</button>
<h2>ThemeMode-{themeMode}</h2>

    </div>
    </>
  )
}

export default ThemeToggler