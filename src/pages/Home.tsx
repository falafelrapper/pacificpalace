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
    const tourImageElement = tourElement.querySelector(
      ".cover-img"
    ) as HTMLElement
    const videosImageElement = videosElement.querySelector(
      ".cover-img"
    ) as HTMLElement

    if (
      !tourElement ||
      !videosElement ||
      !tourImageElement ||
      !videosImageElement
    )
      return

    const tourRect = tourElement.getBoundingClientRect()
    const videosRect = videosElement.getBoundingClientRect()

    const isTourVisible =
      tourRect.top < window.innerHeight && tourRect.bottom >= 0
    const isVideosVisible =
      videosRect.top < window.innerHeight && videosRect.bottom >= 0

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
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="animate-fadeIn">
      <div id="cover" className="cover relative z-40">
        <img
          className="header-img absolute pointer-events-none"
          src="/img/james_red.jpg"
          alt="Cover"
        />
      </div>
      <div
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
      </div>
      <div
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
      </div>
      <div
        id="contact"
        className="cover scroll-section z-20 flex flex-col items-center text-white font-arial"
      >
        <h2 className="z-50 my-10 text-5xl font-arial font-bold text-white">
          CONTACT
        </h2>
        <div className="z-30 h-1/2 flex flex-col justify-evenly items-center">
          <h3 className="my-5 text-4xl">Booking / Media / Press</h3>
          <a
            className=" my-5 text-3xl hover:text-gray-500"
            href="mailto:itspacificpalace@gmail.com"
          >
            itspacificpalace@gmail.com
          </a>
          <a
            className={`my-2`}
            href="https://www.instagram.com/pacific.palaceee/"
            target="_blank"
          >
            <FontAwesomeIcon
              className="ease-in-out duration-100 mx-3 h-20 hover:text-gray-500"
              icon={faInstagram}
            />
          </a>
          <a
            className={`my-2`}
            href="https://x.com/pacificpalaceee"
            target="_blank"
          >
            <FontAwesomeIcon
              className="ease-in-out duration-100 mx-3 h-20 hover:text-gray-500"
              icon={faTwitter}
            />
          </a>
        </div>
        <img
          className="cover-img video-img absolute pointer-events-none"
          src="/img/band_purple.jpg"
          alt="Cover"
        />
      </div>
    </div>
  )
}

export default Home
