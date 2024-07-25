import MobileNav from "./mobile/MobileNav"
import Navbar from "./Navbar"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const Header = () => {
  const [logoWhite, setLogoWhite] = useState<boolean>(false)
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    if (path.startsWith("/bio")) {
      setLogoWhite(true)
    } else {
      setLogoWhite(false)
    }
  }, [path])

  return (
    <div className="absolute font-arial z-50 flex justify-between px-4 mt-3 w-full animate-fadeInHeader">
      <h1
        className={`text-5xl select-none font-skorzhen ${
          logoWhite ? "text-white md:text-white" : "text-white md:text-black"
        }`}
      >
        Pacific Palace
      </h1>

      <nav className="text-2xl items-center">
        <Navbar />
        <MobileNav />
      </nav>
    </div>
  )
}

export default Header
