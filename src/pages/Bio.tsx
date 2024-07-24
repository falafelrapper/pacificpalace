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
            The culmination project of LA native James Centeno, Pacific Palace
            crafts a dreamy spell on indie rock, drawing heavy influence from
            artists of the 80s and post-punk revival of the early 2000s.
            Bringing together classic synthesizers, acoustic/electric guitar,
            drum machines, and melancholy vocals, Pacific Palace explores common
            human themes through his DIY production. Working with frequent
            collaborator Brian Gutierrez, he embarks on a career of re-imagining
            a classic sound through a modern lens on his debut EP{" "}
            <strong>EXPOSURE THERAPY</strong>.
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
