const Header = () => {
  return (
    <>
      <div className="absolute font-arial z-50 flex justify-between px-4 mt-3 w-full">
        <h1 className="text-5xl">Pacific Palace</h1>

        <nav className="text-2xl">
          <a href="#tour" className="mx-3">
            Tour
          </a>
          <a href="#videos">Videos</a>
        </nav>
      </div>
    </>
  )
}

export default Header
