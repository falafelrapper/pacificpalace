const Bio = () => {
  return (
    <>
      <div className="flex font-arial flex-col items-center pt-20 text-white">
        <h1 className="text-5xl font-bold">BIO</h1>
        <div className="flex flex-col h-fit lg:flex-row items-center justify-evenly py-10">
          <img
            className="w-56 lg:h-[550px] lg:w-[550px] object-cover object-center"
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
          <img
            className="absolute -z-10 top-0 h-full min-w-full object-center object-cover pointer-events-none select-none"
            src="/img/band_purple.jpg"
            alt="Band playing in a dark room"
          />
        </div>
        <div className="flex relative flex-col-reverse lg:flex-row items-center justify-evenly py-10">
          <p className="my-8 w-5/6 lg:w-1/3 text-xl font-bold">
            "Whopper, Whopper, Whopper, Whopper Junior, Double, Triple Whopper.
            Flame-grilled taste with perfect toppers. I rule this day. Lettuce,
            mayo, pickle, ketchup. It's okay if I don't want that. Impossible or
            bacon Whopper. Any Whopper my way. You rule, you're seizin' the day.
            At BK, have it your way. You rule!" - Brian Gutierrez
          </p>
          <img
            className="w-56 lg:h-[550px] lg:w-[550px] object-cover object-center"
            src="/img/brian_bio.jpg"
            alt="Brian Gutierrez"
          />
          <img
            className="-z-10 absolute min-w-full h-full object-cover object-center pointer-events-none"
            src="/img/james_blue.jpg"
            alt="Cover"
          />
        </div>
        <div className="flex relative flex-col lg:flex-row items-center justify-evenly py-10">
          <img
            className="w-56 lg:h-[550px] lg:w-[550px] object-cover object-center"
            src="/img/zach_bio.jpg"
            alt="Zachary Roy"
          />
          <p className="my-8 w-5/6 lg:w-1/3 text-xl font-bold">
            With a dad who was insanely in love with Rush and Neil Peart's
            drumming style and a love for rhythm games, Zachary Roy was
            surrounded by this love of percussion from a young age. At 13, he
            had seen a drum cover that a friend forwarded over to him that
            instantly drove him to a passion of learning drums. He plays a
            variety of different styles, with a bias towards electronic pop and
            metal. He currently plays with both Pacific Palace and Meishi Smile,
            but when he's not laying a fat blast beat, he also works as a
            software engineer. In fact, you are currently on one of his websites
            that he designed.
          </p>
          <img
            className="-z-10 cover-img absolute min-w-full h-full pointer-events-none"
            src="/img/james_blue.jpg"
            alt="Cover"
          />
        </div>
        <div className="flex relative flex-col-reverse lg:flex-row items-center justify-evenly py-10">
          <p className="my-8 w-5/6 lg:w-1/3 text-xl font-bold">
            Rickie Rey's peak interest in music started at the age of 7, when
            his grandfather gifted him a Tama drum-set. Since then, he continued
            to play drums, from Black Flag to Nirvana and the older he got, he
            began to get more into experimental/psychedelic rock. During
            college, he transitioned to be a guitarist and auditioned to be in
            commercial ensemble. His obsession in guitar pedals and gear began
            and since then he continues to learn more in perfecting his craft.
          </p>
          <img
            className="w-56 lg:h-[550px] lg:w-[550px] object-cover object-center"
            src="/img/rickie_bio.jpg"
            alt="Rickie Rey"
          />
          <img
            className="-z-10 absolute min-w-full h-full object-cover object-center pointer-events-none"
            src="/img/james_blue.jpg"
            alt="Cover"
          />
        </div>
      </div>
    </>
  )
}

export default Bio
