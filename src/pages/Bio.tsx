import { useEffect } from "react"

const Bio = () => {
  const handleScroll = () => {
    const jamesElement = document.getElementById("james") as HTMLElement
    const brianElement = document.getElementById("brian") as HTMLElement
    const zachElement = document.getElementById("zachary") as HTMLElement
    const rickyElement = document.getElementById("ricky") as HTMLElement
    const jamesImageElement = jamesElement.querySelector(
      ".bg-pic"
    ) as HTMLElement
    const brianImageElement = brianElement.querySelector(
      ".bg-pic"
    ) as HTMLElement
    const zachImageElement = zachElement.querySelector(".bg-pic") as HTMLElement
    const rickyImageElement = rickyElement.querySelector(
      ".bg-pic"
    ) as HTMLElement

    if (
      !jamesElement ||
      !brianElement ||
      !zachElement ||
      !rickyElement ||
      !jamesImageElement ||
      !brianImageElement ||
      !zachImageElement ||
      !rickyImageElement
    )
      return

    const jamesRect = jamesElement.getBoundingClientRect()
    const brianRect = brianElement.getBoundingClientRect()
    const zachRect = zachElement.getBoundingClientRect()
    const rickyRect = rickyElement.getBoundingClientRect()

    const isJamesVisible =
      jamesRect.top < window.innerHeight && jamesRect.bottom >= 0
    const isBrianVisible =
      brianRect.top < window.innerHeight && brianRect.bottom >= 0
    const isZachVisible =
      zachRect.top < window.innerHeight && zachRect.bottom >= 0
    const isRickyVisible =
      rickyRect.top < window.innerHeight && rickyRect.bottom >= 0

    if (isJamesVisible) {
      const scrollPosition = window.scrollY
      const zoomFactor = 0 - scrollPosition / 100 // Adjust this factor as needed
      jamesImageElement.style.transform = `translateY(${zoomFactor}rem)`
    } else {
      jamesImageElement.style.transform = "translateY(0)"
    }

    if (isBrianVisible) {
      const scrollPosition = window.scrollY
      const zoomFactor = 1 + scrollPosition / 10000 // Adjust this factor as needed
      brianImageElement.style.transform = `scale(${zoomFactor})`
    } else {
      brianImageElement.style.transform = "scale(1)"
    }

    // if (isbrianVisible) {
    //   const scrollPosition = window.scrollY
    //   const zoomFactor = 1 - scrollPosition / 10 // Adjust this factor as needed
    //   brianImageElement.style.transform = `translateY(${zoomFactor}rem)`
    // } else {
    //   brianImageElement.style.transform = "translateY(0rem)"
    // }

    if (isZachVisible) {
      const scrollPosition = window.scrollY
      const zoomFactor = 0 + scrollPosition / 400 // Adjust this factor as needed
      zachImageElement.style.transform = `translateY(${zoomFactor}rem) scale(1.5)`
    } else {
      zachImageElement.style.transform = "translateY(0) scale(1.5)"
    }

    if (isRickyVisible) {
      const scrollPosition = window.scrollY
      const zoomFactor = 1 + scrollPosition / 10000 // Adjust this factor as needed
      rickyImageElement.style.transform = `translateY(${zoomFactor})`
    } else {
      rickyImageElement.style.transform = "translateY(1)"
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <main className="flex flex-col items-center pt-20 text-white animate-fadeIn font-nueHassText">
        <h1 className="text-5xl font-bold">BIO</h1>
        <section
          id="james"
          className="flex flex-col h-fit lg:flex-row items-center justify-evenly py-10 overflow-hidden"
        >
          <img
            className="w-56 lg:h-[32rem] lg:w-[32rem] object-cover object-center rounded-md"
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
            className="absolute -z-20 top-0 h-full min-w-full object-center object-cover pointer-events-none select-none bg-pic"
            src="/img/festival3.jpg"
            alt="Band playing in a dark room"
          />
          <div className="h-full w-full -z-10 bg-gray-900/60 absolute" />
        </section>

        <section
          id="brian"
          className="flex relative flex-col-reverse lg:flex-row items-center justify-evenly py-10 overflow-hidden"
        >
          <p className="my-8 w-5/6 lg:w-1/3 text-xl font-bold">
            Brian Gutierrez was born and raised in the heart of Downtown Los
            Angeles. He started playing music for his church when he was just 10
            years old, and since then, he’s had a mix of formal and informal
            musical training. With a deep appreciation for all things creative,
            Brian wants to inspire people to go beyond just enjoying music and
            really connect with it.
          </p>
          <img
            className="w-56 lg:h-[32rem] lg:w-[32rem] object-cover object-center rounded-md"
            src="/img/brian_bio.png"
            alt="Brian Gutierrez"
          />
          <img
            className="-z-10 absolute min-w-full h-full object-cover object-center pointer-events-none bg-pic"
            src="/img/bio_bg3.png"
            alt="Cover"
          />
          <div className="h-full w-full -z-10 bg-gray-900/60 absolute" />
        </section>

        <section
          id="zachary"
          className="flex relative flex-col lg:flex-row items-center justify-evenly py-10 overflow-hidden"
        >
          <img
            className="w-56 lg:h-[32rem] lg:w-[32rem] object-cover object-center rounded-md"
            src="/img/zach_bio.jpg"
            alt="Zachary Roy"
          />
          <p className="my-8 w-5/6 lg:w-1/3 text-xl font-bold text-wrap">
            With a dad who was insanely in love with Rush and Neil Peart's
            drumming style and a love for rhythm games, jamesary Roy was
            surrounded by this love of percussion from a young age. At 13, a
            drum cover sent by a friend instantly drove him to a passion of
            learning drums. He plays a variety of different drumming styles, but
            with a bias leaning towards electronic pop and metal. He currently
            plays with both Pacific Palace and Meishi Smile, but when he's not
            laying a fat blast beat, he also works as a software engineer.
          </p>
          <img
            className="-z-10 cover-img absolute min-w-full h-full pointer-events-none bg-pic"
            src="/img/band_bw.jpg"
            alt="Cover"
          />
          <div className="h-full w-full -z-10 bg-black/30 absolute" />
        </section>

        <section
          id="ricky"
          className="flex relative flex-col-reverse lg:flex-row items-center justify-evenly py-10 overflow-hidden"
        >
          <p className="my-8 w-5/6 lg:w-1/3 text-xl font-bold">
            Ricky Rey’s passion for music ignited at age 7 when his grandfather
            gifted him a Tama drum set. From then on he was hooked, drumming
            along to everything from Black Flag to Nirvana. As he grew older, he
            started delving into experimental and psychedelic rock. Once he got
            to college, Ricky made the switch to guitar and auditioned for a
            commercial ensemble, sparking a fascination with guitar pedals and
            gear. Since then, he’s been dedicated to perfecting his craft and
            expanding his musical knowledge.
          </p>
          <img
            className="w-56 lg:h-[32rem] lg:w-[32rem] object-cover object-center rounded-md"
            src="/img/rickie_bio.jpg"
            alt="Ricky Rey"
          />
          <img
            className="-z-10 absolute min-w-full h-full object-cover object-center pointer-events-none bg-pic"
            src="/img/forest-bg.png"
            alt="Cover"
          />
          <div className="h-full w-full -z-10 bg-gray-800/50 absolute" />
        </section>
      </main>
    </>
  )
}

export default Bio
