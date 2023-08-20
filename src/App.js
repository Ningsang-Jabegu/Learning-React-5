import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
      const reactBadge = document.querySelector(".react-badge")
          const body = document.querySelector("body")
        if(darkMode) {
          setDarkMode(prevMode => !prevMode)
          body.style.background = "#2727275f"
          reactBadge.style.color = "black"
          reactBadge.style.background = "#ffffffc0"
        } else {
          setDarkMode(prevMode => !prevMode)
          body.style.background = "#000000a5"
          reactBadge.style.color = "#ffffffc0"
          reactBadge.style.background = "#1C1C1C"
        }
    }
    
    return (
      <>
        
          <div className="container">
          <p className="react-badge">Learning-React-5 </p>
              <Navbar 
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}
              />
              <Main darkMode={darkMode} />
          </div>
        </>
    )
}