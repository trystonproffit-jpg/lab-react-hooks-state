import React from 'react'

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {

  return (
    <button onClick={toggleDarkMode}>
      Toggle {isDarkMode ? "Light" : "Dark"} Mode
    </button>
  )
}

export default DarkModeToggle
