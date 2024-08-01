import { useState } from "react"

const Navbar = () => {
  const [value, setValue] = useState("Navbar")

  const handleClick = () =>{
    if (value === "Button Clicked") setValue("Navbar")
    else setValue("Button Clicked")
    
  }
  return (
    <div>{value}
    <button type="button" onClick={handleClick}>CLICK HERE</button>
    </div>
  )
}

export default Navbar