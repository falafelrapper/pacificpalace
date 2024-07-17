import React, { useEffect } from "react"

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
    <>
      <div id="cover" className="cover relative z-40">
        <img
          className="header-img absolute"
          src="/img/James_red.png"
          alt="Cover"
        />
      </div>
      <div
        id="tour"
        className="cover scroll-section z-20 flex flex-col items-center text-white font-arial"
      >
        <h2 className="z-30 my-10 text-5xl font-bold">TOUR</h2>

        <p className="z-30 text-3xl">No upcoming shows currently</p>

        <img
          className="cover-img absolute min-w-full select-none"
          src="/img/james_blue.png"
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
            className="h-[350px] w-[350px] md:h-[600px] md:w-[1000px]"
            src="https://www.youtube.com/embed/GgaqsiYcpBQ?si=AYxVeU7iv-20wZ9P"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="YouTube Video Player"
          ></iframe>
        </div>
        <img className="cover-img absolute" src="/img/hero.jpg" alt="Cover" />
      </div>
    </>
  )
}

export default Home
