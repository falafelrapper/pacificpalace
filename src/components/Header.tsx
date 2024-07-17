import MobileNav from "./mobile/MobileNav"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className="absolute font-arial z-50 flex justify-between px-4 mt-3 w-full animate-fadeInHeader">
      <h1 className="text-5xl select-none">Pacific Palace</h1>

      <nav className="text-2xl items-center">
        <Navbar />
        <MobileNav />
      </nav>
    </div>
  )
}

export default Header
