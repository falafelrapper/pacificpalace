import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Home: React.FC = () => {
  useEffect(() => {
    const handleSmoothScroll = (event: Event) => {
      event.preventDefault()
      const targetId = (event.target as HTMLAnchorElement).getAttribute("href")
      if (targetId) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const anchorLinks = document.querySelectorAll("a[href^='#']")
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  const handleScroll = () => {
    const tourElement = document.getElementById("tour") as HTMLElement
    const videosElement = document.getElementById("videos") as HTMLElement
    const contactElement = document.getElementById("contact") as HTMLElement
    const tourImageElement = tourElement.querySelector(
      ".cover-img"
    ) as HTMLElement
    const videosImageElement = videosElement.querySelector(
      ".cover-img"
    ) as HTMLElement
    const contactImageElement = contactElement.querySelector(
      ".cover-img"
    ) as HTMLElement

    if (
      !tourElement ||
      !videosElement ||
      !tourElement ||
      !tourImageElement ||
      !videosImageElement ||
      !contactImageElement
    )
      return

    const tourRect = tourElement.getBoundingClientRect()
    const videosRect = videosElement.getBoundingClientRect()
    const contactRect = contactElement.getBoundingClientRect()

    const isTourVisible =
      tourRect.top < window.innerHeight && tourRect.bottom >= 0
    const isVideosVisible =
      videosRect.top < window.innerHeight && videosRect.bottom >= 0
    const isContactVisible =
      contactRect.top < window.innerHeight && contactRect.bottom >= 0

    if (isTourVisible) {
      const scrollPosition = window.scrollY
      const zoomFactor = 1 + scrollPosition / 10000 // Adjust this factor as needed
      tourImageElement.style.transform = `scale(${zoomFactor})`
    } else {
      tourImageElement.style.transform = "scale(1)"
    }

    if (isVideosVisible) {
      const scrollPosition = window.scrollY
      const zoomFactor = 1.5 - scrollPosition / 10000 // Adjust this factor as needed
      videosImageElement.style.transform = `scale(${zoomFactor})`
    } else {
      videosImageElement.style.transform = "scale(1.5)"
    }

    // if (isVideosVisible) {
    //   const scrollPosition = window.scrollY
    //   const zoomFactor = 1 - scrollPosition / 10 // Adjust this factor as needed
    //   videosImageElement.style.transform = `translateY(${zoomFactor}rem)`
    // } else {
    //   videosImageElement.style.transform = "translateY(0rem)"
    // }

    if (isContactVisible) {
      const scrollPosition = window.scrollY
      const zoomFactor = 1 + scrollPosition / 10000 // Adjust this factor as needed
      contactImageElement.style.transform = `scale(${zoomFactor})`
    } else {
      contactImageElement.style.transform = "scale(1)"
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="animate-fadeIn">
      <section id="cover" className="cover relative z-40">
        <img
          className="header-img absolute pointer-events-none"
          src="/img/james_red.jpg"
          alt="Cover"
        />
      </section>
      <section
        id="tour"
        className="cover scroll-section z-20 flex flex-col items-center text-white font-arial"
      >
        <h2 className="z-30 my-10 text-5xl font-bold">SHOWS</h2>

        <p className="z-30 text-3xl">No upcoming shows currently</p>

        <img
          className="cover-img absolute min-w-full pointer-events-none"
          src="/img/james_blue.jpg"
          alt="Cover"
        />
      </section>
      <section
        id="videos"
        className="cover scroll-section relative z-20 flex flex-col items-center"
      >
        <h2 className="z-50 my-10 text-5xl font-arial font-bold text-white">
          VIDEOS
        </h2>
        <div className="z-50 h-full flex items-center">
          <iframe
            className="h-[300px] w-[400px] md:h-[500px] md:w-[800px] lg:h-[720px] lg:w-[1280px]"
            src="https://www.youtube.com/embed/GgaqsiYcpBQ?si=AYxVeU7iv-20wZ9P"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="YouTube Video Player"
          ></iframe>
        </div>
        <img
          className="cover-img video-img absolute pointer-events-none"
          src="/img/band_purple.jpg"
          alt="Cover"
        />
      </section>
      <section
        id="contact"
        className="cover scroll-section z-20 flex flex-col items-center text-white font-arial"
      >
        <h2 className="z-50 my-10 text-5xl font-arial font-bold">CONTACT</h2>
        <h3 className="z-50 text-4xl font-bold">Booking / Media / Press</h3>
        <div className="z-30 h-2/3 flex flex-col justify-evenly items-center">
          <a
            className=" my-5 text-3xl duration-200 ease-in-out hover:text-gray-400"
            href="mailto:itspacificpalace@gmail.com"
          >
            itspacificpalace@gmail.com
          </a>
          <a
            className={``}
            href="https://www.instagram.com/pacific.palaceee/"
            target="_blank"
          >
            <FontAwesomeIcon
              className="ease-in-out duration-200 mx-3 h-20 hover:text-gray-400"
              icon={faInstagram}
            />
          </a>
          <a
            className={``}
            href="https://x.com/pacificpalaceee"
            target="_blank"
          >
            <FontAwesomeIcon
              className="ease-in-out duration-200 mx-3 h-20 hover:text-gray-400"
              icon={faTwitter}
            />
          </a>
        </div>
        <img
          className="cover-img video-img absolute pointer-events-none"
          src="/img/festival3.jpg"
          alt="Cover"
        />
        <div className="h-full w-full z-10 bg-gray-800/60 absolute" />
      </section>
    </main>
  )
}

export default Home
