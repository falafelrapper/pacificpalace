const Bio = () => {
  return (
    <>
      <div className="flex font-arial flex-col items-center pt-20 text-white">
        <h1 className="text-5xl font-bold">ABOUT US</h1>
        <div className="flex flex-col lg:flex-row items-center justify-evenly py-10">
          <img
            className="w-56 lg:w-1/3 object-cover object-center"
            src="/img/CIAL.jpg"
            alt="James Centeno"
          />
          <p className="my-8 w-5/6 lg:w-1/3 text-xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <img
        className="absolute -z-10 top-0 h-screen w-screen object-cover object-center pointer-events-none select-none"
        src="/img/band_purple.jpg"
        alt=""
      />
    </>
  )
}

export default Bio
